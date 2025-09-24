import React from "react";
import Container from "../../../ui/Container";
import { useInView } from "../../../ui/UseInView";

const HowItWorks = () => {
    const [headerRef, headerVisible] = useInView();
    const [ctaRef, ctaVisible] = useInView();

    const steps = [
        {
            id: 1,
            number: "1.",
            title: "DISCOVERY CALL",
            description:
                "Begin with a complimentary connection call where we explore your intentions and see if we're aligned to work together.",
        },
        {
            id: 2,
            number: "2.",
            title: "PERSONALIZED PATH",
            description:
                "I design a customized spiritual roadmap specifically for your unique journey and transformation goals.",
        },
        {
            id: 3,
            number: "3.",
            title: "TRANSFORMATION BEGINS",
            description:
                "We embark on your healing journey together, creating meaningful shifts and lasting inner change.",
        },
    ];

    return (
        <Container>
            <div
                id="how-it-works"
                className="min-h-screen bg-gradient-to-b p-4 from-[#E1D9CB] to-[#F5F3EF] rounded-4xl"
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
                        <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide hover:bg-gray-300 transition-colors duration-300 cursor-default">
                            Your Journey
                        </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl text-gray-800 mb-4 transform transition-all duration-700 ease-in-out delay-100">
                        Your Path to Transformation
                    </h2>
                    <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto transform transition-all duration-700 ease-in-out delay-200">
                        A simple, guided process to support your spiritual growth and personal evolution.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 mb-8 md:mb-12">
                    {steps.map((step, index) => {
                        const [stepRef, stepVisible] = useInView();
                        return (
                            <div
                                key={step.id}
                                ref={stepRef}
                                className={`relative text-center group cursor-pointer p-6 rounded-xl  transform transition-all duration-700 ease-in-out delay-${
                                    index * 200
                                } ${
                                    stepVisible
                                        ? "translate-y-0 opacity-100 scale-100"
                                        : "translate-y-4 opacity-0 scale-95"
                                }`}
                            >
                                {/* Step Number */}
                                <div className="mb-4 md:mb-6">
                                    <span className="font-serif text-4xl md:text-5xl lg:text-8xl text-[#5B2655]  transition-colors duration-300">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step Content */}
                                <div className="space-y-3 md:space-y-4">
                                    <h3 className="text-base md:text-2xl font-serif text-gray-800 uppercase tracking-wide leading-tight group-hover:text-[#5B2655] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-xl text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto group-hover:text-gray-800 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 right-[-60px] w-28 h-12">
                                        <svg
                                            viewBox="0 0 120 50"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-full h-full stroke-[#814E7A]"
                                            fill="none"
                                            strokeWidth="2"
                                        >
                                            <path
                                                d="M0,25 C40,0 80,50 120,25"
                                                className="draw-line"
                                            />
                                            <polygon
                                                points="115,20 120,25 115,30"
                                                fill="#814E7A"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div
                    ref={ctaRef}
                    className={`text-center transform transition-all duration-700 ease-in-out delay-700 ${
                        ctaVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    }`}
                >
                    <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 md:p-1 inline-block hover:border-[#814E7A] transition-colors duration-300">
                        <button
                            onClick={() => {
                                const section =
                                    document.getElementById("services");
                                if (section) {
                                    section.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:opacity-90 cursor-pointer text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 ease-in-out uppercase"
                        >
                            Schedule Discovery Call
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HowItWorks;