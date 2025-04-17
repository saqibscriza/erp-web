import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import { styled } from "@mui/system";
import CirclePattern from "../../components/CirclePattern";
import { useState } from "react";

const modules = [
    {
        title: "Class And Section",
        desc: "A dashboard showcasing various classes and sections enhances productivity while minimizing power consumption.",
        imageSrc: "./Academics/1.svg",
    },
    {
        title: "Syllabus",
        desc: "Access, upload, and download questions from the question bank effortlessly using our module.",
        imageSrc: "./Academics/2.svg",
    },
    {
        title: "Lesson Planning",
        desc: "Our module generates subject-specific online exams and provides students with fast results.",
        imageSrc: "./Academics/3.svg",
    },
    {
        title: "Exam Timetable",
        desc: "Teachers use a mobile app to record student attendance, and parents can view daily attendance reports.",
        imageSrc: "./Academics/4.svg",
    },
    {
        title: "Admission Management",
        desc: "Efficiently handle student inquiries, streamline admission procedures, and register new students seamlessly.",
        imageSrc: "./Academics/5.svg",
    },
    {
        title: "Circular",
        desc: "We'll keep parents informed with future updates through the Circular display on the mobile app, accompanied by notifications.",
        imageSrc: "./Academics/6.svg",
    },
    {
        title: "Certificate",
        desc: "Our system facilitates the management and generation of TC and CC for seamless certification processes.",
        imageSrc: "./Academics/7.svg",
    },
    {
        title: "Department",
        desc: "Incorporate student performance in various reports, complete with signatures from teachers and the principal using our module.",
        imageSrc: "./Academics/8.svg",
    },
    {
        title: "Customizable Dashboard",
        desc: "The dashboard provides a quick view of student and staff performance, with detailed data for deeper insights.",
        imageSrc: "./Academics/9.svg",
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

const AcademicsManagement = () => {
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
    );
};

export default AcademicsManagement;
