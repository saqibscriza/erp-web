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



const features = [
    {
        title: "SALARY SETTING",
        description:
            "Access employee details like designation, pay head, amount type, and unit through our module.",
        icon: <SettingsIcon fontSize="large" />,
    },
    {
        title: "PAY HEAD",
        description:
            "Easily display, manage, and organize various master data types using our efficient module system.",
        icon: <SubjectIcon fontSize="large" />,
    },
    {
        title: "PAY TYPE",
        description:
            "Effortlessly view and manage payment type and name entries using our module.",
        icon: <CreditCardIcon fontSize="large" />,
    },
    {
        title: "GENERATE PAY SLEEP",
        description:
            "Our module generates pay slips and efficiently manages employee reports on a monthly and annual basis.",
        icon: <ReceiptLongIcon fontSize="large" />,
    },
    {
        title: "ACCOUNT MANAGEMENT",
        description:
            "Efficiently track bank and cash transactions, along with expenses and general vouchers using our module.",
        icon: <AccountBalanceIcon fontSize="large" />,
    },
    {
        title: "FEES MANAGEMENT",
        description:
            "Our module processes school payments, issues fee receipts, and updates the fee register, ensuring highly accurate data.",
        icon: <AttachMoneyIcon fontSize="large" />,
    },
    {
        title: "REPORTS",
        description:
            "Our module manages reports like Journal, Ledger, Trial Balance, Balance Sheet, and more efficiently.",
        icon: <BarChartIcon fontSize="large" />,
    },
    {
        title: "HR MANAGEMENT",
        description:
            "Our module efficiently manages reports like Journal, Ledger, Trial Balance, Balance Sheet, and more.",
        icon: <PersonIcon fontSize="large" />,
    },
    {
        title: "MASTERS",
        description:
            "Our system efficiently manages Account Master, Expense Master, Bank/Cash Master, Tax Master, and other essential components.",
        icon: <StarIcon fontSize="large" />,
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

const HRManagement = () => {
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
    );
};

export default HRManagement;
