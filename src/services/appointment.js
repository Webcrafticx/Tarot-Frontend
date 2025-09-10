// src/services/appointment.js
import axios from "axios";
import API_BASE_URL from "../config/api";

// Get all appointments (admin)
export const getAllAppointments = async () => {
  try {
    const token = localStorage.getItem("authToken");
    
    if (!token) {
      throw new Error("No authentication token found. Please login again.");
    }
    
    const response = await axios.get(`${API_BASE_URL}/appointment/all-appointment`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message || "Network error. Please try again." };
  }
};
