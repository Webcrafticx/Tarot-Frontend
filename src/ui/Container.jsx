import React from "react";

const Container = ({ children, className }) => {
    return (
        <div
            className={`max-w-[1511px] min-w-screen p-4 mx-auto bg-[#E1D9CB] px-[clamp(20px,7vw,32px)] ${className}`}
        >
            {children}
        </div>
    );
};

export default Container;
