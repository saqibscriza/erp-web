import { Box, Grid, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image1 from "../../assets/images/HomeSecond1.png"
import Image2 from "../../assets/images/HomeSecond2.jpeg"
import Image3 from "../../assets/images/HomeSecond3.png"



const Security = () => {
    return (
        <Box px={{ xs: 2, md: 20 }} py={{ xs: 4, md: 0 }}>
            <Grid container spacing={4} alignItems="center">

                {/* Left Section - Images */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '900px',
                            height: { xs: 500, md: 600 },
                            mx: 'auto',
                            mt: 8,
                        }}
                    >
                        {/* Image 1 - Top Left */}
                        <Box
                            component="img"
                            src="./SecurityImage1.svg" // replace with your actual image path
                            alt="Student 1"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: { xs: '45%', md: '35%' },
                                borderRadius: 2,
                                objectFit: 'cover',
                            }}
                        />

                        {/* Image 2 - Bottom Right */}
                        <Box
                            component="img"
                            src="./SecurityImage3.svg"
                            alt="Students talking"
                            sx={{
                                position: 'absolute',
                                bottom: 100,
                                right: 90,
                                width: { xs: '55%', md: '45%' },
                                borderRadius: 2,
                                objectFit: 'cover',
                            }}
                        />

                        {/* Image 3 - Top Right (Experience Card) */}
                        <Box
                            component="img"
                            src="./SecurityImage2.svg"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: { xs: '25%', md: '25%' },
                                width: 180,
                                height: 180,
                                border: '1px dashed #fb923c',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 1,
                            }}
                        >

                        </Box>

                        {/* Decorative shape (Top left corner) */}
                        <Box
                            component="img"
                            src="./SecurityImage4.svg"
                            alt="Shape"
                            sx={{
                                position: 'absolute',
                                top: -30,
                                left: -30,
                                width: 50,
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right Section - Content */}
                <Grid item size={{ xs: 12, md: 6, display: "flex", justifyContent: "flex-start", gap: 1, alignItems: "center" }}>
                    <Typography sx={{ color: "#F28F53", fontSize: "14px", fontWeight: 400, display: "flex", justifyContent: "flex-start", gap: 1, alignItems: "center" }} gutterBottom>
                        <img src="./SecurityIcon.svg" alt="" />
                        EDU2ALL SECURITY
                    </Typography>

                    <Typography sx={{ color: "#0E2A46", fontSize: "45px", fontWeight: 700 }} >
                        Why Choose Us?
                    </Typography>

                    <Typography sx={{ color: "#4D5756", fontSize: "17px", fontWeight: 400, mb: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </Typography>

                    <Grid container spacing={2} mb={3}>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle1" fontWeight={700} color="#0D1B2A">
                                Customer Centricity:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Edu2All offers custom workflows, reports, and scalability, ensuring seamless adaptation.
                            </Typography>
                        </Grid>

                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography variant="subtitle1" fontWeight={700} color="#0D1B2A">
                                Product Usability:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Edu2All’s intuitive interface ensures easy navigation, reducing training time and boosting adoption.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="subtitle1" fontWeight={700} color="#0D1B2A">
                        Privacy & Security
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={3}>
                        Edu2All ensures top-tier data security with <b>GDPR compliance and ISO/IEC 27001 certification</b>, safeguarding sensitive information with the highest privacy standards.
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
                </Grid>

            </Grid>
        </Box >
    )
}

export default Security;
