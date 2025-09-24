import React from "react";
import Navbar from "../components/user/common/Navbar";
import Footer from "../components/user/common/Footer";

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
