import { Box, Grid, Typography, IconButton, TextField, Button, Link, Divider, OutlinedInput, Container } from '@mui/material';
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import Logo from "../../assets/images/Edu2All.png"
import Location from "../../assets/images/Location.png"
import Phone from "../../assets/images/Phone.png"
import Email from "../../assets/images/Email.png"

const Footer = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#1c3c36', color: '#fff', p: 4 }}>
                {/* Address , Phone & Email */}
                <Container maxWidth="lg" alignItems="center">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 4 }}>
                                    <img src={Location} alt="" />
                                    <Box sx={{}}>
                                    
                                        <Typography>A-4-5, A Block, Sector 16, Noida</Typography>
                                        <Typography sx={{ mb: 2 }}>Address:</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                                <img src={Phone} alt="" />
                                <Box>
                                    <Typography sx={{ mb: 2 }}>Phone:</Typography>
                                    <Typography>(+91)911-601 1899</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                                <img src={Email} alt="" />
                                <Box>
                                    <Typography sx={{ mb: 2 }}>Email:</Typography>
                                    <Typography>Sales@scriza.in</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", p: 1, mb: 2 }} />

                {/* Our Services & Subscribe */}
                <Container maxWidth="lg" >

                    <Grid container spacing={4} >
                        {/* Logo & Social */}
                        <Grid item xs={12} md={4}>
                            <img src={Logo} alt="" />
                            <Typography variant="body1" sx={{ maxWidth: "300px" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam iusto, perspiciatis quis culpa odio quod. Quos repudiandae cupiditate quae, dolores atque fuga laboriosam est. Iste hic itaque quae doloremque.
                            </Typography>
                            <IconButton color="inherit"><Facebook /></IconButton>
                            <IconButton color="inherit"><Instagram /></IconButton>
                            <IconButton color="inherit"><Pinterest /></IconButton>
                            <IconButton color="inherit"><Twitter /></IconButton>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: "flex", flexDirection: "column", mb: 1, gap: 1 }} >
                                <Typography sx={{ color: "#FFFFFF", fontWeight: "700", mb: 2 }}>Our Services:</Typography>
                                <Typography>
                                    Home
                                </Typography>
                                <Typography>
                                    About Us
                                </Typography>
                                <Typography>
                                    FAQ
                                </Typography>
                                <Typography>
                                    Contact Us
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography gutterBottom sx={{ color: "#FFFFFF", fontWeight: "700", mb: 2 }}>Subscribe</Typography>
                            <Box>
                                <OutlinedInput
                                    placeholder="Enter your email"
                                    variant="outlined"
                                    size="small"
                                    sx={{ bgcolor: '#ffffff', borderRadius: 1, mb: 2, }}
                                />
                            </Box>

                            <Button variant="contained" color="primary" sx={{ bgcolor: "#086159", color: "#ffffff" }}>
                                Subscribe Now
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box >
            {/* Bottom Copyright */}
            <Box textAlign="center" sx={{ bgcolor: "#04857A", p: 2 }}>
                <Typography variant="body2" sx={{ color: "white" }}>
                    Copyright © 2025 <b style={{ color: "#2FC7A1" }}>edu2all</b> | All Rights Reserved
                </Typography>
            </Box>
        </>
    );
};

export default Footer;
