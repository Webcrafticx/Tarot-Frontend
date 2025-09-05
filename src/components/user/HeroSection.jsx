import React from "react";
import Container from "../../ui/Container";

const HeroSection = () => {
    return (
        <Container className="pt-0">
            <div
                id="home"
                className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-[#E1D9CB] rounded-b-4xl"
            >
                {/* Main Content Container */}
                <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-1">
                    <div className="grid grid-cols-1 md:grid-cols-5  items-center min-h-[80vh]">
                        {/* Left Content */}
                        <div className="space-y-8  md:col-span-3 p-4 lg:pr-8 text-center lg:text-left">
                            {/* Category Badge */}
                            <div>
                                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-[#66626A] shadow-sm border border-gray-200">
                                    SPIRITUAL COUNSELLING
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-3xl sm:text-4xl lg:text-8xl font-light text-[#5A2654] leading-tight">
                                Finally Find Peace Of Mind
                            </h1>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-[#66626A] leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Helping you navigate life's challenges with
                                wisdom, compassion, and inner peace.
                            </p>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <div className="border-solid border-[#5A2654] border-2 rounded-full p-1 inline-block">
                                    <button className="bg-[#5B2655] hover:bg-[#5A2654] cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold tracking-wider transition-colors duration-200 uppercase">
                                        Book My Free Consultation
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative md:col-span-2  flex justify-center lg:justify-end">
                            <div className="w-64 sm:w-80 md:w-96 lg:w-[28rem] aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Peaceful woman meditating"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service Pillars Section */}
                    <div className="py-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto text-center">
                            {/* Emotional Healing */}
                            <div className="space-y-4">
                                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#C2B6C1]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="80"
                                        height="80"
                                        fill="none"
                                    >
                                        <path
                                            d="M 26.355 48.611 C 25.996 47.652 25.75 46.48 25.583 45.322 C 25.186 42.575 27.482 40.326 30.257 40.392 C 33.276 40.464 37.091 40.587 40.05 40.787 C 43.892 41.047 49.15 41.631 52.231 41.992 C 53.696 42.164 54.806 43.383 54.723 44.856 C 54.623 46.619 54.351 48.928 53.638 50.554 C 52.181 53.875 50.693 55.815 47.491 57.514 C 44.802 58.941 42.876 59.078 39.834 58.971 C 37.266 58.881 35.711 58.674 33.418 57.514 C 31.189 56.387 29.965 54.915 28.835 53.198 L 28.821 53.177 C 27.948 51.85 27.064 50.508 26.355 48.611 Z"
                                            fill="rgb(129, 81, 123)"
                                        ></path>
                                        <path
                                            d="M 36.543 22.083 C 37.917 21.279 40.481 21.033 40.481 21.033 C 40.481 21.033 41.413 20.959 42.003 21.033 C 44.372 21.329 45.727 22.622 46.886 24.709 C 48.152 26.988 48.056 28.914 47.201 31.377 C 46.481 33.45 45.723 34.805 43.788 35.84 C 41.583 37.021 39.647 36.904 37.383 35.84 C 35.44 34.928 34.493 33.803 33.603 31.85 C 32.789 30.063 32.538 28.776 32.973 26.861 C 33.49 24.59 34.533 23.26 36.543 22.083 Z"
                                            fill="rgb(91, 38, 85)"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#5A2654] uppercase tracking-wide">
                                    Emotional Healing
                                </h3>
                                <p className="text-sm text-[#66626A] leading-relaxed">
                                    Release stress, anxiety, and past traumas
                                </p>
                            </div>

                            {/* Clarity & Purpose */}
                            <div className="space-y-4">
                                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#C2B6C1]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="80"
                                        height="80"
                                        fill="none"
                                    >
                                        <path
                                            d="M 37.257 36.621 C 38.077 36.16 39.607 36.019 39.607 36.019 C 39.607 36.019 40.164 35.977 40.516 36.019 C 41.929 36.189 42.738 36.931 43.43 38.128 C 44.186 39.436 44.128 40.542 43.618 41.955 C 43.188 43.145 42.736 43.923 41.581 44.517 C 40.265 45.194 39.11 45.127 37.758 44.517 C 36.599 43.993 36.033 43.348 35.502 42.227 C 35.016 41.201 34.866 40.463 35.126 39.364 C 35.434 38.06 36.057 37.297 37.257 36.621 Z"
                                            fill="rgb(91, 38, 85)"
                                        ></path>
                                        <path
                                            d="M 51.185 41.13 C 52.567 48.376 51.782 60 51.782 60 L 54.945 59.706 C 54.945 59.706 55.069 53.076 54.945 48.831 C 54.784 43.298 54.617 35.406 51.185 30.783 C 49.677 28.751 48.457 27.496 46.233 26.257 C 43.763 24.881 41.606 24.914 38.773 25.081 C 36.478 25.217 33.761 26.257 33.761 26.257 C 33.761 26.257 29.721 28.81 27.853 31.547 C 26.045 34.2 25.298 36.239 24.631 39.366 C 22.972 47.142 25.108 59.706 25.108 59.706 L 28.271 59.706 C 28.271 59.706 26.753 48.305 27.853 41.13 C 28.126 39.349 28.13 38.298 28.748 36.603 C 29.878 33.509 30.915 31.502 33.761 29.784 C 35.514 28.725 36.721 28.326 38.773 28.197 C 41.34 28.035 42.96 28.47 45.158 29.784 C 47.432 31.142 48.422 32.508 49.634 34.84 C 50.804 37.089 50.712 38.645 51.185 41.13 Z"
                                            fill="rgb(129, 81, 123)"
                                        ></path>
                                        <path
                                            d="M 55.832 37.895 C 57.703 46.383 56.641 60 56.641 60 L 60.925 59.656 C 60.925 59.656 61.093 51.889 60.925 46.916 C 60.707 40.435 60.481 31.189 55.832 25.775 C 53.788 23.394 52.136 21.924 49.122 20.472 C 45.775 18.861 42.853 18.899 39.016 19.095 C 35.906 19.254 32.224 20.472 32.224 20.472 C 32.224 20.472 26.75 23.463 24.221 26.67 C 21.77 29.777 20.759 32.166 19.855 35.829 C 17.608 44.937 20.502 59.656 20.502 59.656 L 23.575 59.656 C 23.575 59.656 21.499 46.3 22.989 37.895 C 23.847 33.053 27.931 26.845 32.224 24.604 C 34.6 23.364 36.236 22.896 39.016 22.745 C 42.493 22.555 44.687 23.065 47.666 24.604 C 50.747 26.195 52.087 27.795 53.73 30.526 C 55.315 33.162 55.191 34.984 55.832 37.895 Z"
                                            fill="rgb(129, 81, 123)"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#5A2654] uppercase tracking-wide">
                                    Clarity & Purpose
                                </h3>
                                <p className="text-sm text-[#66626A] leading-relaxed">
                                    Gain insight into your life’s direction
                                </p>
                            </div>

                            {/* Spiritual Connection */}
                            <div className="space-y-4">
                                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#C2B6C1]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="80"
                                        height="80"
                                        fill="none"
                                    >
                                        <path
                                            d="M 12.984 44.674 L 14.487 34.661 C 15.043 30.955 18.573 27.771 21.869 29.554 C 24.38 30.913 25.805 32.206 26.932 34.832 C 27.878 37.037 27.862 38.559 27.582 40.943 C 27.346 42.956 27.084 44.165 26.027 45.893 C 24.201 48.876 21.947 49.905 18.59 50.873 C 15.139 51.867 12.451 48.226 12.984 44.674 Z"
                                            fill="rgb(129, 81, 123)"
                                        ></path>
                                        <path
                                            d="M 66.746 45.245 L 65.243 35.231 C 64.686 31.525 61.157 28.341 57.861 30.124 C 55.35 31.483 53.925 32.776 52.798 35.402 C 51.851 37.607 51.868 39.13 52.148 41.514 C 52.384 43.526 52.646 44.735 53.703 46.463 C 55.528 49.446 57.783 50.475 61.14 51.443 C 64.591 52.438 67.279 48.797 66.746 45.245 Z"
                                            fill="rgb(129, 81, 123)"
                                        ></path>
                                        <path
                                            d="M 34.362 30.588 C 36.457 29.409 40.368 29.048 40.368 29.048 C 40.368 29.048 41.79 28.939 42.69 29.048 C 46.302 29.482 48.37 31.378 50.138 34.438 C 52.069 37.781 51.922 40.607 50.618 44.219 C 49.521 47.259 48.364 49.246 45.413 50.765 C 42.049 52.496 39.097 52.324 35.643 50.765 C 32.68 49.426 31.235 47.777 29.878 44.912 C 28.636 42.291 28.252 40.404 28.916 37.596 C 29.704 34.264 31.296 32.314 34.362 30.588 Z"
                                            fill="rgb(91, 38, 85)"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#5A2654] uppercase tracking-wide">
                                    Spiritual Connection
                                </h3>
                                <p className="text-sm text-[#66626A] leading-relaxed">
                                    Align with your values and higher self
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;
