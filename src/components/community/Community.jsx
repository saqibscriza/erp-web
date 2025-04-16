import { Box, Grid, Typography, Card, CardContent, Avatar, Stack, Button } from "@mui/material";
import BG from "../../assets/images/communityBG.jpeg"

const stats = [
    { icon: '/Community1.svg', number: '1K+', label: 'Schools' },
    { icon: '/Community2.svg', number: '4K+', label: 'Teachers' },
    { icon: '/Community3.svg', number: '100K+', label: 'Students' },
    { icon: '/Community4.svg', number: '25+', label: 'Distributors' },
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
            mt: 10
        }}>

            {/* Top Green Stats Box */}


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
                            <img
                                src={item.icon}
                                alt={item.label}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
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
            <Box sx={{ pt: 3, textAlign: "center" }}>

                <Button sx={{ bgcolor: "#C6EBE8", color: "#04857A", mb: 3, fontWeight: 400, fontSize: "14px" }}>
                    TESTIMONIAL
                </Button>
                <Typography sx={{ fontWeight: 700, mb: 5, color: "#0E2A46", fontWeight: 700, fontSize: "45px", lineHeight: "58px" }}>
                    Creating A Community Of <br /> Life Long Learners.
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {[1, 2, 3].map((_, i) => (
                        <Grid item xs={12} md={3} key={i}>
                            <Card sx={{ borderRadius: "15px", border: "1px solid #ddd", p: 2, minHeight: "200px", maxWidth: "300px", textAlign: "left", position: "relative" }}>

                                <Box
                                    component="img"
                                    src="./CommunityQuote.svg" // Update with your image path
                                    alt="Profile"
                                    sx={{
                                        position: "absolute",
                                        top: -10, // Adjust to move image up/down
                                        left: 20, // Adjust to move image left/right
                                        width: 40, // Adjust image size
                                        height: 40,
                                        borderRadius: "50%",
                                        border: "3px solid white", // Optional border
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                        zIndex: 100
                                    }}
                                />

                                <CardContent>
                                    <Typography sx={{ mb: 2, fontWeight: 400, color: "#333931", fontWeight: 400, }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima quisquam accusamus odio consequuntur quis quae, rerum fugit laborum distinctio repellendus at, pariatur consectetur autem ratione ducimus aperiam necessitatibus nesciunt?
                                    </Typography>
                                    <Typography sx={{ fontWeight: 700, color: "#0E2A46", fontSize: "20px", mb: 1 }}>
                                        Kathy Sullivan
                                    </Typography>
                                    <Typography sx={{ color: "#04857A", fontWeight: 400, fontWeight: 400, }}>
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
