import { Box, Grid, Typography, IconButton, TextField, Button, Link, Divider, OutlinedInput, Container } from '@mui/material';
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import Logo from "../../assets/images/Edu2All.png"
import Location from "../../assets/images/Location.png"
import Phone from "../../assets/images/Phone.png"
import Email from "../../assets/images/Email.png"
import BG from "../../assets/images/Footer.png"
const Footer = () => {
    return (
        <>
            <Box sx={{
                color: '#fff',
                width: '100%',
                bgcolor: '#1c3c36',
                backgroundImage: `url(${BG})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Address , Phone & Email */}
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <img src={Location} alt="" />
                                <Box>
                                    <Typography sx={{ mb: 1 }}>Address:</Typography>
                                    <Typography>A-4-5, A Block, Sector 16, Noida</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <img src={Phone} alt="" />
                                <Box>
                                    <Typography sx={{ mb: 1 }}>Phone:</Typography>
                                    <Typography>(+91)911-601 1899</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <img src={Email} alt="" />
                                <Box>
                                    <Typography sx={{ mb: 1 }}>Email:</Typography>
                                    <Typography>sales@scriza.in</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", my: 3 }} />

                {/* Footer Middle Section */}
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Grid container spacing={4}>
                        {/* Logo & Social */}
                        <Grid item xs={12} md={4}>
                            <img src={Logo} alt="" style={{ marginBottom: 16 }} />
                            <Typography variant="body2" sx={{ mb: 2, maxWidth: '300px' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam iusto, perspiciatis quis culpa.
                            </Typography>
                            <Box>
                                <IconButton color="inherit"><Facebook /></IconButton>
                                <IconButton color="inherit"><Instagram /></IconButton>
                                <IconButton color="inherit"><Pinterest /></IconButton>
                                <IconButton color="inherit"><Twitter /></IconButton>
                            </Box>
                        </Grid>

                        {/* Links */}
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontWeight: 700, mb: 2 }}>Our Services:</Typography>
                            {['Home', 'About Us', 'FAQ', 'Contact Us'].map((item) => (
                                <Typography sx={{ mb: 1 }} key={item}>{item}</Typography>
                            ))}
                        </Grid>

                        {/* Subscribe */}
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ fontWeight: 700, mb: 2 }}>Subscribe</Typography>
                            <OutlinedInput
                                placeholder="Enter your email"
                                size="small"
                                sx={{ bgcolor: '#fff', borderRadius: 1, mb: 2, width: '100%' }}
                            />
                            <Button variant="contained" sx={{ bgcolor: '#086159', color: '#fff' }}>
                                Subscribe Now
                            </Button>
                        </Grid>
                    </Grid>
                </Container>

                {/* Copyright */}
                <Box textAlign="center" sx={{ bgcolor: "#04857A", p: 2 }}>
                    <Typography variant="body2" sx={{ color: "white" }}>
                        Copyright © 2025 <b style={{ color: "#2FC7A1" }}>edu2all</b> | All Rights Reserved
                    </Typography>
                </Box>
            </Box>




        </>
    );
};

export default Footer;
