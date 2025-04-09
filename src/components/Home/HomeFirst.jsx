import { Box, Button, Container, Grid, TextField, Typography, Paper, IconButton, FormControl, OutlinedInput, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const HomeFirst = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <Container sx={{ bgcolor: '#f4f0f8', py: { xs: 12, sm: 10 } }}>
                <Grid container spacing={4}>

                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: "#704FE6", fontSize: "17px", fontWeight: 400 }}>WELCOME EDU2ALL SCHOOL ERP</Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '32px', md: '48px' },
                                fontWeight: 700,
                                lineHeight: { xs: '35px', md: '55px' },
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
                                mb: 3,

                            }}

                        >
                            All-in-one <b>school management software</b> with <b>20+ modules</b> to automate
                            administration, enhance learning, and improve efficiency for educational institutions.
                        </Typography>


                        <Button
                            variant="contained"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: '#3D7D75', // Green part
                                borderRadius: '50px',
                                px: 3,
                                py: 1.5,
                                textTransform: 'none',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#346B65',
                                },
                                width: { xs: '100%', md: 'auto' },
                            }}
                        >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                Book A Free Demo
                            </Typography>

                            <Box
                                sx={{
                                    backgroundColor: '#E38A4A',  // Orange part
                                    borderRadius: '50%',
                                    width: 50,
                                    height: 50,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    ml: 2,
                                }}
                            >
                                <ArrowForwardIcon sx={{ color: '#fff' }} />
                            </Box>
                        </Button>



                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box p={4} sx={{ backgroundColor: '#0D1B2A', color: 'white', borderRadius: 2 }}>
                            <Typography variant="subtitle1" color="#E38C53" fontWeight={600}>
                                GET IN TOUCH
                            </Typography>

                            <Typography variant="h4" fontWeight={700} mt={1} mb={3}>
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
                                        mt: 3,
                                        backgroundColor: '#E38C53',
                                        color: 'white',
                                        borderRadius: 0,
                                        '&:hover': { backgroundColor: '#d07c46' },
                                    }}
                                >
                                    SUBMIT NOW
                                </Button>
                            </form>
                        </Box>
                    </Grid>

                </Grid>
            </Container>






        </>

    );
};

export default HomeFirst;

