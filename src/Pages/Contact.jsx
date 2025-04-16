import React from 'react'
import SectionHeader from '../components/SectionHeader'
import {
    Box,
    Grid,
    Typography,
    OutlinedInput,
    Button,
    InputLabel,
    FormControl,
} from '@mui/material';
import {
    LocationOn,
    AccessTime,
    Phone,
} from '@mui/icons-material';

const Contact = () => {
    return (
        <>
            <SectionHeader title="CONTACT US">
                Home <span style={{ color: '#F15A29' }}> // </span> Contact Us
            </SectionHeader>

            <Box sx={{ bgcolor: "white", p: 7 }}>



                <Box sx={{ px: { xs: 2, md: 5 }, py: 10, bgcolor: '#f4f4f4' }}>


                    <Grid container spacing={8}>
                        {/* Left Info Section */}
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ color: "#0E2A46", fontWeight: 700, fontSize: "40px" }} gutterBottom>
                                Get in Touch
                            </Typography>
                            <Typography sx={{ color: "#333931", fontSize: "17px", fontWeight: 400, mb: 4 }}>
                                Contact us for innovative solutions, expert support, and seamless collaboration.
                            </Typography>
                            <Box sx={{ bgcolor: 'white', py: 6, px: 3, borderRadius: 2 }}>
                                {/* Address */}
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: 2, mb: 3 }}>
                                    <img src="./ContactLocation.svg" alt="" />
                                    <Box>
                                        <Typography sx={{ color: "#4D5756", fontWeight: 400, fontSize: "16px", mb: .3, lineHeight: "32px" }}>Our Address</Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: "21px", color: "#0E2A46" }}>
                                            Logix Park (Supreme Work), A-4–5, A Block, Sector 16, Noida, UP – 201301
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Hours */}
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: 2, mb: 3 }}>
                                    <img src="./ContactClock.svg" alt="" />
                                    <Box>
                                        <Typography sx={{ color: "#4D5756", fontWeight: 400, fontSize: "16px" }}>Hours Of Operation</Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: "21px", color: "#0E2A46" }}>
                                            Mon – Fri: 10.00 am to 7.00pm
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Contact */}
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: 2, mb: 3 }}>
                                    <img src="./ContactPhone.svg" alt="" />
                                    <Box>
                                        <Typography sx={{ color: "#4D5756", fontWeight: 400, fontSize: "16px" }}>Contact</Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: "21px", color: "#0E2A46" }}>+91 - 9116011899</Typography>
                                        <Typography sx={{ fontWeight: 700, fontSize: "21px", color: "#0E2A46" }}>info@scriza.com</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* <Box sx={{ display: "flex", justifyContent: "space-between", gap: 30, mt: 5, }}>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <img src="./ContactCustomer.svg" alt="" />
                                    <Typography sx={{ color: "", wordWrap: "" }}>Customer care</Typography>
                                </Box>
                                <Box>
                                    <img src="./ContactFb.svg" alt="" />
                                    <img src="./ContactInsta.svg" alt="" />
                                    <img src="./ContactPinterest.svg" alt="" />
                                    <img src="./ContactTwitter.svg" alt="" />
                                </Box>
                            </Box> */}

                            <Box sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on tablet+
                                justifyContent: "flex-start",
                                alignItems: "center", // Center items vertically
                                gap: { xs: 3, md: 30 }, // Smaller gap on mobile
                                mt: 5,
                                px: { xs: 2, sm: 0 } // Add horizontal padding on mobile
                            }}>
                                {/* Customer Care */}
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    order: { xs: 2, sm: 1 } // Move to bottom on mobile
                                }}>
                                    <img
                                        src="./ContactCustomer.svg"
                                        alt="Customer care icon"
                                        style={{ width: 24, height: 24 }} // Set explicit size
                                    />
                                    <Typography sx={{
                                        color: "text.primary",
                                        whiteSpace: "nowrap",
                                        fontSize: { xs: "0.875rem", sm: "1rem" } // Responsive text size
                                    }}>
                                        Customer care
                                    </Typography>
                                </Box>

                                {/* Social Icons */}
                                <Box sx={{
                                    display: "flex",
                                    gap: { xs: 2, sm: .5 }, // Smaller gap on mobile
                                    order: { xs: 1, sm: 2 } // Move to top on mobile
                                }}>
                                    {["./ContactFb.svg", "./ContactInsta.svg", "./ContactPinterest.svg", "./ContactTwitter.svg"].map((icon, index) => (
                                        <img
                                            key={index}
                                            src={icon}
                                            alt={`Social icon ${index}`}
                                            style={{
                                                width: { xs: 20, sm: 24 }, // Smaller on mobile
                                                height: { xs: 20, sm: 24 },
                                                transition: "transform 0.3s",
                                                "&:hover": {
                                                    transform: "scale(1.1)"
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>

                        {/* Right Form Section */}
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={2}>
                                {/* Name Field */}
                                <Grid item size={{ xs: 12 }}>

                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Name*</InputLabel>
                                    <OutlinedInput sx={{
                                        backgroundColor: "white",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // This removes the border
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border on hover
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border when focused
                                        }
                                    }} fullWidth notched placeholder="Name" />

                                </Grid>

                                {/* Email Field */}
                                <Grid item size={{ xs: 12 }}>
                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Email Address*</InputLabel>
                                    <OutlinedInput sx={{
                                        backgroundColor: "white",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // This removes the border
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border on hover
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border when focused
                                        }
                                    }} fullWidth notched placeholder="Email Address" />
                                </Grid>

                                {/* Phone Field */}
                                <Grid item size={{ xs: 12 }}>

                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Phone*</InputLabel>
                                    <OutlinedInput sx={{
                                        backgroundColor: "white",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // This removes the border
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border on hover
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border when focused
                                        }
                                    }} fullWidth notched placeholder="Phone" />

                                </Grid>

                                {/* Subject Field */}
                                <Grid item size={{ xs: 12 }}>

                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Subject*</InputLabel>
                                    <OutlinedInput sx={{
                                        backgroundColor: "white",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // This removes the border
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border on hover
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none" // Removes border when focused
                                        }
                                    }} fullWidth notched placeholder="Subject" />

                                </Grid>

                                {/* Message Field */}
                                <Grid item size={{ xs: 12 }}>

                                    <InputLabel sx={{ color: "#0E2A46", fontWeight: 400, fontSize: "18px", mb: 1 }}>Message*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        placeholder="Message"
                                        multiline
                                        minRows={3}
                                        notched
                                        sx={{
                                            backgroundColor: "white",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none" // This removes the border
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                border: "none" // Removes border on hover
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                border: "none" // Removes border when focused
                                            }
                                        }}
                                    />

                                </Grid>

                                {/* Submit Button */}
                                <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        maxWidth="200px"
                                        sx={{
                                            bgcolor: '#387b6b',
                                            color: 'white',
                                            '&:hover': { bgcolor: '#2f6659' },
                                            py: 2,
                                            px: 3,
                                            bgcolor: '#04857A',
                                            color: "white"
                                        }}
                                    >
                                        SEND MESSAGE
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Contact
