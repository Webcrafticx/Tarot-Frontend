import React, { useState } from "react";
import Container from "../../ui/Container";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Container className="pb-0">
            <nav className="bg-[#F5F3EF]   rounded-t-4xl ">
                <div className="max-w-screen mx-auto px-4 sm:px-6 py-1 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-8">
                            <div className="flex-shrink-0 px-4">
                                <a
                                    href="#home"
                                    className="block cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="40"
                                        fill="none"
                                    >
                                        <path
                                            d="M 3.726 10.42 L 23.416 11.746 C 23.929 11.78 24.329 12.196 24.321 12.709 C 24.299 14.034 24.157 16.522 23.448 18.134 C 22.328 20.68 21.184 22.166 18.722 23.469 C 16.655 24.562 15.175 24.667 12.836 24.585 C 10.862 24.515 9.666 24.358 7.904 23.469 C 4.86 21.934 3.681 19.827 2.474 16.645 C 2.007 15.417 1.791 13.731 1.69 12.402 C 1.603 11.252 2.576 10.342 3.726 10.419 Z"
                                            fill="rgb(129, 81, 123)"
                                        />
                                        <path
                                            d="M 7.45 0.271 L 20.18 3.622 C 20.677 3.752 20.992 4.238 20.878 4.738 C 20.674 5.637 20.287 7.014 19.692 7.877 C 18.64 9.399 17.707 10.227 15.937 10.768 C 14.45 11.223 13.47 11.106 11.955 10.758 C 10.675 10.465 9.915 10.212 8.875 9.41 C 7.082 8.025 6.577 6.5 6.19 4.27 C 6.02 3.29 6.134 1.964 6.255 1.05 C 6.33 0.48 6.893 0.125 7.45 0.272 Z M 2.124 23.808 L 24.029 25.287 C 25.053 25.357 25.856 26.19 25.813 27.216 C 25.746 28.793 25.526 31.066 24.843 32.621 C 23.569 35.523 22.269 37.217 19.469 38.702 C 17.119 39.949 15.434 40.069 12.775 39.975 C 10.53 39.896 9.17 39.715 7.165 38.702 C 3.704 36.952 2.363 34.552 0.99 30.924 C 0.425 29.431 0.182 27.344 0.078 25.791 C 0.001 24.640 0.973 23.731 2.124 23.808 Z"
                                            fill="rgb(91, 38, 85)"
                                        />
                                    </svg>
                                </a>
                            </div>

                            {/* Desktop Navigation - Hidden on tablet and mobile */}
                            <div className="hidden lg:block">
                                <div className="flex items-center space-x-8">
                                    <a
                                        href="#about"
                                        className="ttext-[#66626A] hover:text-[#5A2654] text-sm font-medium transition-colors duration-200"
                                    >
                                        ABOUT
                                    </a>
                                    <a
                                        href="#services"
                                        className="text-[#66626A] hover:text-[#5A2654] text-sm font-medium transition-colors duration-200"
                                    >
                                        SERVICES
                                    </a>
                                    <a
                                        href="#testimonials"
                                        className="text-[#66626A] hover:text-[#5A2654] text-sm font-medium transition-colors duration-200"
                                    >
                                        TESTIMONIALS
                                    </a>
                                    <a
                                        href="#faq"
                                        className="text-[#66626A] hover:text-[#5A2654] text-sm font-medium transition-colors duration-200"
                                    >
                                        FAQ
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Desktop CTA Button - Hidden on tablet and mobile */}
                        <div className="hidden lg:block border-solid border-[#5A2654] border-2 rounded-full p-1">
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
                                className="bg-[#5B2655] hover:bg-[#5A2654] cursor-pointer text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors duration-200 uppercase"
                            >
                                Book My Consultation
                            </button>
                        </div>

                        {/* Mobile & Tablet menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-[#66626A] hover:text-[#5A2654] focus:outline-none"
                            >
                                <svg
                                    className={`${
                                        isMenuOpen ? "hidden" : "block"
                                    } h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`${
                                        isMenuOpen ? "block" : "hidden"
                                    } h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile & Tablet Navigation Menu */}
                    <div
                        className={`lg:hidden ${
                            isMenuOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="px-4 pt-4 pb-6 space-y-6 bg-[#F5F3EF]">
                            {/* Navigation Links */}
                            <div className="space-y-4">
                                <a
                                    href="#"
                                    className="block text-start text-[#66626A] hover:text-[#5A2654] text-md font-medium transition-colors duration-200"
                                >
                                    ABOUT
                                </a>
                                <a
                                    href="#"
                                    className="block text-start text-[#66626A] hover:text-[#5A2654] text-md font-medium transition-colors duration-200"
                                >
                                    SERVICES
                                </a>
                                <a
                                    href="#"
                                    className="block text-start text-[#66626A] hover:text-[#5A2654] text-md font-medium transition-colors duration-200"
                                >
                                    TESTIMONIALS
                                </a>
                                <a
                                    href="#"
                                    className="block text-start text-[#66626A] hover:text-[#5A2654] text-md font-medium transition-colors duration-200"
                                >
                                    FAQ
                                </a>
                            </div>

                            {/* Mobile CTA Button
                            <div className=" border-solid border-[#5A2654] border-2 rounded-full p-1">
                                <button className="w-full bg-[#5B2655] hover:bg-[#5A2654] text-white py-3 rounded-full text-xs font-semibold tracking-wider transition-colors duration-200 uppercase cursor-pointer">
                                    Book My Free Consultation
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;
