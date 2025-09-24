import React from "react";
import Container from "../../../ui/Container";
import { useInView } from "../../../ui/UseInView";

const HeroSection = () => {
    const [badgeRef, badgeVisible] = useInView();
    const [headingRef, headingVisible] = useInView();
    const [descRef, descVisible] = useInView();
    const [ctaRef, ctaVisible] = useInView();
    const [imageRef, imageVisible] = useInView();
    const [pillarsRef, pillarsVisible] = useInView();

    return (
        <Container className="pt-0">
            <div
                id="home"
                className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-[#E1D9CB] rounded-b-4xl"
            >
                {/* Main Content Container */}
                <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-1">
                    <div className="grid grid-cols-1 md:grid-cols-5 items-center min-h-[80vh]">
                        {/* Left Content */}
                        <div className="space-y-8 md:col-span-3 p-4 lg:pr-8 text-center lg:text-left">
                            {/* Category Badge */}
                            <div
                                ref={badgeRef}
                                className={`font-sans transform transition-all duration-700 ease-in-out ${
                                    badgeVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-6 opacity-0"
                                }`}
                            >
                                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-[#66626A] shadow-sm border border-gray-200 hover:shadow-md hover:border-[#5A2654] transition-all duration-300 cursor-default">
                                    HOLISTIC WELLNESS
                                </span>
                            </div>

                            {/* Main Heading*/}
<h1
  ref={headingRef}
  className={`font-serif text-3xl sm:text-4xl lg:text-7xl font-light text-[#5A2654] leading-tight transform transition-all duration-700 ease-in-out delay-100 ${
    headingVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`}
>
  Transform Your Inner Journey
</h1>

{/* Description*/}
<p
  ref={descRef}
  className={`font-sans text-base sm:text-lg text-[#66626A] leading-relaxed max-w-lg mx-auto lg:mx-0 transform transition-all duration-700 ease-in-out delay-200 ${
    descVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`}
>
  Discover balance and harmony through personalized spiritual guidance and mindful practices.
</p>
                            {/* CTA Button */}
                            <div
                                ref={ctaRef}
                                className={`font-sans pt-4 transform transition-all duration-700 ease-in-out delay-300 ${
                                    ctaVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-6 opacity-0"
                                }`}
                            >
                                <div className="border-solid border-[#5A2654] border-2 rounded-full p-1 inline-block hover:border-[#814E7A] transition-colors duration-300">
                                    <button
                                        onClick={() => {
                                            const section =
                                                document.getElementById(
                                                    "services"
                                                );
                                            if (section) {
                                                section.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                        className="bg-[#5B2655] hover:bg-[#814E7A] cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ease-in-out  uppercase"
                                    >
                                        Begin Your Transformation
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div
                            ref={imageRef}
                            className="relative md:col-span-2 flex justify-center lg:justify-end"
                        >
                            <div
                                className={`w-64 sm:w-80 md:w-96 lg:w-[28rem] aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl transform transition-all duration-700 ease-in-out delay-400 ${
                                    imageVisible
                                        ? "scale-100 opacity-100"
                                        : "scale-90 opacity-0"
                                } hover:scale-105 hover:shadow-3xl cursor-pointer transition-all duration-500`}
                            >
                                <img
                                    src="/user/hero.jpg"
                                    alt="Woman practicing mindfulness meditation"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service Pillars Section */}
<div
    ref={pillarsRef}
    className={`py-4 transform transition-all duration-700 ease-in-out delay-500 ${
        pillarsVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
    }`}
>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto text-center">
        {/* Emotional Balance */}
        <div className="space-y-4 group cursor-pointer">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#C2B6C1] transition-colors duration-300 group-hover:bg-[#D8CED7]">
                {/* Enhanced Moon icon with stars */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className="group-hover:scale-110 transition-transform duration-300"
                >
                    {/* Main moon shape */}
                    <path
                        d="M26 42C35.9411 42 44 33.9411 44 24C44 14.0589 35.9411 6 26 6C16.0589 6 8 14.0589 8 24C8 33.9411 16.0589 42 26 42Z"
                        fill="#5A2654"
                    />
                    {/* Moon craters */}
                    <circle cx="20" cy="18" r="2" fill="#814E7A" opacity="0.7"/>
                    <circle cx="30" cy="28" r="1.5" fill="#814E7A" opacity="0.7"/>
                    <circle cx="24" cy="32" r="1" fill="#814E7A" opacity="0.7"/>
                    {/* Crescent effect */}
                    <path
                        d="M32 16C38.6274 16 44 21.3726 44 28C44 34.6274 38.6274 40 32 40C25.3726 40 20 34.6274 20 28C20 21.3726 25.3726 16 32 16Z"
                        fill="#C2B6C1"
                    />
                </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#5A2654] uppercase tracking-wide group-hover:text-[#814E7A] transition-colors duration-300">
                Emotional Balance
            </h3>
            <p className="font-sans text-lg text-[#66626A] leading-relaxed group-hover:text-[#5A2654] transition-colors duration-300">
                Cultivate inner peace and emotional resilience
            </p>
        </div>

        {/* Life Direction */}
        <div className="space-y-4 group cursor-pointer">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#C2B6C1] transition-colors duration-300 group-hover:bg-[#D8CED7]">
                {/* Enhanced Sun icon with rays */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className="group-hover:scale-110 transition-transform duration-300"
                >
                    {/* Sun rays */}
                    <path d="M26 4L26 10" stroke="#5A2654" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M26 42L26 48" stroke="#5A2654" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 26L10 26" stroke="#5A2654" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M42 26L48 26" stroke="#5A2654" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10.5 10.5L14.5 14.5" stroke="#5A2654" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M37.5 37.5L41.5 41.5" stroke="#5A2654" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10.5 41.5L14.5 37.5" stroke="#5A2654" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M37.5 14.5L41.5 10.5" stroke="#5A2654" strokeWidth="2" strokeLinecap="round"/>
                    {/* Center sun circle */}
                    <circle cx="26" cy="26" r="8" fill="#5A2654"/>
                    {/* Inner glow */}
                    <circle cx="26" cy="26" r="5" fill="#814E7A" opacity="0.8"/>
                </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#5A2654] uppercase tracking-wide group-hover:text-[#814E7A] transition-colors duration-300">
                Life Direction
            </h3>
            <p className="font-sans text-lg text-[#66626A] leading-relaxed group-hover:text-[#5A2654] transition-colors duration-300">
                Find your true path and purpose
            </p>
        </div>

        {/* Soul Alignment */}
        <div className="space-y-4 group cursor-pointer">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#C2B6C1] transition-colors duration-300 group-hover:bg-[#D8CED7]">
                {/* Yin-Yang style sun/moon combination */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className="group-hover:scale-110 transition-transform duration-300"
                >
                    {/* Circular background */}
                    <circle cx="26" cy="26" r="20" fill="#5A2654"/>
                    
                    {/* Sun half */}
                    <path d="M26 6C26 6 46 26 46 26C46 26 26 46 26 46C26 46 6 26 6 26C6 26 26 6 26 6Z" fill="#814E7A"/>
                    
                    {/* Moon half */}
                    <path d="M26 46C26 46 6 26 6 26C6 26 26 6 26 6C26 6 46 26 46 26C46 26 26 46 26 46Z" fill="#C2B6C1"/>
                    
                    {/* Sun center dot */}
                    <circle cx="26" cy="16" r="3" fill="#5A2654"/>
                    
                    {/* Moon center dot */}
                    <circle cx="26" cy="36" r="3" fill="#5A2654"/>
                    
                    {/* Spiritual energy waves */}
                    <circle cx="26" cy="26" r="18" stroke="#814E7A" strokeWidth="0.5" opacity="0.7"/>
                    <circle cx="26" cy="26" r="15" stroke="#814E7A" strokeWidth="0.5" opacity="0.5"/>
                </svg>
            </div>
            <h3 className="font-serif text-2xl text-[#5A2654] uppercase tracking-wide group-hover:text-[#814E7A] transition-colors duration-300">
                Soul Alignment
            </h3>
            <p className="font-sans text-lg text-[#66626A] leading-relaxed group-hover:text-[#5A2654] transition-colors duration-300">
                Connect with your authentic self and higher wisdom
            </p>
        </div>
    </div>
</div>
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;