import React from "react";
import Container from "../../ui/Container";

const CallToAction = () => {
    return (
        <Container className="pt-0">
            <div
                id="cta"
                className="min-h-screen bg-gradient-to-b p-4 from-[#E1D9CB] to-[#F5F3EF] rounded-4xl"
            >
                {/* CTA Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
                    {/* Card 1: Book Your Free Consultation */}
                    <div className="bg-gradient-to-br from-[#1B0F1E] to-[#2A1B2E] rounded-2xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="space-y-4">
                            <h3 className="text-lg md:text-xl font-semibold leading-tight">
                                Book Your Free Consultation
                            </h3>
                            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                                Start your healing journey with a complimentary
                                session to discuss your needs and goals.
                            </p>
                            <div className="pt-2">
                                <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 inline-block">
                                    <button className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:opacity-90 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-opacity duration-200 uppercase w-full">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Explore Services */}
                    <div className="bg-gradient-to-br from-[#1B0F1E] to-[#2A1B2E] rounded-2xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="space-y-4">
                            <h3 className="text-lg md:text-xl font-semibold leading-tight">
                                Explore Our Services
                            </h3>
                            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                                Discover spiritual counselling, energy healing,
                                and transformative workshops designed for your
                                growth.
                            </p>
                            <div className="pt-2">
                                <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 inline-block">
                                    <button className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:opacity-90 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-opacity duration-200 uppercase w-full">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Join Our Community */}
                    <div className="bg-gradient-to-br from-[#1B0F1E] to-[#2A1B2E] rounded-2xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                        <div className="space-y-4">
                            <h3 className="text-lg md:text-xl font-semibold leading-tight">
                                Join Our Community
                            </h3>
                            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                                Connect with like-minded souls on their healing
                                journey and stay updated with workshops and
                                events.
                            </p>
                            <div className="pt-2">
                                <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 inline-block">
                                    <button className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:opacity-90 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-opacity duration-200 uppercase w-full">
                                        Join Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-8 md:mt-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                        Ready to Begin Your Healing Journey?
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                        Take the first step towards spiritual growth and inner
                        peace. I'm here to support you every step of the way.
                    </p>
                    <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 md:p-1 inline-block">
                        <button className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:opacity-90 cursor-pointer text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-wider transition-colors duration-200 uppercase">
                            Start Your Journey Today
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CallToAction;
