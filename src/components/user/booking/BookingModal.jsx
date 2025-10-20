// components/BookingModal.jsx
import React, { useState, useEffect } from "react";
import { getAvailabilityWindows } from "../../../services/window";
import { usePayment } from "../../../hooks/usePayment";
import SuccessModal from "../booking/SuccessModal";
import { 
  getWindowDateRange, 
  formatDateRangeForDisplay, 
  formatDatesForPayload, 
  isWindowCurrentlyAvailable 
} from "../../../utils/dateUtils";

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
  const [appointmentWindows, setAppointmentWindows] = useState([]);
  const [selectedWindow, setSelectedWindow] = useState("");
  const [selectedWindowDates, setSelectedWindowDates] = useState(null);
  const [isLoadingWindows, setIsLoadingWindows] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [isUrgent, setIsUrgent] = useState(false);
  
  const { isProcessing, processPayment } = usePayment();

  // Check if it's single question service
  const isSingleQuestionService = selectedService?.title?.toLowerCase().includes('single question');

  // Load appointment windows on component mount
  useEffect(() => {
    const fetchAvailabilityWindows = async () => {
      setIsLoadingWindows(true);
      try {
        const response = await getAvailabilityWindows();
        
        if (response && response.success && Array.isArray(response.data)) {
          const availableWindows = response.data.filter(window => window.isAvailable);
          setAppointmentWindows(availableWindows);
        } else {
          setAppointmentWindows([]);
          console.error("Unexpected API response format:", response);
        }
      } catch (error) {
        console.error("Error fetching availability windows:", error);
        setAppointmentWindows([]);
      } finally {
        setIsLoadingWindows(false);
      }
    };

    fetchAvailabilityWindows();
  }, []);

  // Reset urgent state when service or duration changes
  useEffect(() => {
    setIsUrgent(false);
  }, [selectedService, selectedDuration]);

  // Handle window selection
  const handleWindowSelect = (windowName) => {
    setSelectedWindow(windowName);
    const windowInfo = getWindowDateRange(windowName);
    if (windowInfo) {
      setSelectedWindowDates(formatDatesForPayload(windowInfo.startDate, windowInfo.endDate));
    }
  };

  // Fixed price calculation function
  const calculatePrice = (service, duration, urgent) => {
    if (!service || !duration) return 0;
    
    const durationObj = service.durations.find(d => d.time === parseInt(duration));
    if (!durationObj) return 0;

    // Determine which price to use based on location and urgency
    const location = formData.location || 'india';
    const isIndian = location.toLowerCase() === 'india';
    
    if (urgent) {
      return isIndian ? durationObj.urgentPriceIndia : durationObj.urgentPriceNri;
    } else {
      return isIndian ? durationObj.priceIndia : durationObj.priceNri;
    }
  };

  // Function to handle successful payment
  const handlePaymentSuccess = (result, appointmentData) => {
    setAppointmentDetails({
      name: appointmentData.name,
      email: appointmentData.email,
      phone: appointmentData.phone,
      serviceType: appointmentData.serviceType,
      duration: appointmentData.duration,
      selectedWindow: appointmentData.selectedWindow,
      selectedWindowDates: appointmentData.selectedWindowDates,
      price: appointmentData.price,
      paymentId: result.paymentId || 'N/A'
    });
    setShowSuccessModal(true);
  };

  // Handle payment error
  const handlePaymentError = (error) => {
    console.error("Payment process failed:", error);
    alert(`Payment failed: ${error.message}. Please try again.`);
  };

  // Handle form submission and payment process
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.location || !selectedWindow || !selectedWindowDates) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    // For single question service, automatically set duration to 15 minutes
    const finalDuration = isSingleQuestionService ? 15 : selectedDuration;

    // Add "Urgent" to service title if urgent is selected
    const serviceType = isUrgent 
      ? `${selectedService.title} Urgent` 
      : selectedService.title;

    // Calculate price using the fixed function
    const calculatedPrice = calculatePrice(selectedService, finalDuration, isUrgent);

    // Prepare appointment data with dates
    const appointmentData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phoneNumber,
      serviceType: serviceType,
      selectedWindow: selectedWindow,
      selectedWindowDates: selectedWindowDates,
      duration: parseInt(finalDuration),
      price: calculatedPrice,
      location: formData.location,
      isUrgent: isUrgent
    };

    await processPayment(appointmentData, handlePaymentSuccess, handlePaymentError);
  };

  // Form validation - for single question, duration is not required in UI
  const isFormValid = formData.name && formData.email && formData.location && 
                     formData.phoneNumber && selectedWindow && selectedWindowDates;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl w-full max-w-2xl mx-auto my-4 shadow-2xl">
          {/* Fixed Header */}
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <div>
              <h3 className="text-xl font-serif text-[#4A6FA5]">Book {selectedService.title}</h3>
              <p className="text-sm text-[#66626A] mt-1">Fill in your details to proceed</p>
            </div>
          </div>

          {/* Scrollable Content - Reduced height */}
          <div className="max-h-[60vh] overflow-y-auto px-5 py-3">
            <PersonalInfoSection 
              formData={formData}
              selectedCountryCode={selectedCountryCode}
              countryCodes={countryCodes}
              handleInputChange={handleInputChange}
              handleCountryCodeChange={handleCountryCodeChange}
            />

            {formData.phoneNumber && formData.location && (
              <ServiceConfigurationSection 
                selectedService={selectedService}
                selectedDuration={selectedDuration}
                selectedWindow={selectedWindow}
                selectedWindowDates={selectedWindowDates}
                appointmentWindows={appointmentWindows}
                isLoadingWindows={isLoadingWindows}
                isUrgent={isUrgent}
                setIsUrgent={setIsUrgent}
                handleDurationSelect={handleDurationSelect}
                handleWindowSelect={handleWindowSelect}
                calculatePrice={calculatePrice}
                formData={formData}
                isSingleQuestionService={isSingleQuestionService}
              />
            )}
          </div>

          {/* Fixed Footer */}
          <Footer 
            closeModal={closeModal}
            isFormValid={isFormValid}
            isProcessing={isProcessing}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal 
          appointmentDetails={appointmentDetails}
          onClose={() => {
            setShowSuccessModal(false);
            closeModal();
          }}
        />
      )}
    </>
  );
};

