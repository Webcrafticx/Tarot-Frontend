import React from "react";
import Container from "../../ui/Container";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            number: "1.",
            title: "FREE CONSULTATION",
            description:
                "We start with a free conversation to discuss your needs and explore how I can support your journey.",
        },
        {
            id: 2,
            number: "2.",
            title: "COUNSELLING PLAN",
            description:
                "Together, we create a personalized approach tailored to your specific goals and healing needs.",
        },
        {
            id: 3,
            number: "3.",
            title: "YOUR HEALING BEGINS",
            description:
                "We begin our work together, supporting you through your transformation and growth.",
        },
    ];

    return (
        <Container>
            <div
                id="how-it-works"
                className="min-h-screen bg-gradient-to-b p-4 from-[#E1D9CB] to-[#F5F3EF] rounded-4xl"
            >
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="mb-4">
                        <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide">
                            How It Works
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                        Just Three Easy Steps
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                        Here's how we can work together to start your healing
                        journey.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 mb-8 md:mb-12">
                    {steps.map((step) => (
                        <div key={step.id} className="text-center">
                            {/* Step Number */}
                            <div className="mb-4 md:mb-6">
                                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B2655]">
                                    {step.number}
                                </span>
                            </div>

                            {/* Step Content */}
                            <div className="space-y-3 md:space-y-4">
                                <h3 className="text-base md:text-lg font-semibold text-gray-800 uppercase tracking-wide leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 md:p-1 inline-block">
                        <button className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:opacity-90 cursor-pointer text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-colors duration-200 uppercase">
                            Start My Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HowItWorks;
