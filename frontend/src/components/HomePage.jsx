import React from "react";
import Navbar from "./homepage-components/Navbar";
import Product from "./homepage-components/Product";
import Benefits from "./homepage-components/Benefits";
import Features from "./homepage-components/Features";
import Reviews from "./homepage-components/Reviews";
import Waste from "./homepage-components/Waste";
import Press from "./homepage-components/Press";
import Contact from "./homepage-components/Contact";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Product></Product>
            <Benefits></Benefits>
            <Features></Features>
            <Waste></Waste>
            <Reviews></Reviews>
            <Press></Press>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default HomePage;