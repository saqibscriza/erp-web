import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

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
            <SectionHeader title="TESTIMONIALS">
                Home <span style={{ color: '#F15A29' }}> // </span> Testimonials
            </SectionHeader>
            <Box sx={{ px: 20, py: 4 }}>
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
                                    <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                                        {t.text}
                                    </Typography>
                                    <Box display="flex" alignItems="center" mt={2}>
                                        <Avatar src={t.avatar} alt={name} sx={{ mr: 2 }} />
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight={600}>
                                                {t.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#6366f1' }}>
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

        </>
    )
}

export default Testimonials
