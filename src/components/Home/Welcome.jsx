import { Box, Button, Container, Grid, TextField, Typography, Paper, IconButton, FormControl, OutlinedInput, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DemoModalForm from '../DemoModalForm';
import { useState } from 'react';



const Welcome = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [openDemoDialog, setOpenDemoDialog] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <Container
                maxWidth={false}
                sx={{
                    position: 'relative',
                    px: { xs: 2, sm: 10, md: 20 },
                    py: { xs: 12, sm: 4 },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(/HomeFirstBG.svg)', // Update with your image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.1, // Adjust opacity as needed (0.1 = 10% visible)
                        zIndex: 0,
                        mt: 1
                    }
                }}>
                <Grid container spacing={{ xs: 0, lg: 4 }}>
                    <Grid size={{ xs: 12, lg: 7 }} sx={{ py: 8 }}>
                        <Typography sx={{ color: "#704FE6", fontSize: { xs: "10px", sm: "17px" }, fontWeight: 400, mb: 1.5 }}>WELCOME EDU2ALL SCHOOL ERP</Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '32px', md: '49px' },
                                fontWeight: 700,
                                lineHeight: { xs: '35px', md: '61px' },
                                color: '#17254E',
                                mb: 2,
                            }}
                        >
                            20+ Powerful Modules For Seamless School Management
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '14px', md: '16px' },
                                fontWeight: 400,
                                lineHeight: { xs: '22px', md: '28px' },
                                color: '#333931',
                                mb: 6,
                            }}
                        >
                            All-in-one <b style={{ color: "", fontSize: "15px", fontWeight: 700 }}>school management software</b> with <b>20+ modules</b> to automate
                            administration, enhance learning, and improve efficiency for educational institutions.
                        </Typography>


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 4,
                            }}
                        >
                            {/* Left - Button */}
                            <Box sx={{ flexShrink: 0 }}>
                                <Button
                                    variant="contained"
                                    onClick={() => setOpenDemoDialog(true)}
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        backgroundColor: '#04857A',
                                        borderRadius: '50px',
                                        pr: 10,
                                        pl: 4,
                                        py: 0.5,
                                        textTransform: 'none',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#346B65',
                                        },
                                        width: { xs: '100%', md: 'auto' },
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 400, fontSize: '15px', lineHeight: '58px' }}
                                    >
                                        Book A Free Demo
                                    </Typography>

                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            right: 0,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            backgroundColor: '#E38A4A',
                                            borderRadius: '50%',
                                            width: 65,
                                            height: 65,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            ml: 2,
                                        }}
                                    >
                                        <ArrowForwardIcon sx={{ color: '#fff' }} />
                                    </Box>
                                </Button>
                            </Box>

                            {/* Right - Images */}
                            <Box>
                                <Container sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 2 }}>
                                    <Box
                                        component="img"
                                        src="./HomeFirstLine.svg" // update path
                                        alt="Line Design"
                                        width={{ xs: "30%", sm: "30%", md: "40%" }}
                                    />
                                    <Box
                                        component="img"
                                        src="./HomeFirst20+Modules.svg" // update path
                                        alt="Modules Design"
                                        width={{ xs: "50%", sm: "80%", md: "60%" }}
                                    />
                                </Container>
                            </Box>
                        </Box>



                    </Grid>

                    <Grid size={{ xs: 12, lg: 5 }} sx={{ py: 4 }}>
                        <Box p={4} sx={{ backgroundColor: '#0D1B2A', color: 'white', borderRadius: 2 }}>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <img src="./HomeFirstGetInTouch.svg" alt="" width={30} height={30} />
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#F28F53", fontSize: "18px" }}>
                                    GET IN TOUCH
                                </Typography>
                            </Box>
                            <Typography sx={{ mb: 3, mt: 1, fontweight: 700, fontSize: { xs: "30px", sm: "40px" } }}>
                                Book A Free Demo
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <OutlinedInput id="name" type="text" {...register("name", { required: 'This Field is required', validate: { startsWithCapital: (value) => /^[A-Z]/.test(value) || 'Name must start with an uppercase letter', minLength: (value) => value.length >= 4 || 'Minimum Length is 4', pattern: (value) => /^[A-Z][a-zA-Z\s]+$/.test(value) || 'Name must contain only letters, and spaces', } })} placeholder="Enter Name" fullWidth error={Boolean(errors.name)} sx={{ backgroundColor: 'white', mb: 1 }} />

                                <OutlinedInput id="email" type="text" {...register("email", { required: 'This Field is required', validate: { pattern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Not a valid email format' } })} placeholder="Enter Email" fullWidth error={Boolean(errors.email)} sx={{ backgroundColor: 'white', mb: 1 }} />


                                <OutlinedInput id="contactNo" type="text" {...register("contactNo", { required: 'This field is required', validate: { minLength: (value) => value.length <= 10 || 'Contact number must not be more than 10 digits', maxLength: (value) => value.length === 10 || 'Contact number must be exactly 10 digits', pattern: (value) => /^[6-9]\d{9}$/.test(value) || 'Contact number must contain only digits. Any characters or special characters are not allowed', } })} placeholder="Enter Contact No" fullWidth error={Boolean(errors.contactNo)} sx={{ backgroundColor: 'white', mb: 1 }} />

                                <OutlinedInput id="schoolName" type="text" {...register("schoolName", { required: 'This Field is required', validate: { startsWithCapital: (value) => /^[A-Z]/.test(value) || 'Name must start with an uppercase letter', minLength: (value) => value.length >= 4 || 'Minimum Length is 4', pattern: (value) => /^[A-Z][a-zA-Z\s]+$/.test(value) || 'Name must contain only letters, and spaces', } })} placeholder="Enter School Name" fullWidth error={Boolean(errors.schoolName)} sx={{ backgroundColor: 'white', mb: 1 }} />

                                <Select sx={{ backgroundColor: 'white', mb: 1 }} {...register("role", { required: 'This Field is required' })}
                                    fullWidth displayEmpty error={Boolean(errors.role)}
                                >
                                    <MenuItem value='' disabled>Select Role</MenuItem>
                                    <MenuItem value={true}>Teacher</MenuItem>
                                    <MenuItem value={false}>Student</MenuItem>
                                </Select>
                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        mt: 2,
                                        py: 1,
                                        backgroundColor: '#E38C53',
                                        color: 'white',
                                        borderRadius: 0,
                                        '&:hover': { backgroundColor: '#d07c46' },
                                        maxWidth: "150px"
                                    }}
                                >
                                    SUBMIT NOW
                                </Button>
                            </form>
                        </Box>
                    </Grid>

                </Grid>
                <DemoModalForm open={openDemoDialog} onClose={() => setOpenDemoDialog(false)} />
            </Container >
        </>

    );
};

export default Welcome;

