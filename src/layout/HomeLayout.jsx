import React from "react";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

const HomeLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default HomeLayout;
