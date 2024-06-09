import React from "react";

import "./testimonials.css";
import elipse from "../../assets/gradient-elipse.png";
import testimonialImage1 from "../../assets/testimonials-image.png";
import testimonialImage2 from "../../assets/testimonials-image2.png";
import { Box, Typography } from "@mui/material";
import Star from "../star/Star";

const Testimonials: React.FC = () => {
    return (
        <Box
            sx={{
                marginTop: {
                    xs: "150px",
                    md: "inherit",
                },
            }}
        >
            {/* <Box> */}
            <Typography
                sx={{
                    textAlign: "center",
                    letterSpacing: "0.5px",
                    fontWeight: "500",
                }}
            >
                TESTIMONAL
            </Typography>
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: "900",
                    fontSize: "32px",
                    // maxWidth: "200px",
                }}
            >
                What Our Users
            </Typography>
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: "900",
                    fontSize: "32px",
                }}
            >
                Say About Us?
            </Typography>
            {/* </Box> */}
            <Box
                sx={{
                    display: "flex",
                    marginX: "auto",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    alignItems: "center",
                    justifyContent: {
                        xs: "center",
                        md: "space-between",
                    },
                }}
            >
                <Box sx={{ position: "relative" }}>
                    <img
                        className="testimonial-image1"
                        src={testimonialImage1}
                        alt="Non-functional image for design"
                    />
                    <Star
                        styles={{
                            position: "absolute",
                            bottom: "50px",
                            left: "50px",
                        }}
                    />
                    <img
                        className="testimonial-elipse"
                        src={elipse}
                        alt="Non-function image for design"
                    />
                </Box>
                <Box
                    sx={{
                        padding: {
                            xs: "16px",
                            md: "inherit",
                        },
                    }}
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontWeight: 600,
                            letterSpacing: "0.25px",
                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                            fontSize: "24px",
                            marginBottom: "24px",
                        }}
                    >
                        The Best Financial Account App Ever!
                    </Typography>
                    <Typography
                        sx={{
                            color: "grey",
                            fontWeight: 500,
                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                            maxWidth: "700px",
                            marginBottom: "24px",
                        }}
                    >
                        “Arcu at dictum sapien, mollis. Vulputate sit id
                        accumsan, ultricies. In ultrices malesuada elit mauris
                        etiam odio. Duis tristique lacus, et blandit viverra
                        nisl velit. Sed mattis rhoncus, diam suspendisse sit
                        nunc, gravida eu. Lectus eget eget ac dolor neque lorem
                        sapien, suspendisse aliquam.”
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                                md: "block",
                            },
                        }}
                    >
                        <img
                            className="testimonial-image2"
                            src={testimonialImage2}
                            alt="Non-functional image for design"
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            marginTop: "24px",
                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                        }}
                    >
                        Nick Jones
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonials;
