import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import { styled } from "@mui/system";

const modules = [
    {
        title: "Class And Section",
        desc: "A dashboard showcasing various classes and sections enhances productivity while minimizing power consumption.",
        icon: "📚",
    },
    {
        title: "Syllabus",
        desc: "Access, upload, and download questions from the question bank effortlessly using our module.",
        icon: "📄",
    },
    {
        title: "Lesson Planning",
        desc: "Our module generates subject-specific online exams and provides students with fast results.",
        icon: "📝",
    },
    {
        title: "Exam Timetable",
        desc: "Teachers use a mobile app to record student attendance, and parents can view daily attendance reports.",
        icon: "⏰",
    },
    {
        title: "Admission Management",
        desc: "Efficiently handle student inquiries, streamline admission procedures, and register new students seamlessly.",
        icon: "🗂️",
    },
    {
        title: "Circular",
        desc: "We'll keep parents informed with future updates through the Circular display on the mobile app, accompanied by notifications.",
        icon: "🔔",
    },
    {
        title: "Certificate",
        desc: "Our system facilitates the management and generation of TC and CC for seamless certification processes.",
        icon: "🏷️",
    },
    {
        title: "Department",
        desc: "Incorporate student performance in various reports, complete with signatures from teachers and the principal using our module.",
        icon: "🏢",
    },
    {
        title: "Customizable Dashboard",
        desc: "The dashboard provides a quick view of student and staff performance, with detailed data for deeper insights.",
        icon: "📊",
    },
];

const HoverCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    minHeight: "220px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#04857A",
        color: "#fff",
        "& svg, & span": {
            color: "#fff",
        },
    },
}));

const AcademicsManagement = () => {
    return (
        <Box sx={{ py: 5 }}>
            <Grid container spacing={3}>
                {modules.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <HoverCard elevation={2}>
                            <Stack spacing={2}>
                                <Typography variant="h3">{item.icon}</Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
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
