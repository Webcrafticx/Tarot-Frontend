import React from "react";
import Container from "../../ui/Container";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "SPIRITUAL COUNSELLING",
            description:
                "Private guidance for clarity, healing, and personal growth.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Woman in spiritual counselling session",
        },
        {
            id: 2,
            title: "ENERGY HEALING",
            description: "Restore balance and release emotional blockages.",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Energy healing session with hands",
        },
        {
            id: 3,
            title: "RETREATS & WORKSHOPS",
            description:
                "Deepen your journey through immersive group experiences.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Group meditation and workshop setting",
        },
    ];

    return (
        <Container className="py-12 md:py-16">
            <div
                id="services"
                className="min-h-screen bg-gradient-to-b p-4 from-[#F5F3EF] to-[#E1D9CB] rounded-4xl"
            >
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="mb-4">
                        <span className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wide">
                            Services
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                        How I Can Serve You
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                        All services available in-person and online for maximum
                        flexibility.
                    </p>
                </div>

                {/* Services Grid - 1 column mobile, 3 columns tablet and desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="text-center group cursor-pointer"
                        >
                            {/* Service Image with Arch Shape */}
                            <div className="mb-4 md:mb-5">
                                <div className="relative w-full max-w-xs md:max-w-none mx-auto">
                                    {/* Mobile: Larger images */}
                                    <div className="md:hidden aspect-[4/5] rounded-t-full overflow-hidden border-4 border-gray-300 group-hover:border-[#5B2655] transition-colors duration-300">
                                        <img
                                            src={service.image}
                                            alt={service.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Tablet & Desktop: Compact images */}
                                    <div className="hidden md:block aspect-[3/4] rounded-t-full overflow-hidden border-3 border-gray-300 group-hover:border-[#5B2655] transition-colors duration-300">
                                        <img
                                            src={service.image}
                                            alt={service.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Service Content */}
                            <div className="px-2">
                                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 uppercase tracking-wide leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm md:text-sm text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Optional CTA Section */}
                <div className="text-center mt-8 md:mt-10">
                    <div className="border-solid border-[#C2B6C1] border-2 rounded-full p-0.5 md:p-1 inline-block">
                        <button className="bg-gradient-to-r from-[#5B2655] to-[#814E7A] hover:opacity-90 cursor-pointer text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-colors duration-200 uppercase">
                            Explore All Services
                        </button>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="text-center mt-12 md:mt-16">
                    <blockquote className="text-lg md:text-xl lg:text-4xl font-medium text-gray-700 italic leading-relaxed max-w-3xl mx-auto">
                        "I hold a space for you to be fully seen and heard—this
                        is when healing begins."
                    </blockquote>
                </div>
            </div>
        </Container>
    );
};

export default Services;
