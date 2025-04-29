import React, { useState } from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NearMeIcon from '@mui/icons-material/NearMe';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import CirclePattern from '../../components/CirclePattern';

const modules = [
    {
        title: "Class And Section",
        desc: "A dashboard showcasing various classes and sections enhances productivity while minimizing power consumption.",
        imageSrc: "./Transportation/1.svg",
    },
    {
        title: "Syllabus",
        desc: "Access, upload, and download questions from the question bank effortlessly using our module.",
        imageSrc: "./Transportation/2.svg",
    },
    {
        title: "Lesson Planning",
        desc: "Our module generates subject-specific online exams and provides Transportations with fast results.",
        imageSrc: "./Transportation/3.svg",
    },
    {
        title: "Exam Timetable",
        desc: "Teachers use a mobile app to record  attendance, and parents can view daily attendance reports.",
        imageSrc: "./Transportation/4.svg",
    },
    {
        title: "Admission Management",
        desc: "Efficiently handle student inquiries, streamline admission procedures, and register new students seamlessly.",
        imageSrc: "./Transportation/5.svg",
    },
    {
        title: "Circular",
        desc: "We'll keep parents informed with future updates through the Circular display on the mobile app, accompanied by notifications.",
        imageSrc: "./Transportation/6.svg",
    },

];


const HoverCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6),
    borderRadius: theme.spacing(6),
    minHeight: "250px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#04857A",
        color: "#fff",
        transform: "scale(1.05)",
        "& .MuiTypography-root": {  // Target all Typography components
            color: "#fff !important",
        },
        "& h3": {  // Specifically target the icon
            color: "#fff !important",
        },
    },
}));


const TransportationManagement = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <Box sx={{ py: 5 }}>
            <Grid container spacing={3}>
                {modules.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <HoverCard
                            elevation={2}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Stack spacing={2}>
                                <CirclePattern imageSrc={item.imageSrc} hovered={hoveredIndex === index} />
                                <Typography sx={{ color: '#0E2A46', fontWeight: 700, fontSize: '20px' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: '#4D5756', fontWeight: 400, fontSize: '16px' }}>
                                    {item.desc}
                                </Typography>
                            </Stack>
                        </HoverCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default TransportationManagement

