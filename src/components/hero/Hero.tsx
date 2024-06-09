import { Box, Typography } from "@mui/material";
import React from "react";

import "./hero.css";
import elipse from "../../assets/gradient-elipse.png";
import rightArrow from "../../assets/icons/right-arrow-long.svg";
import circlePlay from "../../assets/icons/circle-play.svg";
import heroImage1 from "../../assets/hero-image1.png";
import heroImage2 from "../../assets/hero-image2.png";
import Star from "../star/Star";

const mainText = {
    fontSize: {
        xs: "32px",
        md: "48px",
        lg: "58px",
    },
    fontWeight: "900",
    paddingY: "0px",
    textAlign: {
        xs: "center",
        md: "left",
    },
};

const Hero: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: {
                    xs: "10%",
                    md: "0% 0% 0% 10%",
                },
                position: "relative",
            }}
        >
            <Box sx={{ flex: "1" }}>
                <Box>
                    <Typography component="h1" sx={mainText}>
                        Make The Best
                    </Typography>
                    <Typography component="h1" sx={mainText}>
                        Financial Decision
                    </Typography>
                    <Typography
                        sx={{
                            color: "grey",
                            fontWeight: "500",
                            maxWidth: "500px",
                            marginX: {
                                xs: "auto",
                                md: "inherit",
                            },
                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                            marginTop: {
                                xs: "32px",
                                md: "inherit",
                            },
                        }}
                    >
                        Cum et convallis risus placerat aliquam, nunc.
                        Scelerisque aliquet faucibus tincidunt eu adipiscing
                        sociis arcu lorem porttitor.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "16px",
                            gap: "16px",
                            justifyContent: {
                                xs: "center",
                                md: "flex-start",
                            },
                        }}
                    >
                        <button className="get-started-button">
                            <span className="button-text">Get Started</span>
                            <img
                                className="right-arrow-icon"
                                src={rightArrow}
                                alt="Right arrow"
                            />
                        </button>
                        <button className="watch-video-button">
                            <span className="button-text">Watch Video</span>
                            <img
                                className="watch-video-icon"
                                src={circlePlay}
                                alt="Circle play"
                            />
                        </button>
                    </Box>
                </Box>
                <Box sx={{ position: "relative" }}>
                    <img
                        className="hero-image1"
                        src={heroImage2}
                        alt="Non-functional design image"
                    />
                    <Star
                        styles={{
                            width: "48px",
                            position: "absolute",
                            left: "30%",
                            top: "50px",
                        }}
                    />
                    <Star
                        styles={{
                            width: "48px",
                            position: "absolute",
                            left: "30%",
                            top: "50px",
                        }}
                    />
                </Box>
                <img
                    className="elipse1"
                    src={elipse}
                    alt="An image for design"
                />
            </Box>
            <Box
                sx={{
                    flex: "1",
                    display: {
                        xs: "none",
                        md: "block",
                    },
                    position: "relative",
                }}
            >
                <img
                    className="hero-image2"
                    src={heroImage1}
                    alt="Demo screenshot gallery"
                />
                <Star
                    styles={{
                        width: "48px",
                        position: "absolute",
                        left: "100px",
                        top: "60%",
                    }}
                />
                <img
                    className="elipse2"
                    src={elipse}
                    alt="An image for design"
                />
            </Box>
        </Box>
    );
};

export default Hero;
