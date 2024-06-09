import React from "react";
import Header from "../components/header/Header";

import Sidebar from "../components/sidebar/Sidebar";
import Hero from "../components/hero/Hero";
import { Box } from "@mui/material";
import Features from "../components/features/Features";
import Advantages from "../components/advantages/Advantages";
import FullyCustomizable from "../components/fullyCustomizable/FullyCustomizable";
import Testimonials from "../components/testimonials/Testimonials";
import Faq from "../components/Faq/Faq";
import Outro from "../components/outro/Outro";
import Footer from "../components/footer/Footer";
import Star from "../components/star/Star";

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                maxWidth: "1500px",
                margin: "auto",
            }}
        >
            {/* Header */}
            <Header />
            <Star
                styles={{ position: "absolute", right: "10px", top: "50px" }}
            />
            <Star
                styles={{
                    position: "absolute",
                    left: "20px",
                    top: "100px",
                    width: "36px",
                }}
            />

            {/* Sidebar */}
            <Sidebar />

            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <Features />

            {/* Advantages */}
            <Advantages />

            {/* Fullt Customizable */}
            <FullyCustomizable />

            {/* Testimonials */}
            <Testimonials />

            {/* Frequenly asked questions */}
            <Faq />

            {/* outro */}
            <Outro />

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Home;
