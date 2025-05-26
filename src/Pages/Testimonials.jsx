import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GetInTouch from '../components/getInTouch/GetInTouch';
import MenuPage from '../karanComponent/MenuPageKa';

const testimonials = [
    {
        name: 'Vivaan Sharma',
        role: 'CEO at House of Ramen',
        avatar: '/avatars/vivaan.jpg',
        text: `"Implementing this school management system has been a game-changer. The platform's 50+ modules have helped us centralize every function — from admissions to HR — and improved our school’s efficiency beyond expectations."`,
    },
    {
        name: 'Arjun Reddy',
        role: 'CEO at ordian It',
        avatar: '/avatars/arjun.jpg',
        text: `"What impressed us most is how user-friendly and customizable the system is. It adapts perfectly to our school’s unique needs and has significantly reduced our administrative burden."`,
    },
    {
        name: 'Rohan Kapoor',
        role: 'CEO at Edwards',
        avatar: '/avatars/rohan.jpg',
        text: `"From integration to training and support, the entire experience has been seamless. The platform is secure, scalable, and runs effortlessly on cloud — exactly what a modern school needs."`,
    },
    {
        name: 'Aditya Iyer',
        role: 'CEO at House of Ramen',
        avatar: '/avatars/aditya.jpg',
        text: `"The Academic Management module has simplified lesson planning and timetable scheduling. Teachers now spend more time teaching and less time on paperwork."`,
    },
    {
        name: 'Sai Prasad',
        role: 'CEO at ordian It',
        avatar: '/avatars/sai.jpg',
        text: `"Managing fees, student records, and HR used to be a challenge. This system has automated everything and brought in complete transparency. We couldn't be happier!"`,
    },
    {
        name: 'Karan Malhotra',
        role: 'CEO at Edwards',
        avatar: '/avatars/karan.jpg',
        text: `"As a teacher, I find the platform extremely helpful. Sharing assignments, tracking attendance, and accessing student data has never been easier. It makes teaching more efficient and organized."`,
    },
    {
        name: 'Aditya Iyer',
        role: 'CEO at House of Ramen',
        avatar: '/avatars/aditya.jpg',
        text: `"The Exam Management module is excellent. From setting up exams to generating report cards, everything is automated, accurate, and time-saving. It's a blessing during board exam season."`,
    },
    {
        name: 'Sai Prasad',
        role: 'CEO at ordian It',
        avatar: '/avatars/sai.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Karan Malhotra',
        role: 'CEO at Edwards',
        avatar: '/avatars/karan.jpg',
        text: `"The HR and payroll modules are so well-designed. They’ve reduced our paperwork drastically and made staff management effortless. The leave and appraisal systems are especially impressive."`,
    },
    {
        name: 'Aditya Iyer',
        role: 'CEO at House of Ramen',
        avatar: '/avatars/aditya.jpg',
        text: `"As a parent, I love the mobile app! I can track my child’s attendance, exam results, homework, and even fees — all in real-time. It keeps me engaged and informed."`,
    },
    {
        name: 'Sai Prasad',
        role: 'CEO at ordian It',
        avatar: '/avatars/sai.jpg',
        text: '“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”',
    },
    {
        name: 'Karan Malhotra',
        role: 'CEO at Edwards',
        avatar: '/avatars/karan.jpg',
        text: `"For multi-campus management, this software is unbeatable. Centralized data access, role-based control, and detailed analytics have helped us manage multiple schools with ease."`,
    },
    {
        name: 'Karan Malhotra',
        role: 'CEO at Edwards',
        avatar: '/avatars/karan.jpg',
        text: `"The Library Management module has helped us digitize our entire inventory. Issuing and returning books, tracking overdue items — it’s all quick and hassle-free now."`,
    },
    {
        name: 'Karan Malhotra',
        role: 'CEO at Edwards',
        avatar: '/avatars/karan.jpg',
        text: `"With the transport and GPS tracking features, we ensure student safety while optimizing our routes. Parents are happy, and we’ve seen a significant reduction in delays."
`,
    },
];
const Testimonials = () => {
    return (
        <>
            <MenuPage title="TESTIMONIALS" subtitle="Home" />
            {/* <SectionHeader title="TESTIMONIALS">
                Home <span style={{ color: '#F15A29' }}> // </span> Testimonials
            </SectionHeader> */}
            <Box sx={{ px: { xs: 8, sm: 5, lg: 20 }, py: 4 }}>
                <Grid container spacing={3} >
                    {testimonials.map((t, idx) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                            <Card
                                variant="outlined"
                                sx={{
                                    borderStyle: 'dashed',
                                    borderColor: '#f97316',
                                    borderWidth: '2px',
                                    borderRadius: 2,
                                    height: '100%',
                                }}
                            >
                                <CardContent>
                                    <Box display="flex" mb={1}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <StarIcon key={i} fontSize="small" sx={{ color: '#f97316' }} />
                                        ))}
                                    </Box>
                                    <Typography gutterBottom sx={{ fontSize: "17px", fontWeight: 400, color: "#333931" }}>
                                        {t.text}
                                    </Typography>
                                    <Box display="flex" alignItems="center" mt={2}>
                                        <Avatar src={t.avatar} alt={name} sx={{ mr: 2 }} />
                                        <Box>
                                            <Typography sx={{ color: "#0E2A46", fontSize: "17px", fontWeight: 700 }}>
                                                {t.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "13px", fontWeight: 400, color: '#704FE6' }}>
                                                {t.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <GetInTouch />

        </>
    )
}

export default Testimonials
