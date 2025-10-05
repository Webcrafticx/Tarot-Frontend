import React, { useState, useEffect, useCallback } from "react";
import Container from "../../../ui/Container";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonialsData from "../../../json/testimonialsData.json";
import { useInView } from "../../../ui/UseInView";

const Testimonials = () => {
    const testimonials = testimonialsData.testimonials;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Scroll refs
    const [headerRef, headerVisible] = useInView();
    const [carouselRef, carouselVisible] = useInView();
    const [dotsRef, dotsVisible] = useInView();
    const [ctaRef, ctaVisible] = useInView();

    // Check viewport size
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const testimonialsPerPage = isMobile ? 1 : 3;

    // Auto-play
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const maxIndex = testimonials.length - testimonialsPerPage;
                return prev >= maxIndex ? 0 : prev + testimonialsPerPage;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length, testimonialsPerPage, isHovered]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => {
            const maxIndex = testimonials.length - testimonialsPerPage;
            return prev >= maxIndex ? 0 : prev + testimonialsPerPage;
        });
    }, [testimonials.length, testimonialsPerPage]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === 0
                ? testimonials.length - testimonialsPerPage
                : prev - testimonialsPerPage
        );
    }, [testimonials.length, testimonialsPerPage]);

    const goToSlide = (index) => {
        setCurrentIndex(index * testimonialsPerPage);
    };

    const renderStars = (rating) =>
        Array.from({ length: rating }, (_, index) => (
            <Star
                key={index}
                className="w-4 h-4 md:w-5 md:h-5 fill-[#4A6FA5] text-[#4A6FA5] transition-transform duration-300 hover:scale-110"
            />
        ));

    const dotCount = Math.ceil(testimonials.length / testimonialsPerPage);

    return (
        <Container className="py-12 md:py-16">
            <div
                id="testimonials"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header Section */}
                <div
                    ref={headerRef}
                    className={`text-center mb-8 md:mb-12 transform transition-all duration-700 ease-in-out ${
                        headerVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    }`}
                >
                    <div className="mb-4">
                        <span className="bg-white text-[#66626A] px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide hover:bg-[#E8C5D7] hover:text-[#4A6FA5] transition-colors duration-300 cursor-default">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-[#4A6FA5] mb-4 transform transition-all duration-700 ease-in-out delay-100">
                        What Clients Say
                    </h2>
                    <p className="text-sm md:text-lg text-[#66626A] max-w-2xl mx-auto transform transition-all duration-700 ease-in-out delay-200">
                        Real experiences from people who found their path to
                        healing.
                    </p>
                </div>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className={`relative transform transition-all duration-700 ease-in-out delay-300 ${
                        carouselVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / testimonialsPerPage)
                                }%)`,
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 px-3"
                                    style={{
                                        width: `${100 / testimonialsPerPage}%`,
                                    }}
                                >
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden group">
                                        <Quote className="absolute -top-4 -left-4 w-20 h-20 text-[#F0EDF0] opacity-60 z-0 transition-all duration-500 group-hover:scale-110" />
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-1 mb-4">
                                                {renderStars(
                                                    testimonial.rating
                                                )}
                                            </div>
                                            <blockquote className="text-sm md:text-base text-[#66626A] leading-relaxed mb-4 md:mb-6 transition-all duration-500 group-hover:text-[#4A6FA5]">
                                                "{testimonial.text}"
                                            </blockquote>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-serif text-[#4A6FA5] text-sm md:text-lg transition-colors duration-300 group-hover:text-[#7D4E7A]">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-xs md:text-sm text-[#66626A] transition-colors duration-300 group-hover:text-[#4A6FA5]">
                                                        {testimonial.age} years
                                                        old
                                                    </p>
                                                </div>
                                                <div className="w-8 h-8 bg-gradient-to-r from-[#4A6FA5] to-[#7D4E7A] rounded-full opacity-10 transition-all duration-300 group-hover:opacity-20 group-hover:scale-110"></div>
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-[#E8C5D7] transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 text-[#66626A] hover:text-[#4A6FA5] transition-colors duration-300 cursor-pointer" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-[#E8C5D7] transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 text-[#66626A] hover:text-[#4A6FA5] transition-colors duration-300 cursor-pointer" />
                    </button>
                </div>

                {/* Dots */}
                <div
                    ref={dotsRef}
                    className={`flex justify-center mt-6 md:mt-8 gap-2 transform transition-all duration-700 ease-in-out delay-500 ${
                        dotsVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                    }`}
                >
                    {Array.from({ length: dotCount }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                                currentIndex === index * testimonialsPerPage
                                    ? "bg-[#4A6FA5] scale-125"
                                    : "bg-gray-200 hover:bg-[#D4A5C3]"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    ref={ctaRef}
                    className={`text-center mt-10 md:mt-14 transform transition-all duration-700 ease-in-out delay-700 ${
                        ctaVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                    }`}
                >
                    <div className="border-solid border-[#4A6FA5] border-2 rounded-full p-0.5 md:p-1 inline-block transition-all duration-300 hover:border-[#7D4E7A] hover:scale-105">
                        <button className="bg-gradient-to-r from-[#4A6FA5] to-[#7D4E7A] hover:from-[#3A5A8C] hover:to-[#6D3E69] cursor-pointer text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-lg uppercase">
                            Share Your Experience
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Testimonials;