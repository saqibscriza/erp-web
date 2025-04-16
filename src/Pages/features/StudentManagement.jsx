import { Box, Grid, Paper, Stack, styled, Typography } from "@mui/material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';  // Example Icon
// Import your icons similarly
import ScheduleIcon from '@mui/icons-material/Schedule';
import StoreIcon from '@mui/icons-material/Store';
import SchoolIcon from '@mui/icons-material/School';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';

const features = [
    {
        title: "ASSIGNMENT AND NOTES",
        description: "Teachers can utilize a mobile application to share assignments and notes, as well as review and assess student work.",
        icon: <EventAvailableIcon />, // Replace with your icon
    },
    {
        title: "EVENT MANAGEMENT",
        description: "Effortlessly assign subjects to teachers based on class, with administrators easily managing class-specific subject lists.",
        icon: <EventAvailableIcon />,
    },
    {
        title: "TASK MANAGEMENT",
        description: "Instructors and principals can assign tasks to specific topics, prioritizing them based on importance.",
        icon: <EventAvailableIcon />,
    },
    {
        title: "TIME TABLE",
        description: "Our module makes it simple to create, update, and monitor subject timetables, meal timetables, and exam timetables.",
        icon: <ScheduleIcon fontSize="large" />,
    },
    {
        title: "STORE MANAGEMENT",
        description: "Our module is primarily utilized to track the tasks completed by both teachers and students.",
        icon: <StoreIcon fontSize="large" />,
    },
    {
        title: "SCHOLARSHIP",
        description: "Promotes academic excellence with learning resources and student sponsorships.",
        icon: <SchoolIcon fontSize="large" />,
    },
    {
        title: "STUDENT TRACKING",
        description: "Teachers, parents, and administrators can all check the status of a student's ID card.",
        icon: <TrackChangesIcon fontSize="large" />,
    },
    {
        title: "EMAIL & NOTIFICATION & CHAT",
        description: "Our module provides email and notification tools to ensure smooth, seamless user communication.",
        icon: <EmailIcon fontSize="large" />,
    },
    {
        title: "LEAVE MANAGEMENT",
        description: "Our module efficiently handles half-time, sick, and casual leave, along with holiday management.",
        icon: <LogoutIcon fontSize="large" />,
    },
    // Add rest of the cards similarly...
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

const StudentManagement = () => {
    return (
        // <Box sx={{ px: { xs: 2, md: 8 }, py: 10 }}>
        //     <Grid container spacing={3}>
        //         {features.map((feature, index) => (
        //             <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
        //                 <Paper
        //                     elevation={3}
        //                     sx={{
        //                         p: 4,
        //                         borderRadius: 3,
        //                         height: "100%",
        //                         transition: "0.3s",
        //                         bgcolor: index === 1 ? "primary.main" : "background.paper",  // Highlight 2nd Card
        //                         color: index === 1 ? "common.white" : "text.primary",
        //                         "&:hover": {
        //                             bgcolor: "primary.main",
        //                             color: "common.white",
        //                         },
        //                         mb: 1
        //                     }}
        //                 >
        //                     <Box sx={{ mb: 2, fontSize: 40 }}>{feature.icon}</Box>
        //                     <Typography variant="h6" fontWeight={700} gutterBottom>
        //                         {feature.title}
        //                     </Typography>
        //                     <Typography variant="body2">{feature.description}</Typography>
        //                 </Paper>
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Box>
        <Box sx={{ py: 5 }}>
            <Grid container spacing={3}>
                {features.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <HoverCard elevation={2}>
                            <Stack spacing={2}>
                                <Typography variant="h3">{item.icon}</Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </Stack>
                        </HoverCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StudentManagement;
