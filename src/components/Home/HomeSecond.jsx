import { Box, Grid, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image1 from "../../assets/images/HomeSecond1.png"
import Image2 from "../../assets/images/HomeSecond2.jpeg"
import Image3 from "../../assets/images/HomeSecond3.png"



const HomeSecond = () => {
    return (
        <Box px={{ xs: 2, md: 8 }} py={{ xs: 4, md: 8 }}>
            <Grid container spacing={4} alignItems="center">

                {/* Left Section - Images */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row', md: 'column' }} gap={2}>
                        <Box component="img" src={Image1} height={300} width={200} alt="student" borderRadius={2} />

                        <Box display="flex" gap={2}>
                            <Box component="img" src={Image2} alt="experience" width="50%" borderRadius={2} />
                            <Box component="img" src={Image3} alt="students" width="50%" borderRadius={2} />
                        </Box>
                    </Box>
                </Grid>

                {/* Right Section - Content */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ color: "#F28F53", fontSize: "14px", fontWeight: 400 }} gutterBottom>
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

export default HomeSecond;
