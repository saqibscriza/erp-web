import { Box, Grid, Typography, Divider, IconButton } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Header = () => {
    return (
        <Box sx={{ backgroundColor: "#3A7E76", color: "white" }}>
            <Grid container spacing={20}>

                {/* Left Content */}
                <Grid item xs={12} md={10}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: 4, py: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <PhoneIcon />
                            <Typography variant="body2">+91 911 601 1899</Typography>
                        </Box>

                        <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <EmailIcon />
                            <Typography variant="body2">sales@scriza.in</Typography>
                        </Box>

                        <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <LocationOnIcon />
                            <Typography variant="body2">A-4-5, A Block, Sector 16, Noida</Typography>
                        </Box>

                    </Box>
                </Grid>

                {/* Right Social Icons */}
                <Grid item xs={12} md={2}>
                    <Box sx={{ backgroundColor: "#E88C51", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", gap: 1 }}>
                        <IconButton color="inherit"><FacebookIcon /></IconButton>
                        <IconButton color="inherit"><InstagramIcon /></IconButton>
                        <IconButton color="inherit"><LinkedInIcon /></IconButton>
                        <IconButton color="inherit"><YouTubeIcon /></IconButton>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Header;
