import React from "react";
import HomeLayout from "../layout/HomeLayout";
import HeroSection from "../components/user/HeroSection";
import About from "../components/user/About";

const Home = () => {
    return (
        <HomeLayout>
            <HeroSection></HeroSection>
            <About></About>
        </HomeLayout>
    );
};

export default Home;
