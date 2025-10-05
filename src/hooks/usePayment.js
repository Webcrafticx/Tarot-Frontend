import { useState } from "react";
import { createPaymentOrder, verifyPayment } from "../services/appointment";

export const usePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const processPayment = async (appointmentData, onSuccess, onError) => {
    setIsProcessing(true);

    try {
      const paymentResponse = await createPaymentOrder(appointmentData);
      
      if (!paymentResponse.success) {
        throw new Error(paymentResponse.message || "Failed to create payment order");
      }
      
      const orderData = paymentResponse.data.order;
      const amountInPaise = orderData.amount > 0 
        ? orderData.amount
        : appointmentData.price * 100;
      
      const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
      
      if (!res) {
        throw new Error("Razorpay SDK failed to load");
      }

      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

      const options = {
        key: razorpayKey,
        amount: amountInPaise,
        currency: "INR",
        name: "RaveenaTarotStarr",
        description: `Appointment for ${appointmentData.serviceType}`,
        image: "/logo.png",
        order_id: orderData.id,
        handler: async function (razorpayResponse) {
          try {
            const result = await verifyPayment(razorpayResponse, appointmentData);
            if (result.success) {
              onSuccess(result, appointmentData);
            } else {
              throw new Error(result.message || "Payment verification failed");
            }
          } catch (error) {
            onError(error);
          }
        },
        prefill: {
          name: appointmentData.name,
          email: appointmentData.email,
          contact: appointmentData.phone
        },
        notes: {
          address: appointmentData.location,
          service: appointmentData.serviceType,
          windowDates: appointmentData.selectedWindowDates.displayDate
        },
        theme: {
          color: "#5B2655"
        },
        modal: {
          ondismiss: function() {
            console.log("Payment modal dismissed");
            setIsProcessing(false);
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      
      paymentObject.on('payment.failed', function (response) {
        onError(new Error(response.error.description));
      });
      
    } catch (error) {
      onError(error);
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    processPayment,
    setIsProcessing
  };
};