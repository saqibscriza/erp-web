import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import QuizIcon from '@mui/icons-material/Quiz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';

const features = [
    {
        title: "MANUAL EXAMINATION",
        description:
            "Empower teachers to create manual exam papers and schedule exams for their students using our module.",
        icon: <DescriptionIcon fontSize="large" />,
    },
    {
        title: "QUESTION BANK",
        description:
            "Access, upload, and download questions from the question bank effortlessly using our module.",
        icon: <LibraryBooksIcon fontSize="large" />,
    },
    {
        title: "ONLINE EXAMINATION",
        description:
            "Our module generates subject-specific online exams and provides students with fast results.",
        icon: <QuizIcon fontSize="large" />,
    },
    {
        title: "EXAM TIMETABLE",
        description:
            "Efficiently display and manage start and end dates for weekly, monthly, and yearly exams with our module.",
        icon: <AccessTimeIcon fontSize="large" />,
    },
    {
        title: "SET GRADING/ RANKING LEVELS",
        description:
            "Establish grades and ranking levels based on students' exam performance using our module.",
        icon: <LeaderboardIcon fontSize="large" />,
    },
    {
        title: "EXAM RESULT",
        description:
            "Easily display, manage, and organize comprehensive exam results using our user-friendly module system.",
        icon: <AssessmentIcon fontSize="large" />,
    },
    {
        title: "EXAM REPORT",
        description:
            "Include student performance in detailed reports with teacher and principal signatures using our module.",
        icon: <InsertChartIcon fontSize="large" />,
    },
    {
        title: "CLASS DESIGNATION",
        description:
            "Easily specify and manage customized ranking levels for each individual class using our module.",
        icon: <AccountTreeIcon fontSize="large" />,
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

const ExamManagement = () => {
    return (
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
    )
}

export default ExamManagement

