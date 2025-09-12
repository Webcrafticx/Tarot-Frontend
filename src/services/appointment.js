// src/services/appointment.js
import axios from "axios";
import API_BASE_URL from "../config/api";

// Create payment order for appointment
export const createPaymentOrder = async (appointmentData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/payment/create-appointment`,
      appointmentData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message || "Network error. Please try again." };
  }
};

// Verify payment and create appointment
export const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/payment/verify`,
      paymentData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message || "Payment verification failed." };
  }
};

// Get all appointments (admin)
export const getAllAppointments = async (page = 1, limit = 10) => {
  try {
    const token = localStorage.getItem("authToken");
    
    if (!token) {
      throw new Error("No authentication token found. Please login again.");
    }
    
    const response = await axios.get(`${API_BASE_URL}/appointment/all-appointment`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        limit
      }
    });
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message || "Network error. Please try again." };
  }
};