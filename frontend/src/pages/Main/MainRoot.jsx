import React from "react";
import { Outlet } from "react-router-dom";

//components
import Footer from "../../components/layout/Footer/Footer";
import Navbar from "../../components/layout/Navbar/Navbar";
import ScrollTopButton from './../../components/Main/ScrollTop/ScrollTopButton';

function MainRoot() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            {/* //!scroll top button */}
            <ScrollTopButton />
        </>
    );
}

export default MainRoot;