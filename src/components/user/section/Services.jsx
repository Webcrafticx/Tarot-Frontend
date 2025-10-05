"use client";
import React, { useState, useEffect } from "react";
import Container from "../../../ui/Container";
import BookingModal from "../booking/BookingModal";
import servicesData from "../../../json/services.json";
import countryCodesData from "../../../json/countryCodes.json";
import { useInView } from "../../../ui/UseInView";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    duration: 30,
  });

  // Imported JSON data
  const services = Array.isArray(servicesData) ? servicesData : [];
  const countryCodes = Array.isArray(countryCodesData) ? countryCodesData : [];

  // Scroll-based animation refs
  const [headerRef, headerVisible] = useInView();
  const [quoteRef, quoteVisible] = useInView();

  const handleBookService = (service) => {
    setSelectedService(service);
    setSelectedDuration(service.durations[0]?.time || 30);
    setFormData((prev) => ({
      ...prev,
      duration: service.durations[0]?.time || 30,
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
      duration: 30,
    });
    setSelectedCountryCode("+91");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryCodeChange = (e) => {
    const newCountryCode = e.target.value;
    setSelectedCountryCode(newCountryCode);

    const selectedCountry = countryCodes.find((c) => c.code === newCountryCode);
    if (selectedCountry) {
      setFormData({
        ...formData,
        location: selectedCountry.country,
      });
    }
  };

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
    setFormData({
      ...formData,
      duration: duration,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDurationData = selectedService.durations.find(
      (d) => d.time === parseInt(formData.duration)
    );
    const selectedCountry = countryCodes.find(
      (c) => c.code === selectedCountryCode
    );
    const price =
      selectedCountry?.type === "india"
        ? selectedDurationData?.priceIndia
        : selectedDurationData?.priceNri;

    alert(
      `Session confirmed for ${selectedService.title} - ${formData.duration} minutes. Investment: ₹${price}`
    );
    closeModal();
  };

  const getPrice = (service, duration) => {
    const durationData = service.durations.find((d) => d.time === duration);
    const selectedCountry = countryCodes.find(
      (c) => c.code === selectedCountryCode
    );
    return selectedCountry?.type === "india"
      ? durationData?.priceIndia
      : durationData?.priceNri;
  };

  useEffect(() => {
    const defaultCountry = countryCodes.find(
      (c) => c.code === selectedCountryCode
    );
    if (defaultCountry && !formData.location) {
      setFormData((prev) => ({
        ...prev,
        location: defaultCountry.country,
      }));
    }
  }, [countryCodes, selectedCountryCode]);

  return (
    <Container className="py-12 md:py-16">
      <div
        id="services"
        className="min-h-screen bg-gradient-to-b p-4 from-[#F0EDF0] to-[#F8F6F7] rounded-4xl"
      >
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transform transition-all duration-700 ease-in-out ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-4">
            <span className="bg-white text-[#66626A] px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide">
              Transformational Sessions
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl text-[#4A6FA5] mb-4">
            Your Path to Wholeness
          </h2>
          <p className="text-sm md:text-lg text-[#66626A] max-w-2xl mx-auto">
            Personalized guidance available worldwide through in-person and virtual sessions.
          </p>
        </div>

        {/* 🌀 Services Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <div className="text-center group cursor-pointer p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
                {/* Service Image */}
                <div className="mb-4 md:mb-5">
                  <div className="relative w-full max-w-xs md:max-w-none mx-auto">
                    <div className="aspect-[4/5] rounded-t-full overflow-hidden border-4 border-[#D4A5C3] group-hover:border-[#4A6FA5] transition-colors duration-300 shadow-lg">
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
                  <h3 className="font-serif text-base md:text-2xl text-[#4A6FA5] mb-2 uppercase tracking-wide group-hover:text-[#7D4E7A] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-lg text-[#66626A] leading-relaxed max-w-xs mx-auto mb-4 group-hover:text-[#4A6FA5] transition-colors duration-300">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleBookService(service)}
                    className="bg-gradient-to-r from-[#4A6FA5] to-[#7D4E7A] hover:from-[#3A5A8C] hover:to-[#6D3E69] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:scale-105 uppercase cursor-pointer shadow-lg"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Quote Section */}
        <div
          ref={quoteRef}
          className={`text-center mt-12 md:mt-16 transform transition-all duration-1500 ease-in-out ${
            quoteVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <blockquote className="font-serif text-lg md:text-xl lg:text-5xl font-medium text-[#4A6FA5] italic leading-relaxed max-w-4xl mx-auto">
            "True transformation begins when we create space for your authentic self to emerge and flourish."
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
