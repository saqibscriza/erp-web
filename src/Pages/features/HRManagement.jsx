import { Box, Grid, Paper, Stack, styled, Typography } from "@mui/material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';  // Example Icon
// Import your icons similarly
import SettingsIcon from '@mui/icons-material/Settings';
import SubjectIcon from '@mui/icons-material/Subject';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import CirclePattern from "../../components/CirclePattern";
import { useState } from "react";



const modules = [
    {
        title: "Class And Section",
        desc: "A dashboard showcasing various classes and sections enhances productivity while minimizing power consumption.",
        imageSrc: "./HR/1.svg",
    },
    {
        title: "Syllabus",
        desc: "Access, upload, and download questions from the question bank effortlessly using our module.",
        imageSrc: "./HR/2.svg",
    },
    {
        title: "Lesson Planning",
        desc: "Our module generates subject-specific online exams and provides HRs with fast results.",
        imageSrc: "./HR/3.svg",
    },
    {
        title: "Exam Timetable",
        desc: "Teachers use a mobile app to record HR attendance, and parents can view daily attendance reports.",
        imageSrc: "./HR/4.svg",
    },
    {
        title: "Admission Management",
        desc: "Efficiently handle HR inquiries, streamline admission procedures, and register new HRs seamlessly.",
        imageSrc: "./HR/5.svg",
    },
    {
        title: "Circular",
        desc: "We'll keep parents informed with future updates through the Circular display on the mobile app, accompanied by notifications.",
        imageSrc: "./HR/6.svg",
    },
    {
        title: "Certificate",
        desc: "Our system facilitates the management and generation of TC and CC for seamless certification processes.",
        imageSrc: "./HR/7.svg",
    },
    {
        title: "Department",
        desc: "Incorporate HR performance in various reports, complete with signatures from teachers and the principal using our module.",
        imageSrc: "./HR/8.svg",
    }
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

const HRManagement = () => {
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

export default HRManagement;
