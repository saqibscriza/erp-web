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
        <Box sx={{ py: 6, bgcolor: 'grey.50', px: 20 }}>
            {/* Heading */}
            <Box sx={{ py: 3, textAlign: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                    <img src="./SecurityIcon.svg" alt="" />
                    <Typography sx={{ color: "#2FC7A1", fontSize: "14px", fontWeight: 400 }}>EDU2ALL FEATURE</Typography>
                    <img src="./SecurityIcon.svg" alt="" />
                </Box>

                <Typography sx={{ color: "#0E2A46", fontSize: "45px", fontWeight: 700, px: 3, lineHeight: "60px" }}>
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
                            fontSize: "16px",
                            fontWeight: 400,
                            textTransform: "none",
                            textDecoration: "none",
                            backgroundColor: currentTab === index ? "#fff" : "transparent",
                            borderBottom: currentTab === index ? "2px solid #F28F53" : "1px solid lightgray",
                            color: currentTab === index ? "#333931" : "#ADADBD",
                            borderRadius: "4px 4px 0 0",
                            transition: "all 0.3s ease",
                            '&.Mui-selected': {
                                color: '#333931', // Active text color
                            },

                        }}
                    />
                ))}
            </Tabs>

            {/* Dynamic Content */}
            <Box sx={{ py: 2 }}>
                <Outlet />
            </Box>
        </Box>


    );
};

export default FeatureLayout;



