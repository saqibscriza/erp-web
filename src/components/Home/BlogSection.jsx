import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, Stack } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image1 from "../../assets/images/HomeSecond1.png"
import Image2 from "../../assets/images/HomeSecond2.jpeg"
import Image3 from "../../assets/images/HomeSecond3.png"

const blogs = [
    {
        img: `${Image1}`,
        date: '14 June 2023',
        comment: '06',
        desc: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    },
    {
        img: `${Image2}`,
        date: '21 April 2024',
        comment: '06',
        desc: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    },
    {
        img: `${Image3}`,
        date: '14 June 2023',
        comment: '06',
        desc: 'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    },
];

const BlogSection = () => {
    return (
        <Box px={12} py={4} sx={{ mb: 8 }}>
            {/* Section Heading */}
            <Box textAlign="left" mb={4}>

                <Button sx={{ backgroundColor: "#04857A", color: "white", width: "125px", height: "32px", mb: 2 }}>
                    BLOG POST
                </Button>
                <Typography sx={{ fontWeight: "700", fontSize: "45px", lineHeight: "58.5px", color: "#0E2A46" }}>
                    Most Popular Post.
                </Typography>
            </Box>

            {/* Blog Cards */}
            <Grid container spacing={4} >
                {blogs.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Card sx={{ p: 2, borderRadius: 3, bgcolor: "lightGray" }}>
                            <CardMedia
                                component="img"
                                image={item.img}
                                alt="blog image"
                                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
                            />
                            <CardContent>
                                {/* Date + Comment */}
                                <Stack direction="row" spacing={2} my={1} alignItems="center">
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <CalendarMonthIcon fontSize="small" color="success" />
                                        <Typography variant="body2">{item.date}</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <ChatBubbleOutlineIcon fontSize="small" color="success" />
                                        <Typography variant="body2">Comment ({item.comment})</Typography>
                                    </Stack>
                                </Stack>

                                {/* Description */}
                                <Typography variant="body1" fontWeight={600} color="#0A1D32" my={1} sx={{ mt: 2 }}>
                                    {item.desc}
                                </Typography>

                                {/* Button */}
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
                                        py: 0,
                                        textTransform: 'none',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#346B65',
                                        },
                                        width: { xs: '100%', md: 'auto' },
                                        mt: 2
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "58px" }}>
                                        Read More
                                    </Typography>

                                    <Box
                                        sx={{
                                            position: 'absolute',  // Absolute positioning
                                            right: 0,              // Stick to right
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            backgroundColor: '#1A635D',  // Orange part
                                            borderRadius: '50%',
                                            width: 55,
                                            height: 55,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            ml: 2,
                                        }}
                                    >
                                        <ArrowForwardIcon sx={{ color: '#fff' }} />
                                    </Box>
                                </Button>
                                {/* <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        borderRadius: '30px',
                                        textTransform: 'none',
                                        backgroundColor: '#2B5C4D',
                                        '&:hover': { backgroundColor: '#1b3a31' },
                                        px: 3,
                                    }}
                                    endIcon={<ArrowForwardIcon />}
                                >
                                    Read More
                                </Button> */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BlogSection;
