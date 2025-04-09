import { Box, Typography, Button, Stack } from "@mui/material";
import BG from "../../assets/images/getInTouchBG.jpeg"

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
                // backgroundColor:'#0E2A46'
                
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
                        backgroundColor: "#3A7E76",
                        borderRadius: "30px",
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#2f655e",
                        },
                    }}
                >
                    Book A Free Demo
                </Button>
            </Box>
        </Box>
    );
};

export default GetInTouch;
