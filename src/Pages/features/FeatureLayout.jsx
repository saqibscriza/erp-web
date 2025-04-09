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

    const currentTab = tabData.findIndex((tab) =>
        location.pathname.startsWith(tab.path)
    );

    return (
        <Box sx={{ p: 8 }}>
            {/* Navbar Part */}
            <Box sx={{ py: 3, textAlign: "center" }}>
                <Typography variant="h4" fontWeight="bold">
                    50+ Powerful Modules For Seamless School Management
                </Typography>
            </Box>

            {/* Tabs */}
            <Tabs
                value={currentTab}
                centered
                TabIndicatorProps={{ style: { background: "#FF9F43" } }}
            >
                {tabData.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        component={Link}
                        to={tab.path}
                        sx={{ textTransform: "none", fontWeight: "bold" }}
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
