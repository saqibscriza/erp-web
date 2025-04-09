import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavLogo from "../../assets/images/NavLogo.png"


const navItems = ['Home', 'About Us', 'FAQ', 'Testimonials', 'Contact'];

const Navbar = () => {
    const activeItem = "Contact"; // Pass active menu name dynamically

    return (
        <Box sx={{ py: 1, px: 3, borderBottom: "1px solid #ddd" }}>
            <Grid container alignItems="center" justifyContent="space-between">

                {/* Left Logo */}
                <Grid item>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img src={NavLogo} alt="Logo" width="120px" />
                    </Box>
                </Grid>

                {/* Center Menu */}
                <Grid item>
                    <Stack direction="row" spacing={4}>
                        {navItems.map((item) => (
                            <Typography
                                key={item}
                                variant="body1"
                                sx={{
                                    cursor: "pointer",
                                    border: item === activeItem ? "1px solid #3A7E76" : "none",
                                    borderRadius: "20px",
                                    px: 2,
                                    py: 0.5,
                                    color: "#192A3E",
                                    "&:hover": {
                                        border: "1px solid #3A7E76",
                                    },
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Stack>
                </Grid>

                {/* Right Buttons */}
                <Grid item>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button
                            sx={{
                                backgroundColor: "#3A7E76",
                                borderRadius: "50px",
                                color: "#fff",
                                textTransform: "none",
                                px: 3,
                                position: "relative",
                                "&:after": {
                                    content: '""',
                                    backgroundColor: "#E88C51",
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                    position: "absolute",
                                    right: "0px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                },
                            }}
                        >
                            Free Demo
                            <ArrowForwardIcon sx={{ position: "absolute", right: "8px" }} />
                        </Button>

                    </Stack>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Navbar;
