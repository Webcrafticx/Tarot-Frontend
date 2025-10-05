import React from "react";
import Container from "../../../ui/Container";
import { useInView } from "../../../ui/UseInView";

const Footer = () => {
    const [footerRef, footerVisible] = useInView();

    return (
        <Container>
            <footer
                ref={footerRef}
                className="bg-[#F8F6F7] text-[#66626A] rounded-b-4xl"
            >
                {/* Main Footer Content */}
                <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info Section */}
                        <div
                            className={`space-y-4 transform transition-all duration-700 ease-in-out delay-100 ${
                                footerVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="40"
                                    fill="none"
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    <path
                                        d="M 3.726 10.42 L 23.416 11.746 C 23.929 11.78 24.329 12.196 24.321 12.709 C 24.299 14.034 24.157 16.522 23.448 18.134 C 22.328 20.68 21.184 22.166 18.722 23.469 C 16.655 24.562 15.175 24.667 12.836 24.585 C 10.862 24.515 9.666 24.358 7.904 23.469 C 4.86 21.934 3.681 19.827 2.474 16.645 C 2.007 15.417 1.791 13.731 1.69 12.402 C 1.603 11.252 2.576 10.342 3.726 10.419 Z"
                                        fill="#4A6FA5"
                                    ></path>
                                    <path
                                        d="M 7.45 0.271 L 20.18 3.622 C 20.677 3.752 20.992 4.238 20.878 4.738 C 20.674 5.637 20.287 7.014 19.692 7.877 C 18.64 9.399 17.707 10.227 15.937 10.768 C 14.45 11.223 13.47 11.106 11.955 10.758 C 10.675 10.465 9.915 10.212 8.875 9.41 C 7.082 8.025 6.577 6.5 6.19 4.27 C 6.02 3.29 6.134 1.964 6.255 1.05 C 6.33 0.48 6.893 0.125 7.45 0.272 Z M 2.124 23.808 L 24.029 25.287 C 25.053 25.357 25.856 26.19 25.813 27.216 C 25.746 28.793 25.526 31.066 24.843 32.621 C 23.569 35.523 22.269 37.217 19.469 38.702 C 17.119 39.949 15.434 40.069 12.775 39.975 C 10.53 39.896 9.17 39.715 7.165 38.702 C 3.704 36.952 2.363 34.552 0.99 30.924 C 0.425 29.431 0.182 27.344 0.078 25.791 C 0.001 24.640 0.973 23.731 2.124 23.808 Z"
                                        fill="#7D4E7A"
                                    ></path>
                                </svg>
                            </div>
                            <p className="text-md text-[#66626A] leading-relaxed hover:text-[#4A6FA5] transition-colors duration-300">
                                Professional consultation services to help you
                                achieve your goals with expert guidance and
                                support.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div
                            className={`space-y-4 transform transition-all duration-700 ease-in-out delay-200 ${
                                footerVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <h3 className="font-serif text-xl text-[#4A6FA5] hover:text-[#7D4E7A] transition-colors duration-300 cursor-default">
                                QUICK LINKS
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "About",
                                    "Services",
                                    "Testimonials",
                                    "FAQ",
                                ].map((link, index) => (
                                    <li
                                        key={index}
                                        className="transform transition-all duration-300 hover:translate-x-1"
                                    >
                                        <a
                                            href={`#${link.toLowerCase()}`}
                                            className="text-md text-[#66626A] hover:text-[#4A6FA5] transition-colors duration-200 flex items-center group"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const section =
                                                    document.getElementById(
                                                        link.toLowerCase()
                                                    );
                                                if (section) {
                                                    section.scrollIntoView({
                                                        behavior: "smooth",
                                                    });
                                                }
                                            }}
                                        >
                                            <span className="w-1 h-1 bg-[#4A6FA5] rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300"></span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div
                            className={`space-y-4 transform transition-all duration-700 ease-in-out delay-300 ${
                                footerVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <h3 className="text-xl font-serif text-[#4A6FA5] hover:text-[#7D4E7A] transition-colors duration-300 cursor-default">
                                SERVICES
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Tarot Card Reading",
                                    "Akashic Record Reading",
                                    "Numerology Correction",
                                    "Single Question Reading",
                                ].map((service, index) => (
                                    <li
                                        key={index}
                                        className="transform transition-all duration-300 hover:translate-x-1"
                                    >
                                        <a
                                            href="#services"
                                            className="text-md text-[#66626A] hover:text-[#4A6FA5] transition-colors duration-200 flex items-center group"
                                            onClick={(e) => {
                                                e.preventDefault();
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
                                        >
                                            <span className="w-1 h-1 bg-[#4A6FA5] rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300"></span>
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div
                            className={`space-y-4 transform transition-all duration-700 ease-in-out delay-400 ${
                                footerVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                            }`}
                        >
                            <h3 className="text-xl font-serif text-[#4A6FA5] hover:text-[#7D4E7A] transition-colors duration-300 cursor-default">
                                CONTACT
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                                    <svg
                                        className="w-4 h-4 text-[#4A6FA5] flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <a 
                                        href="tel:9008408625" 
                                        className="text-md text-[#66626A] group-hover:text-[#4A6FA5] transition-colors duration-300 hover:underline"
                                    >
                                        9008408625
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                                    <svg
                                        className="w-4 h-4 text-[#4A6FA5] flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <a 
                                        href="mailto:Raveenatarotstarr@gmail.com" 
                                        className="text-md text-[#66626A] group-hover:text-[#4A6FA5] transition-colors duration-300 hover:underline"
                                    >
                                        Raveenatarotstarr@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className={`bg-[#F0EDF0] border-t rounded-b-4xl border-[#D4A5C3] transform transition-all duration-700 ease-in-out delay-500 ${
                        footerVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                            <p className="text-xs text-[#66626A] tracking-wide text-center hover:text-[#4A6FA5] transition-colors duration-300">
                                © 2025{" "}
                                <a
                                    href="https://webcrafticx.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-[#4A6FA5] hover:text-[#7D4E7A] transition-colors duration-200 underline-offset-2 hover:underline"
                                >
                                    WebCrafticX
                                </a>{" "}
                                All rights reserved.
                            </p>

                            <div className="flex space-x-6">
                                <a
                                    href="/privacy"
                                    className="text-xs text-[#66626A] hover:text-[#4A6FA5] transition-colors duration-200 hover:underline"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="/cancellation"
                                    className="text-xs text-[#66626A] hover:text-[#4A6FA5] transition-colors duration-200 hover:underline"
                                >
                                    Cancellation & Refund
                                </a>
                                <a
                                    href="/shipping"
                                    className="text-xs text-[#66626A] hover:text-[#4A6FA5] transition-colors duration-200 hover:underline"
                                >
                                    Shipping Policy
                                </a>
                                <a
                                    href="/terms"
                                    className="text-xs text-[#66626A] hover:text-[#4A6FA5] transition-colors duration-200 hover:underline"
                                >
                                    Terms & Condition
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;