// Sub-components
const PersonalInfoSection = ({
  formData,
  selectedCountryCode,
  countryCodes,
  handleInputChange,
  handleCountryCodeChange
}) => (
  <div className="space-y-3">
    <h4 className="text-sm font-serif text-[#4A6FA5] uppercase tracking-wide border-b border-[#D4A5C3] pb-1.5">
      Personal Information
    </h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label className="block text-sm font-medium text-[#66626A] mb-1">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A6FA5] focus:border-transparent transition-all cursor-text text-sm"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#66626A] mb-1">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A6FA5] focus:border-transparent transition-all cursor-text text-sm"
          placeholder="Enter your email"
        />
      </div>
    </div>

    <PhoneInput 
      formData={formData}
      selectedCountryCode={selectedCountryCode}
      countryCodes={countryCodes}
      handleInputChange={handleInputChange}
      handleCountryCodeChange={handleCountryCodeChange}
    />

    {formData.phoneNumber && (
      <LocationInput formData={formData} handleInputChange={handleInputChange} />
    )}
  </div>
);

const PhoneInput = ({ formData, selectedCountryCode, countryCodes, handleInputChange, handleCountryCodeChange }) => (
  <div>
    <label className="block text-sm font-medium text-[#66626A] mb-1">
      Phone Number *
    </label>
    <div className="flex items-stretch rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-[#4A6FA5] focus-within:border-transparent overflow-hidden transition-all">
      <div className="relative flex-shrink-0">
        <select
          value={selectedCountryCode}
          onChange={handleCountryCodeChange}
          className="w-20 md:w-28 px-2 py-2 bg-gray-50 text-sm border-r border-gray-300 focus:outline-none cursor-pointer appearance-none h-full"
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
      
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required
        className="flex-1 px-3 py-2 focus:outline-none text-sm min-w-0"
        placeholder="Phone number"
      />
    </div>
  </div>
);

const LocationInput = ({ formData, handleInputChange }) => (
  <div>
    <label className="block text-sm font-medium text-[#66626A] mb-1">
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
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A6FA5] focus:border-transparent bg-gray-50 cursor-text text-sm"
      placeholder="Location will be auto-filled"
    />
  </div>
);

