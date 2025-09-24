import React from "react";
import HomeLayout from "../../layout/HomeLayout";
import HeroSection from "../../components/user/section/HeroSection";
import About from "../../components/user/section/About";
import Services from "../../components/user/section/Services";
import HowItWorks from "../../components/user/section/HowItWorks";
import Testimonials from "../../components/user/section/Testimonials";
import FAQ from "../../components/user/section/Faq";
import CallToAction from "../../components/user/section/CallToAction";
import WhatsAppButton from "../../components/user/section/WhatsAppButton";

const Home = () => {
    return (
        <HomeLayout>
            <WhatsAppButton />
            <HeroSection />
            <About />
            <Services />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <CallToAction />
        </HomeLayout>
    );
};

export default Home;
