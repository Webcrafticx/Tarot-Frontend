import React, { useState, useEffect } from "react";
import Container from "../../ui/Container";
import BookingModal from "./BookingModal"; // New modal component

import servicesData from './services.json';
import countryCodesData from './countryCodes.json';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        location: "",
        duration: 30
    });

    // Use imported JSON data with error handling
    const services = Array.isArray(servicesData) ? servicesData : [];
    const countryCodes = Array.isArray(countryCodesData) ? countryCodesData : [];

    const handleBookService = (service) => {
        setSelectedService(service);
        setSelectedDuration(service.durations[0]?.time || 30);
        setFormData(prev => ({
            ...prev,
            duration: service.durations[0]?.time || 30
        }));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
        setSelectedDuration(null);
        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            location: "",
            duration: 30
        });
        setSelectedCountryCode("+91");
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // New function to handle country code change and auto-fill location
    const handleCountryCodeChange = (e) => {
        const newCountryCode = e.target.value;
        setSelectedCountryCode(newCountryCode);
        
        // Find the selected country and auto-fill location
        const selectedCountry = countryCodes.find(c => c.code === newCountryCode);
        if (selectedCountry) {
            setFormData({
                ...formData,
                location: selectedCountry.country
            });
        }
    };

    const handleDurationSelect = (duration) => {
        setSelectedDuration(duration);
        setFormData({
            ...formData,
            duration: duration
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission - payment processing
        const selectedDurationData = selectedService.durations.find(d => d.time === parseInt(formData.duration));
        const selectedCountry = countryCodes.find(c => c.code === selectedCountryCode);
        const price = selectedCountry?.type === "india" ? selectedDurationData?.priceIndia : selectedDurationData?.priceNri;
        
        console.log("Booking Details:", {
            service: selectedService.title,
            ...formData,
            countryCode: selectedCountryCode,
            location: selectedCountry?.country,
            price: price
        });
        
        alert(`Booking confirmed for ${selectedService.title} - ${formData.duration} minutes. Price: ₹${price}`);
        closeModal();
    };

    const getPrice = (service, duration) => {
        const durationData = service.durations.find(d => d.time === duration);
        const selectedCountry = countryCodes.find(c => c.code === selectedCountryCode);
        return selectedCountry?.type === "india" ? durationData?.priceIndia : durationData?.priceNri;
    };

    // Effect to auto-fill location when component mounts with default country code
    useEffect(() => {
        const defaultCountry = countryCodes.find(c => c.code === selectedCountryCode);
        if (defaultCountry && !formData.location) {
            setFormData(prev => ({
                ...prev,
                location: defaultCountry.country
            }));
        }
    }, [countryCodes, selectedCountryCode]);

    return (
        <Container className="py-12 md:py-16">
            <div
                id="services"
                className="min-h-screen bg-gradient-to-b p-4 from-[#F5F3EF] to-[#E1D9CB] rounded-4xl"
            >
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="mb-4">
                        <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide">
                            Services
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                        How I Can Serve You
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                        All services available in-person and online for maximum flexibility.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="text-center group cursor-pointer p-4 rounded-lg hover:bg-white/20 transition-all duration-300"
                        >
                            {/* Service Image */}
                            <div className="mb-4 md:mb-5">
                                <div className="relative w-full max-w-xs md:max-w-none mx-auto">
                                    <div className="aspect-[4/5] rounded-t-full overflow-hidden border-4 border-gray-300 group-hover:border-[#5B2655] transition-colors duration-300">
                                        <img
                                            src={service.image}
                                            alt={service.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Service Content */}
                            <div className="px-2">
                                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 uppercase tracking-wide leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm md:text-sm text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto mb-4">
                                    {service.description}
                                </p>

                                {/* Book Button */}
                                <button 
                                    onClick={() => handleBookService(service)}
                                    className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wider transition-colors duration-200 uppercase cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote Section */}
                <div className="text-center mt-12 md:mt-16">
                    <blockquote className="text-lg md:text-xl lg:text-4xl font-medium text-gray-700 italic leading-relaxed max-w-3xl mx-auto">
                        "I hold a space for you to be fully seen and heard—this is when healing begins."
                    </blockquote>
                </div>
            </div>

            {/* Booking Modal */}
            {isModalOpen && selectedService && (
                <BookingModal
                    selectedService={selectedService}
                    selectedCountryCode={selectedCountryCode}
                    selectedDuration={selectedDuration}
                    formData={formData}
                    countryCodes={countryCodes}
                    closeModal={closeModal}
                    handleInputChange={handleInputChange}
                    handleCountryCodeChange={handleCountryCodeChange}
                    handleDurationSelect={handleDurationSelect}
                    handleSubmit={handleSubmit}
                    getPrice={getPrice}
                />
            )}
        </Container>
    );
};

export default Services;
