import React from "react";
import HomeLayout from "../layout/HomeLayout";
import HeroSection from "../components/user/HeroSection";
import About from "../components/user/About";
import Services from "../components/user/Services";
import HowItWorks from "../components/user/HowItWorks";
import Testimonials from "../components/user/Testimonials";
import FAQ from "../components/user/Faq";
import CallToAction from "../components/user/CallToAction";

const Home = () => {
    return (
        <HomeLayout>
            <HeroSection></HeroSection>
            <About></About>
            <Services></Services>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <CallToAction></CallToAction>
        </HomeLayout>
    );
};

export default Home;
