import React from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NearMeIcon from '@mui/icons-material/NearMe';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';

const features = [
    {
        title: "VEHICLE, DRIVER DETAILS",
        description:
            "Our module displays vehicle number, seat capacity, insurance date, contact, and driver details.",
        icon: <DirectionsCarIcon fontSize="large" />,
    },
    {
        title: "VEHICLE TRACKING",
        description:
            "Our module uses advanced RFID technology to enable accurate, real-time tracking of vehicles efficiently.",
        icon: <GpsFixedIcon fontSize="large" />,
    },
    {
        title: "ROUTE DETAILS",
        description:
            "Our module provides detailed route information and driver names assigned to each designated area.",
        icon: <AltRouteIcon fontSize="large" />,
    },
    {
        title: "DESTINATION AND FEES",
        description:
            "Our module manages student and employee transport, including pick-up, drop-off, and fee structure.",
        icon: <AccountBalanceWalletIcon fontSize="large" />,
    },
    {
        title: "TRANSPORTATION ALLOCATION",
        description:
            "Efficiently allocate transportation with specified start and end dates using our module.",
        icon: <NearMeIcon fontSize="large" />,
    },
    {
        title: "BOOK CATEGORY",
        description:
            "Effortlessly manage and organize your complete book category list using our efficient module.",
        icon: <MenuBookIcon fontSize="large" />,
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

const TransportationManagement = () => {
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

export default TransportationManagement

