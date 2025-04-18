import { Box, Typography, Button, Stack } from "@mui/material";
import BG from "../../assets/images/getInTouchBG.jpeg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const GetInTouch = () => {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                py: 10,
                px: 2,
                color: "white",
                mb: .1,
                '&::before': {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(5, 30, 52, 0.7)", // Bluish overlay
                    zIndex: 1,
                },

            }}
        >
            <Box
                sx={{
                    position: "relative",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    textAlign: { xs: "center", md: "left" },
                    zIndex: 2,
                }}
            >
                <Typography sx={{ mb: 1, color: "#F28F53", fontWeight: "600", fontSize: "23px" }}>
                    Join Now
                </Typography>

                <Typography

                    sx={{ fontSize: { xs: "28px", md: "60px" }, fontWeight: 600, color: "#FFFFFF" }}
                >
                    Get in Touch with us now!
                </Typography>

                <Typography

                    sx={{ fontSize: { xs: "28px", md: "60px" }, fontWeight: 600, color: "#FFFFFF" }}
                >
                    Call Now – +91 911 601 1899
                </Typography>

                {/* <Button
                    variant="contained"
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#04857A', // Green part
                        borderRadius: '50px',
                        pr: 10,
                        pl: 4,
                        py: .5,
                        textTransform: 'none',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#346B65',
                        },
                        width: { xs: '100%', md: 'auto' },
                    }}
                >
                    <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "58px" }}>
                        Book A Free Demo
                    </Typography>

                    <Box
                        sx={{
                            position: 'absolute',  // Absolute positioning
                            right: 0,              // Stick to right
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: '#E38A4A',  // Orange part
                            borderRadius: '50%',
                            width: 65,
                            height: 65,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ml: 2,
                        }}
                    >
                        <ArrowForwardIcon sx={{ color: '#fff' }} />
                    </Box>
                </Button> */}

                <Button
                    variant="contained"
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#04857A',
                        borderRadius: '50px',
                        pr: { xs: 8, md: 10 }, // Responsive right padding
                        pl: { xs: 3, md: 4 },  // Responsive left padding
                        py: { xs: 1, md: 0.5 }, // Responsive vertical padding
                        textTransform: 'none',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#346B65',
                        },
                        width: { xs: '100%', md: 'auto' },
                        minWidth: { xs: '100%', sm: '200px' }, // Better mobile behavior
                        overflow: 'hidden', // Keeps the circle contained
                    }}
                >
                    {/* Text - responsive font size and line height */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 400,
                            fontSize: { xs: "14px", sm: "15px" },
                            lineHeight: { xs: "1.5", sm: "58px" },
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Book A Free Demo
                    </Typography>

                    {/* Circle icon - responsive sizing */}
                    <Box
                        sx={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: '#E38A4A',
                            borderRadius: '50%',
                            width: { xs: 50, sm: 65 }, // Responsive size
                            height: { xs: 50, sm: 65 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ml: { xs: 1, sm: 2 }, // Responsive margin
                        }}
                    >
                        <ArrowForwardIcon sx={{
                            color: '#fff',
                            fontSize: { xs: "1rem", sm: "1.25rem" } // Responsive icon size
                        }} />
                    </Box>
                </Button>
            </Box>


            {/* Absolute Decorative Images */}
            <Box
                component="img"
                src="./GetInTouch1.svg"
                alt="Decoration"
                sx={{
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    width: { xs: '30px', md: '40px' },
                    zIndex: 2,
                }}
            />
            <Box
                component="img"
                src="./GetInTouch2.svg"
                alt="Decoration"
                sx={{
                    position: 'absolute',
                    bottom: '110px',
                    left: '60%',
                    width: { xs: '30px', md: '50px' },
                    zIndex: 2,
                }}
            />
            <Box
                component="img"
                src="./GetInTouch3.svg"
                alt="Decoration"
                sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '30px',
                    width: { xs: '30px', md: '200px' },
                    zIndex: 2,
                }}
            />
            <Box
                component="img"
                src="./GetInTouch4.svg"
                alt="Decoration"
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: { xs: '30px', md: '50px' },
                    zIndex: 2,
                }}
            />

        </Box>
    );
};

export default GetInTouch;
