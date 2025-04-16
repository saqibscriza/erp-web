import { Box, Grid, Typography, Card, CardContent, Avatar, Stack, Button } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import BG from "../../assets/images/communityBG.jpeg"
import School from "/Community1.svg"
import Teacher from "/Community2.svg"
import Student from "/Community3.svg"
import Distributor from "/Community4.svg"



const stats = [
    { icon: <SchoolIcon />, number: "1K+", label: "Schools" },
    { icon: <PeopleIcon />, number: "4K+", label: "Teachers" },
    { icon: <GroupIcon />, number: "100K+", label: "Students" },
    { icon: <StoreIcon />, number: "25+", label: "Distributor" },
];

const Community = () => {
    return (
        <Box sx={{
            position: "relative",
            py: 10,
            px: 2,
            backgroundImage: `url(${BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>

            {/* Top Green Stats Box */}
            {/* <Box
                sx={{
                    backgroundColor: "#3A7E76",
                    backgroundImage: `url('.png')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "50px",
                    px: 5,
                    py: 3,
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    gap: 5,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    color: "white",
                    zIndex: 2,
                }}
            >
                {stats.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                        <Avatar sx={{ bgcolor: "white", color: "#3A7E76", mb: 1 }}>
                            {item.icon}
                        </Avatar>
                        <Box>
                            <Typography variant="h6">{item.number}</Typography>
                            <Typography variant="body2">{item.label}</Typography>
                        </Box>

                    </Box>
                ))}
            </Box> */}

            <Box
                sx={{
                    backgroundColor: "#3A7E76",
                    backgroundImage: `url('.png')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "50px",
                    px: { xs: 2, sm: 3, md: 5 },  // Responsive padding
                    py: { xs: 2, sm: 2.5, md: 3 },
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    gap: { xs: 2, sm: 3, md: 5 },

                    justifyContent: "center",
                    color: "white",
                    zIndex: 2,
                }}
            >
                {stats.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            justifyContent: "center",
                        }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: "white",
                                color: "#3A7E76",
                                mb: 1,
                                width: { xs: 32, sm: 40, md: 50 },   // Responsive Avatar size
                                height: { xs: 32, sm: 40, md: 50 },
                            }}
                        >
                            {item.icon}
                        </Avatar>

                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
                                }}
                            >
                                {item.number}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>


            {/* White Testimonial Section */}
            <Box sx={{ pt: 5, textAlign: "center" }}>

                <Button sx={{ bgcolor: "#C6EBE8", color: "#04857A", mb: 3 }}>
                    TESTIMONIAL
                </Button>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 5 }}>
                    Creating A Community Of <br /> Life Long Learners.
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {[1, 2, 3].map((_, i) => (
                        <Grid item xs={12} md={3} key={i}>
                            <Card sx={{ borderRadius: "15px", border: "1px solid #ddd", p: 2, minHeight: "200px", maxWidth: "300px" }}>
                                <CardContent>
                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima quisquam accusamus odio consequuntur quis quae, rerum fugit laborum distinctio repellendus at, pariatur consectetur autem ratione ducimus aperiam necessitatibus nesciunt?
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                        {i === 1 ? "Elsie Stroud" : "Kathy Sullivan"}
                                    </Typography>
                                    <Typography variant="caption" color="#3A7E76">
                                        CEO at {i === 1 ? "Edwards" : "ordian it"}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Box>
    )
};

export default Community;
