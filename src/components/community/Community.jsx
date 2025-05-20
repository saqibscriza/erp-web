import { Box, Grid, Typography, Card, CardContent, Avatar, Stack, Button } from "@mui/material";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import BG from "../../assets/images/communityBG.jpeg"

const stats = [
    { icon: '/Community1.svg', number: '1K+', label: 'Schools' },
    { icon: '/Community2.svg', number: '4K+', label: 'Teachers' },
    { icon: '/Community3.svg', number: '100K+', label: 'Students' },
    { icon: '/Community4.svg', number: '25+', label: 'Distributors' },
];

const testimonials = [
    {
        id: 1,
        quote: "Implementing this school management system has been a game- changer.The platform's 50+ modules have helped us centralize every function improved our school’s efficiency beyond expectations.",
        name: "Kathy Sullivan",
        position: "CEO at Edwards"
    },
    {
        id: 2,
        quote: "What impressed us most is how user-friendly and customizable the system is. It adapts perfectly to our school’s unique needs and has significantly reduced our administrative burden.",
        name: "John Doe",
        position: "CTO at TechCorp"
    },
    {
        id: 3,
        quote: "From integration to training and support, the entire experience has been seamless. The platform is secure, scalable, and runs effortlessly on cloud — exactly what a modern school needs.",
        name: "Jane Smith",
        position: "Marketing Director"
    },
    {
        id: 4,
        quote: "The Academic Management module has simplified lesson planning and timetable scheduling. Teachers now spend more time teaching and less time on paperwork.",
        name: "Jane Smith",
        position: "Marketing Director"
    }, {
        id: 5,
        quote: "Managing fees, student records, and HR used to be a challenge. This system has automated everything and brought in complete transparency. We couldn't be happier!",
        name: "Jane Smith",
        position: "Marketing Director"
    }, {
        id: 6,
        quote: "As a teacher, I find the platform extremely helpful. Sharing assignments, tracking attendance, and accessing student data has never been easier. It makes teaching more efficient and organized.",
        name: "Jane Smith",
        position: "Marketing Director"
    }, {
        id: 7,
        quote: "The Exam Management module is excellent. From setting up exams to generating report cards, everything is automated, accurate, and time-saving. It's a blessing during board exam season.",
        name: "Jane Smith",
        position: "Marketing Director"
    },
    {
        id: 8,
        quote: "The HR and payroll modules are so well-designed. They’ve reduced our paperwork drastically and made staff management effortless. The leave and appraisal systems are especially impressive.",
        name: "Jane Smith",
        position: "Marketing Director"
    },
    {
        id: 9,
        quote: "As a parent, I love the mobile app! I can track my child’s attendance, exam results, homework, and even fees — all in real-time. It keeps me engaged and informed.",
        name: "Jane Smith",
        position: "Marketing Director"
    },
    {
        id: 10,
        quote: "For multi-campus management, this software is unbeatable. Centralized data access, role-based control, and detailed analytics have helped us manage multiple schools with ease.",
        name: "Jane Smith",
        position: "Marketing Director"
    },
    {
        id: 11,
        quote: "The Library Management module has helped us digitize our entire inventory. Issuing and returning books, tracking overdue items — it’s all quick and hassle-free now.",
        name: "Jane Smith",
        position: "Marketing Director"
    },
    {
        id: 12,
        quote: "With the transport and GPS tracking features, we ensure student safety while optimizing our routes. Parents are happy, and we’ve seen a significant reduction in delays.",
        name: "Jane Smith",
        position: "Marketing Director"
    }
];


const Community = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440, // Large desktop
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1200, // Standard desktop
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900, // Small desktop/tablet landscape
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 600, // Tablet portrait
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },
            {
                breakpoint: 400, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: true // Adapts to content width
                }
            }
        ]
    };


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
                            gap: { xs: .2, sm: 1 },
                            justifyContent: "center",
                        }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: "white",
                                color: "#3A7E76",
                                mb: 1,
                                width: { xs: 20, sm: 40, md: 50 },   // Responsive Avatar size
                                height: { xs: 20, sm: 40, md: 50 },
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
                                    fontSize: { xs: "12px", sm: "18px", md: "20px", lg: "22px" },
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
                <Typography sx={{ fontWeight: 700, mb: 5, color: "#0E2A46", fontWeight: 700, fontSize: { xs: "35px", sm: "45px" }, lineHeight: { xs: "45px", sm: "58px" } }}>
                    Creating A Community Of <br /> Life Long Learners.
                </Typography>

                <Box sx={{ px: { xs: 0, md: 12 }, py: 5, }}>
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <Box key={testimonial.id} sx={{ px: 2 }}>
                                <Card sx={{
                                    borderRadius: "15px",
                                    border: "1px solid black",
                                    p: 2,
                                    minHeight: "330px",

                                    maxWidth: { xs: "250px", sm: "300px" },

                                    textAlign: "left",
                                    position: "relative",
                                    mx: 'auto',
                                    background: "transparent",
                                    overflow: 'visible'
                                }}>
                                    <Box
                                        component="img"
                                        src="./CommunityQuote.svg"
                                        alt="Profile"
                                        sx={{
                                            position: "absolute",
                                            top: -10,
                                            left: 5,
                                            width: 50,
                                            height: 50,
                                            borderRadius: "50%",
                                            zIndex: 100
                                        }}
                                    />
                                    <CardContent>
                                        <Typography sx={{ mb: 2, color: "#333931", fontWeight: 400 }}>
                                            {testimonial.quote}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 700, color: "#0E2A46", fontSize: "20px", mb: 1 }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography sx={{ color: "#04857A", fontWeight: 400 }}>
                                            {testimonial.position}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box >
        </Box >
    )
};

export default Community;
