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
                className="min-h-fit bg-gradient-to-b px-4 py-8 md:px-8 from-[#E1D9CB] to-[#F5F3EF] rounded-4xl flex items-center justify-center"
            >
                {/* Single CTA Card */}
                <div className="w-full max-w-6xl mx-auto transform transition-all duration-700 ease-in-out">
                    <div
                        className={`bg-gradient-to-br from-[#1B0F1E] to-[#2A1B2E] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-16 text-white shadow-2xl transform transition-all duration-700 ease-in-out ${
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
                                <h2 className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-tight mb-3 md:mb-4 transform transition-all duration-700 ease-in-out delay-200 hover:text-[#C2B6C1]">
                                    Take your first step towards peace and
                                    fulfilment...
                                </h2>
                                <p className="text-sm md:text-base lg:text-xl text-gray-200 leading-relaxed transform transition-all duration-700 ease-in-out delay-300 hover:text-white">
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
                                <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 md:p-1 inline-block hover:border-white transition-colors duration-300 hover:scale-105">
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
                                        className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:from-[#814E7A] hover:to-[#5B2655] text-white px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full text-xs md:text-sm lg:text-base font-semibold tracking-wider transition-all duration-300 ease-in-out uppercase whitespace-nowrap cursor-pointer"
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
