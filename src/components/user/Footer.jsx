import React from "react";
import Container from "../../ui/container";

const Footer = () => {
    return (
        <Container>
            <footer className="bg-[#F5F3EF] text-[#66626A] rounded-b-4xl ">
                {/* Main Footer Content */}
                <div className="max-w-screen mx-auto px-4  sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info Section */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="40"
                                    fill="none"
                                >
                                    <path
                                        d="M 3.726 10.42 L 23.416 11.746 C 23.929 11.78 24.329 12.196 24.321 12.709 C 24.299 14.034 24.157 16.522 23.448 18.134 C 22.328 20.68 21.184 22.166 18.722 23.469 C 16.655 24.562 15.175 24.667 12.836 24.585 C 10.862 24.515 9.666 24.358 7.904 23.469 C 4.86 21.934 3.681 19.827 2.474 16.645 C 2.007 15.417 1.791 13.731 1.69 12.402 C 1.603 11.252 2.576 10.342 3.726 10.419 Z"
                                        fill="rgb(129, 81, 123)"
                                    ></path>
                                    <path
                                        d="M 7.45 0.271 L 20.18 3.622 C 20.677 3.752 20.992 4.238 20.878 4.738 C 20.674 5.637 20.287 7.014 19.692 7.877 C 18.64 9.399 17.707 10.227 15.937 10.768 C 14.45 11.223 13.47 11.106 11.955 10.758 C 10.675 10.465 9.915 10.212 8.875 9.41 C 7.082 8.025 6.577 6.5 6.19 4.27 C 6.02 3.29 6.134 1.964 6.255 1.05 C 6.33 0.48 6.893 0.125 7.45 0.272 Z M 2.124 23.808 L 24.029 25.287 C 25.053 25.357 25.856 26.19 25.813 27.216 C 25.746 28.793 25.526 31.066 24.843 32.621 C 23.569 35.523 22.269 37.217 19.469 38.702 C 17.119 39.949 15.434 40.069 12.775 39.975 C 10.53 39.896 9.17 39.715 7.165 38.702 C 3.704 36.952 2.363 34.552 0.99 30.924 C 0.425 29.431 0.182 27.344 0.078 25.791 C 0.001 24.640 0.973 23.731 2.124 23.808 Z"
                                        fill="rgb(91, 38, 85)"
                                    ></path>
                                </svg>
                            </div>
                            <p className="text-sm text-[#66626A] leading-relaxed">
                                Professional consultation services to help you
                                achieve your goals with expert guidance and
                                support.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#5A2654]">
                                QUICK LINKS
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                    >
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                    >
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#5A2654]">
                                SERVICES
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                    >
                                        Business Consulting
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                    >
                                        Strategy Planning
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                    >
                                        Digital Marketing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                    >
                                        Financial Advisory
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#5A2654]">
                                CONTACT
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <svg
                                        className="w-4 h-4 text-[#5A2654] mt-0.5 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-sm text-[#66626A]">
                                        123 Business Street
                                        <br />
                                        Suite 100
                                        <br />
                                        City, State 12345
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg
                                        className="w-4 h-4 text-[#5A2654] flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <p className="text-sm text-[#66626A]">
                                        (555) 123-4567
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg
                                        className="w-4 h-4 text-[#5A2654] flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <p className="text-sm text-[#66626A]">
                                        info@company.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section
                    <div className="mt-12 pt-8 border-t border-[#D1CBC1]">
                        <div className="text-center space-y-4">
                            <h3 className="text-xl font-semibold text-[#5A2654]">
                                Ready to Get Started?
                            </h3>
                            <p className="text-sm text-[#66626A] max-w-md mx-auto">
                                Book your free consultation today and discover
                                how we can help transform your business.
                            </p>
                            <div className="border-solid border-[#5A2654] border-2 rounded-full p-1 inline-block">
                                <button className="bg-[#5B2655] hover:bg-[#5A2654] cursor-pointer text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider transition-colors duration-200 uppercase">
                                    Book My Free Consultation
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="bg-[#E8E4DD] border-t rounded-b-4xl border-[#D1CBC1]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                            <p className="text-xs text-grayish tracking-wide text-center ">
                                © 2025{" "}
                                <a
                                    href="https://webcrafticx.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-brown hover:text-darkbrown transition-colors duration-200 underline-offset-2 hover:underline"
                                >
                                    WebCrafticX
                                </a>{" "}
                                All rights reserved.
                            </p>

                            <div className="flex space-x-6">
                                <a
                                    href="#"
                                    className="text-xs text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    className="text-xs text-[#66626A] hover:text-[#5A2654] transition-colors duration-200"
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
