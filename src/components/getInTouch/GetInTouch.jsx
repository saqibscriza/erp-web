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
                // opacity:1,
                py: 10,
                px: 2,
                color: "white",
                mb: 2,

            }}
        >
            <Box
                sx={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    textAlign: { xs: "center", md: "left" },

                }}
            >
                <Typography variant="subtitle1" color="#F4A300" mb={1}>
                    Join Now
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight={700}
                    mb={2}
                    sx={{ fontSize: { xs: "28px", md: "40px" } }}
                >
                    Get in Touch with us now!
                </Typography>

                <Typography
                    variant="h5"
                    fontWeight={600}
                    mb={4}
                    sx={{ fontSize: { xs: "20px", md: "28px" } }}
                >
                    Call Now – +91 911 601 1899
                </Typography>

                <Button
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
                </Button>
            </Box>
        </Box>
    );
};

export default GetInTouch;
