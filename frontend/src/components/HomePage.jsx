import React from "react";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Contact from "./Contact";

const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default HomePage;