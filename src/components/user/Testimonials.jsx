import React, { useState, useEffect, useCallback } from "react";
import Container from "../../ui/Container";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
// Import the testimonials data
import testimonialsData from "./testimonialsData.json";

const Testimonials = () => {
    const testimonials = testimonialsData.testimonials;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Determine if we're on mobile view
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    // Show 3 testimonials at a time on desktop/tablet, 1 on mobile
    const testimonialsPerPage = isMobile ? 1 : 3;

    // Auto-play functionality
    useEffect(() => {
        if (isHovered) return; // Pause when user hovers over carousel

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const maxIndex = testimonials.length - testimonialsPerPage;
                return prev >= maxIndex ? 0 : prev + testimonialsPerPage;
            });
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length, testimonialsPerPage, isHovered]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => {
            const maxIndex = testimonials.length - testimonialsPerPage;
            return prev >= maxIndex ? 0 : prev + testimonialsPerPage;
        });
    }, [testimonials.length, testimonialsPerPage]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => {
            return prev === 0
                ? testimonials.length - testimonialsPerPage
                : prev - testimonialsPerPage;
        });
    }, [testimonials.length, testimonialsPerPage]);

    const goToSlide = (index) => {
        setCurrentIndex(index * testimonialsPerPage);
    };

    const renderStars = (rating) => {
        return Array.from({ length: rating }, (_, index) => (
            <Star
                key={index}
                className="w-4 h-4 md:w-5 md:h-5 fill-[#5B2655] text-[#5B2655] transition-transform duration-300 hover:scale-110"
            />
        ));
    };

    // Calculate number of dots needed
    const dotCount = Math.ceil(testimonials.length / testimonialsPerPage);

    return (
        <Container className="py-12 md:py-16">
            <div
                id="testimonials"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="mb-4">
                        <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                        Real experiences from people who found their path to
                        healing.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / testimonialsPerPage)
                                }%)`,
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 px-3"
                                    style={{
                                        width: `${100 / testimonialsPerPage}%`,
                                    }}
                                >
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                                        {/* Decorative quote icon */}
                                        <Quote className="absolute -top-4 -left-4 w-20 h-20 text-[#F8F5F8] opacity-60 z-0" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-1 mb-4">
                                                {renderStars(
                                                    testimonial.rating
                                                )}
                                            </div>
                                            <blockquote className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6 transition-all duration-500 hover:text-gray-900">
                                                "{testimonial.text}"
                                            </blockquote>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-semibold text-gray-800 text-sm md:text-base transition-colors duration-300 hover:text-[#5B2655]">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-xs md:text-sm text-gray-500">
                                                        {testimonial.age} years
                                                        old
                                                    </p>
                                                </div>
                                                <div className="w-8 h-8 bg-gradient-to-r from-[#5B2655] to-[#814E7A] rounded-full opacity-10 transition-all duration-300 hover:opacity-20"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 md:mt-8 gap-2">
                    {Array.from({ length: dotCount }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                                currentIndex === index * testimonialsPerPage
                                    ? "bg-[#5B2655] scale-125"
                                    : "bg-gray-200 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-10 md:mt-14">
                    <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 md:p-1 inline-block transition-all duration-300 hover:scale-105">
                        <button className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:from-[#814E7A] hover:to-[#5B2655] cursor-pointer text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-lg uppercase">
                            Share Your Experience
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Testimonials;
