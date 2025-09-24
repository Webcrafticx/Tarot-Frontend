import React from "react";
import Container from "../../../ui/Container";
import { SlBadge } from "react-icons/sl";
import { useInView } from "../../../ui/UseInView";

const About = () => {
    const [badgeRef, badgeVisible] = useInView();
    const [headingRef, headingVisible] = useInView();
    const [descRef, descVisible] = useInView();
    const [achieveRef, achieveVisible] = useInView();
    const [ctaRef, ctaVisible] = useInView();
    const [imageRef, imageVisible] = useInView();

    return (
        <Container className="py-12 md:py-16">
            <div
                id="about"
                className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="relative grid grid-cols-1 md:grid-cols-3 items-center bg-[#1B0F1E] rounded-3xl shadow-lg overflow-hidden md:overflow-visible">
                    {/* Left - Content */}
                    <div className="text-center md:col-span-2 md:text-left text-white p-6 md:pl-20 md:pr-8 lg:pr-16 space-y-4 md:space-y-6 order-2 relative z-10">
                        {/* Badge */}
                        <div
                            ref={badgeRef}
                            className={`transform transition-all duration-700 ease-in-out ${
                                badgeVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <span className="border border-[#A1A1A1] text-[#A1A1A1] px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide hover:border-[#C2B6C1] hover:text-[#C2B6C1] transition-colors duration-800 cursor-default">
                                About Your Therapist
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            ref={headingRef}
                            className={`font-serif text-2xl md:text-2xl xl:text-5xl leading-tight transform transition-all duration-700 ease-in-out delay-100 ${
                                headingVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            I'm Here To Serve You
                        </h2>

                        {/* Description */}
                        <p
                            ref={descRef}
                            className={`text-sm md:text-sm xl:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0 transform transition-all duration-700 ease-in-out delay-200 ${
                                descVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            "Hi, I’m Raveena  — a Tarot card reader, Numerologist, and Akashic Record reader. I guide you to clarity, healing, and alignment by helping release blockages and connect more deeply with your true path"
                        </p>

                        {/* Achievements */}
                        <div
                            ref={achieveRef}
                            className={`flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start gap-3 md:gap-4 text-base md:text-xs max-w-xl mx-auto xl:mx-0 transform transition-all duration-700 ease-in-out delay-300 ${
                                achieveVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <div className="flex items-center gap-2 text-[#C2B6C1] group hover:text-white transition-colors duration-300 cursor-default">
                                <SlBadge className="text-[#C2B6C1] w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-lg">Spells and Remedies Expert</span>
                            </div>

                            <div className="flex items-center gap-2 text-[#C2B6C1] group hover:text-white transition-colors duration-300 cursor-default">
                                <SlBadge className="text-[#C2B6C1] w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-lg">Guided over 24k souls globally</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div
                            ref={ctaRef}
                            className={`pt-2 md:pt-4 transform transition-all duration-700 ease-in-out delay-400 ${
                                ctaVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 md:p-1 inline-block hover:border-white transition-colors duration-300">
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
                                    Book My Consultation
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right - Image Section */}
                    <div
                        ref={imageRef}
                        className={`flex justify-center p-4 md:p-6 lg:p-0 order-1 relative transform transition-all duration-700 ease-in-out delay-500 ${
                            imageVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }`}
                    >
                        {/* Mobile & Tablet Image */}
                        <div className="md:hidden relative w-44 h-56 sm:w-48 sm:h-72 md:w-56 md:h-80 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
                            <div className="rounded-t-full overflow-hidden border-4 border-[#C2B6C1] w-full h-full hover:border-white transition-colors duration-300">
                                <img
                                    src="/user/about.jpg"
                                    alt="Therapist Portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Desktop Image */}
                        <div className="hidden md:block absolute md:-top-40 md:-right-14 lg:-top-54 lg:-right-6 md:h-[358px] lg:h-[440px] xl:right-10 xl:-top-64 w-58 lg:w-72 xl:w-96 xl:h-[520px] order-1 hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                            <div className="rounded-t-full overflow-hidden border-4 border-[#824E1A] w-full h-full shadow-2xl p-2 hover:border-[#A56B2C] transition-colors duration-300">
                                <div className="rounded-t-full overflow-hidden w-full h-full shadow-2xl">
                                    <img
                                        src="/user/about.jpg"
                                        alt="Therapist Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
