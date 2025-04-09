import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeThird = () => {
    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Grid container spacing={4} alignItems="center">
                {/* Left Side - Images */}
                <Grid item xs={12} md={6}>
                    <Box position="relative" display="flex" flexWrap="wrap" gap={2}>
                        {/* Image 1 */}
                        <Box
                            component="img"
                            src="/images/image1.jpg"
                            alt="Chart Analysis"
                            sx={{ width: '45%', borderRadius: 2 }}
                        />
                        {/* Image 2 */}
                        <Box
                            component="img"
                            src="/images/image2.jpg"
                            alt="Team Discussion"
                            sx={{ width: '45%', borderRadius: 2 }}
                        />
                        {/* Image 3 */}
                        <Box
                            component="img"
                            src="/images/image3.jpg"
                            alt="Man Working"
                            sx={{ width: '100%', borderRadius: 2 }}
                        />
                        {/* Experience Badge */}
                        <Box
                            position="absolute"
                            top="40%"
                            left="40%"
                            sx={{
                                bgcolor: '#E49052',
                                color: '#000',
                                borderRadius: '50%',
                                width: 140,
                                height: 140,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                p: 2,
                            }}
                        >
                            <Typography variant="h4" fontWeight={700}>
                                5+
                            </Typography>
                            <Typography variant="body2">
                                Years Of <br /> Experiences
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Right Side - Content */}
                <Grid item xs={12} md={6}>
                    <Typography variant="overline" color="primary.main" fontWeight={700}>
                        About Us
                    </Typography>

                    <Typography variant="h4" fontWeight={700} mb={2}>
                        We Build Software That Works Like The World Around You.
                    </Typography>

                    <Typography color="text.secondary" mb={4}>
                        We've seen projects fail due to poor planning and communication.
                        We're here to ensure yours succeeds — seamlessly and on time.
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Typography fontWeight={700} gutterBottom>
                                Our Mission:
                            </Typography>
                            <Typography color="text.secondary">
                                Empowering growth with secure, scalable, and innovative software solutions.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography fontWeight={700} gutterBottom>
                                Our Vision:
                            </Typography>
                            <Typography color="text.secondary">
                                Innovative, scalable solutions empowering businesses and education for a smarter future.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#3D7D75', // Green part
                            borderRadius: '50px',
                            px: 3,
                            py: 1.5,
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
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeThird;
