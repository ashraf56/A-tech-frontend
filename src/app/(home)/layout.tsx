import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div >
            <Navbar />
            <div className="mb-5">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default layout;