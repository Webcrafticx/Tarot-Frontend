import axios from "axios";
import API_BASE_URL from "../config/api";



// Get all availability windows
export const getAvailabilityWindows = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/availability/available-slot`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching availability windows:", error);
    throw error;
  }
};

// Update window availability
export const setAvailability = async (windowName, isAvailable) => {
  const token = localStorage.getItem("authToken");
  const res = await axios.post(`${API_BASE_URL}/availability/set-availability`, {
    windowName,
    isAvailable,
  },
{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  return res.data;
};
