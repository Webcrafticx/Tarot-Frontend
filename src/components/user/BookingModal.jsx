import React from "react";

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
    handleSubmit,
    getPrice
}) => {
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
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                                <div className="flex rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-[#5B2655] focus-within:border-transparent transition-all">
                                    <select 
                                        value={selectedCountryCode}
                                        onChange={handleCountryCodeChange}
                                        className="px-3 py-2.5 bg-gray-50 rounded-l-lg focus:outline-none cursor-pointer text-sm border-r border-gray-300"
                                    >
                                        {countryCodes.map((country, index) => (
                                            <option key={index} value={country.code}>
                                                {country.country} {country.code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        required
                                        className="flex-1 px-3 py-2.5 rounded-r-lg focus:outline-none cursor-text text-sm"
                                        placeholder="Enter phone number"
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

                                {/* Price Display - Only show after duration is selected */}
                                {selectedDuration && (
                                    <div className="bg-gradient-to-r from-[#5B2655]/5 to-[#814E7A]/5 border border-[#5B2655]/20 p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="text-sm text-gray-600">Session Duration:</span>
                                                <p className="font-medium text-gray-800">{selectedDuration} minutes</p>
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
                            disabled={!formData.name || !formData.email || !formData.location || !formData.phoneNumber || !selectedDuration}
                            className="flex-1 bg-gradient-to-r from-[#5B2655] to-[#814E7A] text-white px-4 py-3 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium transition-all shadow-lg hover:shadow-xl"
                            onClick={handleSubmit}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;