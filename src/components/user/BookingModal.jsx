import React, { useState, useEffect } from "react";
import { createPaymentOrder, verifyPayment } from "../../services/appointment";
import { getAvailabilityWindows } from "../../services/window";

const BookingModal = ({
  selectedService,
  selectedCountryCode,
  selectedDuration,
  formData,
  countryCodes,
  closeModal,
  handleInputChange,
  handleCountryCodeChange,
  handleDurationSelect,
  getPrice
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [appointmentWindows, setAppointmentWindows] = useState([]);
  const [selectedWindow, setSelectedWindow] = useState("");
  const [isLoadingWindows, setIsLoadingWindows] = useState(false);

  // Function to get the next occurrence of a window based on current day
  const getNextWindowDate = (windowName) => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
    
    // Parse window name to get available days
    const parseWindowDays = (windowName) => {
      const windowLower = windowName.toLowerCase();
      let availableDays = [];
      
      if (windowLower.includes('mon-wed')) {
        availableDays = [1, 2, 3]; // Monday, Tuesday, Wednesday
      } else if (windowLower.includes('thu-fri')) {
        availableDays = [4, 5]; // Thursday, Friday
      } else if (windowLower.includes('sat-sun')) {
        availableDays = [6, 0]; // Saturday, Sunday
      } else {
        // Individual day parsing
        if (windowLower.includes('mon')) availableDays.push(1);
        if (windowLower.includes('tue')) availableDays.push(2);
        if (windowLower.includes('wed')) availableDays.push(3);
        if (windowLower.includes('thu')) availableDays.push(4);
        if (windowLower.includes('fri')) availableDays.push(5);
        if (windowLower.includes('sat')) availableDays.push(6);
        if (windowLower.includes('sun')) availableDays.push(0);
      }
      
      return availableDays;
    };

    const availableDays = parseWindowDays(windowName);
    
    // Check if current day is within the window range
    const isCurrentlyInWindow = availableDays.includes(currentDay);
    
    // If currently in window, show today's date
    if (isCurrentlyInWindow) {
      return new Date(now);
    }
    
    // If not in window, find the next occurrence
    // Check if the window has passed for this week
    const maxDayInWindow = Math.max(...availableDays);
    const minDayInWindow = Math.min(...availableDays);
    
    let targetDate = new Date(now);
    
    if (currentDay > maxDayInWindow) {
      // Window has passed, show next week's first day of window
      const daysToNextWeek = 7 - currentDay + minDayInWindow;
      targetDate.setDate(now.getDate() + daysToNextWeek);
    } else {
      // Window hasn't started yet this week, show this week's first day
      const daysToWindow = minDayInWindow - currentDay;
      targetDate.setDate(now.getDate() + daysToWindow);
    }
    
    return targetDate;
  };

  // Function to get window date range display
  const getWindowDateRange = (windowName) => {
    const now = new Date();
    const currentDay = now.getDay();
    
    const parseWindowDays = (windowName) => {
      const windowLower = windowName.toLowerCase();
      let availableDays = [];
      
      if (windowLower.includes('mon-wed')) {
        availableDays = [1, 2, 3]; // Monday, Tuesday, Wednesday
      } else if (windowLower.includes('thu-fri')) {
        availableDays = [4, 5]; // Thursday, Friday
      } else if (windowLower.includes('sat-sun')) {
        availableDays = [6, 0]; // Saturday, Sunday
      }
      
      return availableDays;
    };

    const availableDays = parseWindowDays(windowName);
    if (availableDays.length === 0) return null;
    
    const maxDayInWindow = Math.max(...availableDays);
    const minDayInWindow = Math.min(...availableDays);
    
    // Determine if we need current week or next week
    const needNextWeek = currentDay > maxDayInWindow;
    
    // Calculate start and end dates of the window
    let startDate = new Date(now);
    let endDate = new Date(now);
    
    if (needNextWeek) {
      // Next week's window
      const daysToNextWeekStart = 7 - currentDay + minDayInWindow;
      const daysToNextWeekEnd = 7 - currentDay + maxDayInWindow;
      startDate.setDate(now.getDate() + daysToNextWeekStart);
      endDate.setDate(now.getDate() + daysToNextWeekEnd);
    } else {
      // Current week's window
      const daysToWindowStart = minDayInWindow - currentDay;
      const daysToWindowEnd = maxDayInWindow - currentDay;
      startDate.setDate(now.getDate() + daysToWindowStart);
      endDate.setDate(now.getDate() + daysToWindowEnd);
    }
    
    return {
      startDate,
      endDate,
      isNextWeek: needNextWeek,
      isCurrentlyActive: availableDays.includes(currentDay) && !needNextWeek
    };
  };

  // Function to format date range for display with day names
  const formatDateRangeForDisplay = (startDate, endDate) => {
    const startOptions = { 
      weekday: 'short',
      day: 'numeric'
    };
    const endOptions = { 
      weekday: 'short',
      day: 'numeric', 
      month: 'short' 
    };
    
    // If same month, show "Mon 16 - Wed 18 Dec"
    if (startDate.getMonth() === endDate.getMonth()) {
      const startDay = startDate.toLocaleDateString('en-IN', startOptions);
      const endDay = endDate.toLocaleDateString('en-IN', endOptions);
      return `${startDay} - ${endDay}`;
    } else {
      // If different months, show "Mon 30 Nov - Wed 2 Dec"
      const startOptions = { 
        weekday: 'short',
        day: 'numeric', 
        month: 'short' 
      };
      const startDay = startDate.toLocaleDateString('en-IN', startOptions);
      const endDay = endDate.toLocaleDateString('en-IN', endOptions);
      return `${startDay} - ${endDay}`;
    }
  };

  // Function to check if window is available in current period
  const isWindowCurrentlyAvailable = (windowName) => {
    const windowInfo = getWindowDateRange(windowName);
    return windowInfo ? windowInfo.isCurrentlyActive : false;
  };

  // Load appointment windows on component mount
  useEffect(() => {
    const fetchAvailabilityWindows = async () => {
      setIsLoadingWindows(true);
      try {
        const response = await getAvailabilityWindows();
        
        // Extract windows from response.data based on the API structure
        if (response && response.success && Array.isArray(response.data)) {
          // Filter to show only available windows
          const availableWindows = response.data.filter(window => window.isAvailable);
          setAppointmentWindows(availableWindows);
        } else {
          // Fallback to empty array
          setAppointmentWindows([]);
          console.error("Unexpected API response format:", response);
        }
      } catch (error) {
        console.error("Error fetching availability windows:", error);
        setAppointmentWindows([]); // Set to empty array on error
      } finally {
        setIsLoadingWindows(false);
      }
    };

    fetchAvailabilityWindows();
  }, []);

  // Load Razorpay script dynamically
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

  // Handle window selection
  const handleWindowSelect = (windowName) => {
    setSelectedWindow(windowName);
  };

  // Handle form submission and payment process
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Prepare appointment data
      const appointmentData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber,
        serviceType: selectedService.title,
        selectedWindow: selectedWindow,
        duration: parseInt(selectedDuration),
        Price: getPrice(selectedService, selectedDuration),
        location: formData.location
      };

      // Create payment order
      const paymentOrder = await createPaymentOrder(appointmentData);
      
      // Load Razorpay script
      const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
      
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        setIsProcessing(false);
        return;
      }

      // Create Razorpay options
      const options = {
        key: "rzp_test_YOUR_TEST_KEY", // Replace with your test key
        amount: paymentOrder.amount || appointmentData.Price * 100, // Amount in paise
        currency: "INR",
        name: "Your Company Name",
        description: `Appointment for ${selectedService.title}`,
        image: "https://example.com/your_logo", // Add your logo URL
        order_id: paymentOrder.id || `order_${Date.now()}`,
        handler: async function (response) {
          // Verify payment on server
          try {
            const verificationData = {
              paymentid: response.razorpay_payment_id,
              orderid: response.razorpay_order_id,
              appointmentDate: new Date().toISOString() // You might want to get this from user
            };
            
            const result = await verifyPayment(verificationData);
            alert("Payment successful! Appointment confirmed.");
            closeModal();
          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phoneNumber
        },
        notes: {
          address: formData.location,
          service: selectedService.title
        },
        theme: {
          color: "#5B2655"
        }
      };

      // Open Razorpay payment modal
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      
    } catch (error) {
      console.error("Payment process failed:", error);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-lg mx-auto my-4 shadow-2xl">
        {/* Fixed Header */}
        <div className="flex justify-between items-center p-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Book {selectedService.title}</h3>
            <p className="text-sm text-gray-500 mt-1">Fill in your details to proceed</p>
          </div>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer transition-colors p-1 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[70vh] overflow-y-auto px-6 py-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200 pb-2">
                Personal Information
              </h4>
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2655] focus:border-transparent transition-all cursor-text text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2655] focus:border-transparent transition-all cursor-text text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
  <label className="block text-sm font-medium text-gray-700 mb-1.5">
    Phone Number *
  </label>
  <div className="flex items-stretch rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-[#5B2655] focus-within:border-transparent overflow-hidden transition-all">
    {/* Country Code Select - Compact for mobile */}
    <div className="relative flex-shrink-0">
      <select
        value={selectedCountryCode}
        onChange={handleCountryCodeChange}
        className="w-20 md:w-28 px-2 py-2.5 bg-gray-50 text-sm border-r border-gray-300 focus:outline-none cursor-pointer appearance-none h-full"
      >
        {countryCodes.map((country, index) => (
          <option key={index} value={country.code}>
            {country.flag} {country.code}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center">
        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
    
    {/* Phone Number Input */}
    <input
      type="tel"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleInputChange}
      required
      className="flex-1 px-3 py-2.5 focus:outline-none text-sm min-w-0"
      placeholder="Phone number"
    />
  </div>
</div>

              {/* Location - Only show if phone number is filled */}
              {formData.phoneNumber && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Location *
                    <span className="text-xs text-gray-400 ml-2 font-normal">(Auto-filled)</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    readOnly
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2655] focus:border-transparent bg-gray-50 cursor-text text-sm"
                    placeholder="Location will be auto-filled"
                  />
                </div>
              )}
            </div>

            {/* Service Configuration Section - Only show if basic info is filled */}
            {formData.phoneNumber && formData.location && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200 pb-2">
                  Service Configuration
                </h4>
                
                {/* Duration Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Duration *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.durations.map((duration) => (
                      <button
                        key={duration.time}
                        type="button"
                        onClick={() => handleDurationSelect(duration.time)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-2 ${
                          selectedDuration === duration.time
                            ? 'bg-[#5B2655] text-white border-[#5B2655] shadow-md transform scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-[#5B2655]'
                        }`}
                      >
                        {duration.time} minutes
                      </button>
                    ))}
                  </div>
                </div>

                {/* Appointment Window Selection - Only show after duration is selected */}
                {selectedDuration && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Appointment Window *</label>
                    
                    {isLoadingWindows ? (
                      <div className="text-center py-4">
                        <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-[#5B2655]"></div>
                        <p className="text-sm text-gray-500 mt-2">Loading available time slots...</p>
                      </div>
                    ) : appointmentWindows.length > 0 ? (
                      <div className="grid grid-cols-1 gap-3">
                        {appointmentWindows.map((window) => {
                          const windowInfo = getWindowDateRange(window.windowName);
                          const isCurrentlyAvailable = isWindowCurrentlyAvailable(window.windowName);
                          
                          if (!windowInfo) return null;
                          
                          return (
                            <button
                              key={window._id}
                              type="button"
                              onClick={() => handleWindowSelect(window.windowName)}
                              className={`px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer border-2 ${
                                selectedWindow === window.windowName
                                  ? 'bg-[#5B2655] text-white border-[#5B2655] shadow-md transform scale-105'
                                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-[#5B2655]'
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-sm">
                                    {window.windowName}
                                  </div>
                                  <div className={`text-xs mt-1 ${
                                    selectedWindow === window.windowName 
                                      ? 'text-white/80' 
                                      : 'text-gray-500'
                                  }`}>
                                    {formatDateRangeForDisplay(windowInfo.startDate, windowInfo.endDate)}
                                    {windowInfo.isNextWeek ? (
                                      <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                                        Next Week
                                      </span>
                                    ) : isCurrentlyAvailable ? (
                                      <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                                        Active Now
                                      </span>
                                    ) : (
                                      <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                                        This Week
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className={`text-xs px-2 py-1 rounded-full ${
                                  selectedWindow === window.windowName
                                    ? 'bg-white/20 text-white'
                                    : 'bg-green-100 text-green-600'
                                }`}>
                                  Available
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">No appointment windows available at the moment.</p>
                        <p className="text-xs text-gray-400 mt-1">Please try again later or contact support.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Price Display - Only show after window is selected */}
                {selectedWindow && (
                  <div className="bg-gradient-to-r from-[#5B2655]/5 to-[#814E7A]/5 border border-[#5B2655]/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-600">Session Duration:</span>
                        <p className="font-medium text-gray-800">{selectedDuration} minutes</p>
                        <span className="text-sm text-gray-600 mt-1 block">Appointment Window:</span>
                        <p className="font-medium text-gray-800">{selectedWindow}</p>
                        <span className="text-sm text-gray-600 mt-1 block">Available Period:</span>
                        <p className="font-medium text-[#5B2655]">
                          {(() => {
                            const windowInfo = getWindowDateRange(selectedWindow);
                            return windowInfo ? formatDateRangeForDisplay(windowInfo.startDate, windowInfo.endDate) : '';
                          })()}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">Total Price:</span>
                        <p className="text-2xl font-bold text-[#5B2655]">
                          ₹{getPrice(selectedService, selectedDuration)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Fixed Footer */}
        <div className="border-t border-gray-100 p-6 pt-4">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.location || !formData.phoneNumber || !selectedDuration || !selectedWindow || isProcessing}
              className="flex-1 bg-gradient-to-r from-[#5B2655] to-[#814E7A] text-white px-4 py-3 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              onClick={handleSubmit}
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;