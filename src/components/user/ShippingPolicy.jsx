import React from "react";
import Container from "../../ui/Container";

const ShippingPolicy = () => {
  return (
    <div className="bg-gray-100 py-12">
      <Container>
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Shipping Policy
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              At <span className="font-semibold">RaveenaTarotStarr</span>, we
              provide both digital and physical services/products. This Shipping
              Policy explains how and when you will receive your order.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              1. Digital Services
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                For tarot readings, consultations, and spiritual guidance
                sessions booked online, confirmation details are shared via
                email or WhatsApp within <span className="font-semibold">24 hours</span>.
              </li>
              <li>
                Links or session details for online meetings (Zoom/Google Meet)
                will be provided prior to the scheduled appointment.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-black">
              2. Physical Products
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                For items like crystals, spiritual kits, or other tangible
                products, shipping will be processed within{" "}
                <span className="font-semibold">3–7 business days</span> of
                order confirmation.
              </li>
              <li>
                Delivery timelines may vary depending on your location and
                courier partner.
              </li>
              <li>
                Customers will receive a tracking number once the product is
                dispatched.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-black">
              3. International Shipping
            </h2>
            <p>
              International orders may take longer depending on customs
              clearance and local regulations. Any customs duty or import tax is
              the responsibility of the customer.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              4. Delays
            </h2>
            <p>
              While we strive to deliver all products and services on time,
              unforeseen circumstances (e.g., natural calamities, courier delays)
              may impact delivery schedules. We will keep you updated in such
              cases.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              5. Contact Us
            </h2>
            <p>
              For any questions regarding your order or shipping details, please
              contact us:
            </p>
            <p className="font-semibold">
              Email: Raveenatarotstarr@gmail.com <br />
              Phone: +91 9008408625
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShippingPolicy;
