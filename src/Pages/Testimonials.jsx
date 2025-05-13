import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GetInTouch from '../components/getInTouch/GetInTouch';
import MenuPage from '../karanComponent/MenuPageKa';

const testimonials = [
    {
        name: 'Vivaan Sharma',
        role: 'CEO at House of Ramen',
        avatar: '/avatars/vivaan.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Arjun Reddy',
        role: 'CEO at ordian It',
        avatar: '/avatars/arjun.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Rohan Kapoor',
        role: 'CEO at Edwards',
        avatar: '/avatars/rohan.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Aditya Iyer',
        role: 'CEO at House of Ramen',
        avatar: '/avatars/aditya.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Sai Prasad',
        role: 'CEO at ordian It',
        avatar: '/avatars/sai.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Karan Malhotra',
        role: 'CEO at Edwards',
        avatar: '/avatars/karan.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Aditya Iyer',
        role: 'CEO at House of Ramen',
        avatar: '/avatars/aditya.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Sai Prasad',
        role: 'CEO at ordian It',
        avatar: '/avatars/sai.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Karan Malhotra',
        role: 'CEO at Edwards',
        avatar: '/avatars/karan.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Aditya Iyer',
        role: 'CEO at House of Ramen',
        avatar: '/avatars/aditya.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Sai Prasad',
        role: 'CEO at ordian It',
        avatar: '/avatars/sai.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Karan Malhotra',
        role: 'CEO at Edwards',
        avatar: '/avatars/karan.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
];
const Testimonials = () => {
    return (
        <>
            <MenuPage title="TESTIMONIALS" subtitle="Home" />

            {/* <SectionHeader title="TESTIMONIALS">
                Home <span style={{ color: '#F15A29' }}> // </span> Testimonials
            </SectionHeader> */}
            <Box sx={{ px: { xs: 8, sm: 5, lg: 20 }, py: 4 }}>
                <Grid container spacing={3} >
                    {testimonials.map((t, idx) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                            <Card
                                variant="outlined"
                                sx={{
                                    borderStyle: 'dashed',
                                    borderColor: '#f97316',
                                    borderWidth: '2px',
                                    borderRadius: 2,
                                    height: '100%',
                                }}
                            >
                                <CardContent>
                                    <Box display="flex" mb={1}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <StarIcon key={i} fontSize="small" sx={{ color: '#f97316' }} />
                                        ))}
                                    </Box>
                                    <Typography gutterBottom sx={{ fontSize: "17px", fontWeight: 400, color: "#333931" }}>
                                        {t.text}
                                    </Typography>
                                    <Box display="flex" alignItems="center" mt={2}>
                                        <Avatar src={t.avatar} alt={name} sx={{ mr: 2 }} />
                                        <Box>
                                            <Typography sx={{ color: "#0E2A46", fontSize: "17px", fontWeight: 700 }}>
                                                {t.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "13px", fontWeight: 400, color: '#704FE6' }}>
                                                {t.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <GetInTouch />

        </>
    )
}

export default Testimonials
