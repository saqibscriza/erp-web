import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavLogo from "../../assets/images/NavLogo.png"


const navItems = ['Home', 'About Us', 'FAQ', 'Testimonials', 'Contact'];

const Navbar = () => {
    const activeItem = "Contact"; // Pass active menu name dynamically

    return (

        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={NavLogo} alt="Logo" width="120px" />
            </Box>
            <Box>
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
                                color: "#0E2A46",
                                // "&:hover": {
                                //     border: "1px solid #3A7E76",
                                // },
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Stack>
            </Box>
            <Box>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                        variant="contained"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#3D7D75', // Green part
                            borderRadius: '50px',
                            px: 1.5,
                            py: .5,
                            textTransform: 'none',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#346B65',
                            },
                            width: { xs: '100%', md: 'auto' },
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Book A Free Demo
                        </Typography>

                        <Box
                            sx={{
                                backgroundColor: '#E38A4A',  // Orange part
                                borderRadius: '50%',
                                width: 50,
                                height: 50,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                ml: 2,
                            }}
                        >
                            <ArrowForwardIcon sx={{ color: '#fff' }} />
                        </Box>
                    </Button>


                </Stack>
            </Box>
        </Box>




    )
}

export default Navbar;
