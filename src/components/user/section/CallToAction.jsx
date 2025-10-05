import React from "react";
import Container from "../../../ui/Container";
import { useInView } from "../../../ui/UseInView";

const CallToAction = () => {
    const [ctaRef, ctaVisible] = useInView();

    return (
        <Container>
            <div
                id="cta"
                ref={ctaRef}
                className="min-h-fit bg-gradient-to-b px-4 py-8 md:px-8 from-[#F0EDF0] to-[#F8F6F7] rounded-4xl flex items-center justify-center"
            >
                {/* Single CTA Card */}
                <div className="w-full max-w-6xl mx-auto transform transition-all duration-700 ease-in-out">
                    <div
                        className={`bg-gradient-to-br from-[#4A6FA5] via-[#7D4E7A] to-[#D4A5C3] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-16 text-white shadow-2xl transform transition-all duration-700 ease-in-out ${
                            ctaVisible
                                ? "translate-y-0 opacity-100 scale-100"
                                : "translate-y-4 opacity-0 scale-95"
                        } hover:shadow-3xl hover:-translate-y-2`}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
                            {/* Left Content */}
                            <div
                                className={`flex-1 transform transition-all duration-700 ease-in-out delay-100 ${
                                    ctaVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-4 opacity-0"
                                }`}
                            >
                                <h2 className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-tight mb-3 md:mb-4 transform transition-all duration-700 ease-in-out delay-200 hover:text-[#E8C5D7]">
                                    Take your first step towards peace and
                                    fulfilment...
                                </h2>
                                <p className="text-sm md:text-base lg:text-xl text-gray-100 leading-relaxed transform transition-all duration-700 ease-in-out delay-300 hover:text-white">
                                    Ready to get started or still have some
                                    questions? Perfect. Book a call today and we
                                    can begin your journey of self-exploration.
                                </p>
                            </div>

                            {/* Right Button */}
                            <div
                                className={`flex-shrink-0 mt-4 md:mt-0 transform transition-all duration-700 ease-in-out delay-500 ${
                                    ctaVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-4 opacity-0"
                                }`}
                            >
                                <div className="border-solid border-white border-2 rounded-full p-0.5 md:p-1 inline-block hover:border-[#E8C5D7] transition-colors duration-300 hover:scale-105">
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
                                        className="bg-gradient-to-r from-[#4A6FA5] to-[#7D4E7A] hover:from-[#3A5A8C] hover:to-[#6D3E69] cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ease-in-out uppercase"
                                    >
                                        Book My Consultation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CallToAction;