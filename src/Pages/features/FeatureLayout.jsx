import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

const tabData = [
    { label: "Academics Management", path: "" },
    { label: "Student Management", path: "student-management" },
    { label: "Transportation Management", path: "transportation-management" },
    { label: "Exam Management", path: "exam-management" },
    { label: "HR Management", path: "hr-management" },
];

const FeatureLayout = () => {
    const location = useLocation();

    const currentTab = tabData.findIndex((tab) => {
        if (location.pathname === '/' && tab.path === '') return true;
        if (tab.path !== '' && location.pathname.includes(tab.path)) return true;
        return false;
    });


    return (
        <Box sx={{ p: 8, bgcolor: 'lightgray' }}>
            {/* Heading */}
            <Box sx={{ py: 3, textAlign: "center" }}>
                <Typography variant="h4" fontWeight="bold">
                    50+ Powerful Modules For Seamless School Management
                </Typography>
            </Box>

            {/* Tabs */}
            <Tabs
                value={currentTab}
                centered
                TabIndicatorProps={{ style: { display: "none" } }} // Hide default underline
            >
                {tabData.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        component={Link}
                        to={tab.path}
                        sx={{
                            textTransform: "none",
                            fontWeight: "bold",
                            backgroundColor: currentTab === index ? "#fff" : "transparent",
                            borderBottom: currentTab === index ? "3px solid #FF9F43" : "3px solid transparent",
                            color: currentTab === index ? "#000" : "inherit",
                            borderRadius: "8px 8px 0 0",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </Tabs>

            {/* Dynamic Content */}
            <Box sx={{ py: 5 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default FeatureLayout;
