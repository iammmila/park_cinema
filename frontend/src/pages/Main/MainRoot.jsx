import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Main/Footer/Footer";
import Navbar from "../../components/Main/Navbar/Navbar";
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