const ServiceConfigurationSection = ({
  selectedService,
  selectedDuration,
  selectedWindow,
  selectedWindowDates,
  appointmentWindows,
  isLoadingWindows,
  isUrgent,
  setIsUrgent,
  handleDurationSelect,
  handleWindowSelect,
  calculatePrice,
  formData,
  isSingleQuestionService
}) => (
  <div className="space-y-3 mt-4">
    <h4 className="text-sm font-serif text-[#4A6FA5] uppercase tracking-wide border-b border-[#D4A5C3] pb-1.5">
      Service Configuration
    </h4>
    
    {/* Show duration selection only for non-single question services */}
    {!isSingleQuestionService && (
      <DurationSelection 
        selectedService={selectedService}
        selectedDuration={selectedDuration}
        handleDurationSelect={handleDurationSelect}
      />
    )}

    {/* For single question service, directly show urgency and window selection */}
    {(selectedDuration || isSingleQuestionService) && (
      <>
        <UrgencySelection isUrgent={isUrgent} setIsUrgent={setIsUrgent} />
        
        <WindowSelection 
          selectedWindow={selectedWindow}
          appointmentWindows={appointmentWindows}
          isLoadingWindows={isLoadingWindows}
          handleWindowSelect={handleWindowSelect}
        />
      </>
    )}

    {selectedWindow && selectedWindowDates && (
      <PriceDisplay 
        selectedDuration={isSingleQuestionService ? 15 : selectedDuration}
        selectedWindow={selectedWindow}
        selectedWindowDates={selectedWindowDates}
        selectedService={selectedService}
        isUrgent={isUrgent}
        calculatePrice={calculatePrice}
        formData={formData}
        isSingleQuestionService={isSingleQuestionService}
      />
    )}
  </div>
);

