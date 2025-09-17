import React, { useState } from "react";
import Container from "../../ui/Container";
import { useInView } from "../user/UseInView"; // adjust path if needed

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Scroll refs
    const [headerRef, headerVisible] = useInView();
    const [faqRef, faqVisible] = useInView();

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "What can I expect from a session?",
            answer: "During a session, we'll work together to address your spiritual and emotional needs through guided conversation, reflection, and personalized techniques. Each session is tailored to your unique journey and goals.",
        },
        {
            question: "How do I know if spiritual counselling is right for me?",
            answer: "Spiritual counseling may be right for you if you're seeking deeper meaning, facing life transitions, or wanting to explore your spiritual path in a supportive environment. Many clients find it helpful for personal growth and emotional healing.",
        },
        {
            question: "How long is a typical session?",
            answer: "A typical session lasts between 60-75 minutes. This allows enough time for meaningful discussion and reflection without feeling rushed.",
        },
        {
            question: "Do you offer online sessions?",
            answer: "Yes, I offer both in-person and online sessions via secure video conferencing. Online sessions provide the same quality of care and convenience for those who cannot attend in person.",
        },
    ];

    return (
        <Container className="pt-12">
            <div
                id="faq"
                className="min-h-screen bg-gradient-to-b pt-8 px-4 from-[#F5F3EF] to-[#E1D9CB] rounded-4xl"
            >
                {/* FAQ Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-10 md:mb-14 lg:mb-16 transform transition-all duration-700 ease-in-out ${
                        headerVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    }`}
                >
                    <div className="mb-4">
                        <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide hover:bg-gray-300 transition-colors duration-300 cursor-default">
                            FAQ
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 transform transition-all duration-700 ease-in-out delay-100">
                        Questions Answered
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto transform transition-all duration-700 ease-in-out delay-200">
                        If you don't see your question answered here, please get
                        in touch.
                    </p>
                </div>

                {/* FAQ Items */}
                <div ref={faqRef} className="max-w-4xl mx-auto">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`border-b border-gray-200 last:border-b-0 transform transition-all duration-700 ease-in-out delay-${
                                index * 100
                            } ${
                                faqVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <button
                                className="flex justify-between items-center w-full py-5 text-left hover:bg-white/30 rounded-lg px-4 transition-all duration-300 cursor-pointer group"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="text-base md:text-lg font-medium text-gray-800 pr-4 group-hover:text-[#5B2655] transition-colors duration-300">
                                    {item.question}
                                </span>
                                <span className="flex-shrink-0 ml-2">
                                    <svg
                                        className={`w-5 h-5 text-[#5B2655] transform transition-all duration-300 group-hover:scale-110 ${
                                            activeIndex === index
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    activeIndex === index
                                        ? "max-h-96 opacity-100 pb-5"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed pl-4">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FAQ;
