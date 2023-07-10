import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import Testimonials from "./Testimonials";
import Waste from "./Waste";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Product></Product>
            <Waste></Waste>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default HomePage;