const DurationSelection = ({ selectedService, selectedDuration, handleDurationSelect }) => (
  <div>
    <label className="block text-sm font-medium text-[#66626A] mb-2">Duration *</label>
    <div className="grid grid-cols-2 gap-2">
      {selectedService.durations.map((duration) => (
        <button
          key={duration.time}
          type="button"
          onClick={() => handleDurationSelect(duration.time)}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-2 ${
            selectedDuration === duration.time
              ? 'bg-[#4A6FA5] text-white border-[#4A6FA5] shadow-md transform scale-105'
              : 'bg-white text-[#66626A] hover:bg-gray-50 border-gray-200 hover:border-[#4A6FA5]'
          }`}
        >
          {duration.time} minutes
        </button>
      ))}
    </div>
  </div>
);

const UrgencySelection = ({ isUrgent, setIsUrgent }) => (
  <div>
    <label className="block text-sm font-medium text-[#66626A] mb-2">Service Type *</label>
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#66626A]">Normal</span>
      </div>
      
      <button
        type="button"
        onClick={() => setIsUrgent(!isUrgent)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5] focus:ring-offset-2 cursor-pointer ${
          isUrgent ? 'bg-orange-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
            isUrgent ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      
      <div className="flex items-center gap-2">
        <span className={`text-sm font-medium ${isUrgent ? 'text-orange-500' : 'text-[#66626A]'}`}>
          🚨 Urgent
        </span>
      </div>
    </div>
    {isUrgent && (
      <p className="text-xs text-orange-600 mt-1.5 ml-1">
        ⚡ Priority booking with higher pricing
      </p>
    )}
  </div>
);

const WindowSelection = ({ selectedWindow, appointmentWindows, isLoadingWindows, handleWindowSelect }) => (
  <div>
    <label className="block text-sm font-medium text-[#66626A] mb-2">Appointment Window *</label>
    
    {isLoadingWindows ? (
      <div className="text-center py-3">
        <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-[#4A6FA5]"></div>
        <p className="text-sm text-[#66626A] mt-1">Loading available time slots...</p>
      </div>
    ) : appointmentWindows.length > 0 ? (
      <div className="grid grid-cols-1 gap-2">
        {appointmentWindows.map((window) => {
          const windowInfo = getWindowDateRange(window.windowName);
          const isCurrentlyAvailable = isWindowCurrentlyAvailable(window.windowName);
          
          if (!windowInfo) return null;
          
          return (
            <WindowOption 
              key={window._id}
              window={window}
              windowInfo={windowInfo}
              isCurrentlyAvailable={isCurrentlyAvailable}
              isSelected={selectedWindow === window.windowName}
              onSelect={handleWindowSelect}
            />
          );
        })}
      </div>
    ) : (
      <div className="text-center py-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-[#66626A]">No appointment windows available at the moment.</p>
        <p className="text-xs text-gray-400 mt-0.5">Please try again later or contact support.</p>
      </div>
    )}
  </div>
);

const WindowOption = ({ window, windowInfo, isCurrentlyAvailable, isSelected, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(window.windowName)}
    className={`px-3 py-2 rounded-lg text-left transition-all duration-200 cursor-pointer border-2 ${
      isSelected
        ? 'bg-[#4A6FA5] text-white border-[#4A6FA5] shadow-md transform scale-105'
        : 'bg-white text-[#66626A] hover:bg-gray-50 border-gray-200 hover:border-[#4A6FA5]'
    }`}
  >
    <div className="flex justify-between items-center">
      <div>
        <div className="font-medium text-sm">
          {window.windowName}
        </div>
        <div className={`text-xs mt-0.5 ${
          isSelected 
            ? 'text-white/80' 
            : 'text-gray-500'
        }`}>
          {formatDateRangeForDisplay(windowInfo.startDate, windowInfo.endDate)}
          {windowInfo.isNextWeek ? (
            <span className="ml-1 text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full">
              Next Week
            </span>
          ) : isCurrentlyAvailable ? (
            <span className="ml-1 text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full">
              Active Now
            </span>
          ) : (
            <span className="ml-1 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">
              This Week
            </span>
          )}
        </div>
      </div>
      <div className={`text-xs px-1.5 py-0.5 rounded-full ${
        isSelected
          ? 'bg-white/20 text-white'
          : 'bg-green-100 text-green-600'
      }`}>
        Available
      </div>
    </div>
  </button>
);

const PriceDisplay = ({ selectedDuration, selectedWindow, selectedWindowDates, selectedService, isUrgent, calculatePrice, formData, isSingleQuestionService }) => {
  const price = calculatePrice(selectedService, selectedDuration, isUrgent);
  const location = formData.location || 'india';
  const isIndian = location.toLowerCase() === 'india';

  return (
    <div className="bg-gradient-to-r from-[#4A6FA5]/5 to-[#7D4E7A]/5 border border-[#4A6FA5]/20 p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm text-[#66626A]">Session Duration:</span>
          <p className="font-medium text-[#4A6FA5] text-sm">
            {selectedDuration} minutes
          </p>
          <span className="text-sm text-[#66626A] mt-0.5 block">Service Type:</span>
          <p className="font-medium text-[#4A6FA5] text-sm">
            {isUrgent ? '🚨 Urgent' : 'Normal'}
          </p>
          <span className="text-sm text-[#66626A] mt-0.5 block">Appointment Window:</span>
          <p className="font-medium text-[#4A6FA5] text-sm">{selectedWindow}</p>
          <span className="text-sm text-[#66626A] mt-0.5 block">Available Period:</span>
          <p className="font-medium text-[#7D4E7A] text-sm">
            {selectedWindowDates.displayDate}
          </p>
          <span className="text-xs text-gray-500 mt-0.5 block">
            {new Date(selectedWindowDates.startDate).toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })} to {new Date(selectedWindowDates.endDate).toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </span>
          <span className="text-xs text-gray-500 mt-0.5 block">
            Location: {isIndian ? 'India' : 'International'}
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm text-[#66626A]">Total Price:</span>
          <p className="text-xl font-bold text-[#4A6FA5]">
            ₹{price}
          </p>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ closeModal, isFormValid, isProcessing, handleSubmit }) => (
  <div className="border-t border-gray-100 p-5">
    <div className="flex gap-3">
      <button
        type="button"
        onClick={closeModal}
        className="flex-1 px-4 py-2.5 border border-gray-300 text-[#66626A] rounded-lg hover:bg-gray-50 transition-colors cursor-pointer font-medium text-sm"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={!isFormValid || isProcessing}
        className="flex-1 bg-gradient-to-r from-[#4A6FA5] to-[#7D4E7A] text-white px-4 py-2.5 rounded-lg hover:from-[#3A5A8C] hover:to-[#6D3E69] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center text-sm"
        onClick={handleSubmit}
      >
        {isProcessing ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
);

export default BookingModal;