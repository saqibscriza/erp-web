import { Box, Grid, Typography, Divider, IconButton, Stack } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Email from "../../assets/images/headerEmail.svg.png"
import Phone from "../../assets/images/headerPhone.png"
import Location from "../../assets/images/headerLocation.svg.png"
import Fb from "../../assets/images/headerFb.png"

const Header = () => {
    return (
        <>


            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", bgcolor: "#04857A", flexDirection: { xs: "column", md: "row" }, gap: { xs: 1, md: 2 }, mb: 1 }}>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: 4, py: 1, flexDirection: { xs: "column", sm: "row" }, gap: { xs: 1, md: 2 } }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img src="./HeaderPhone.svg" alt="" />
                        <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }} variant="body2">+91 911 601 1899</Typography>
                    </Box>

                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img src="./HeaderEmail.svg" alt="" />
                        <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }} variant="body2">sales@scriza.in</Typography>
                    </Box>

                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img src="./HeaderPhone.svg" alt="" />
                        <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }} variant="body2">A-4-5, A Block, Sector 16, Noida</Typography>
                    </Box>

                </Box>


                <Box sx={{ backgroundColor: "#E88C51", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", gap: 2, p: 1.4 }}>
                    <img src="./HeaderFb.svg" alt="" />
                    <img src="./HeaderInsta.svg" alt="" />
                    <img src="./HeaderLinkedIn.svg" alt="" />
                    <img src="./HeaderYoutube.svg" alt="" />

                </Box>

            </Box>



        </>
    )
}

export default Header;


<Box sx={{ bgcolor: "#04857A", px: { xs: 2, sm: 3, md: 5 }, py: 1 }}>
    <Box
        sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 2, md: 0 },
        }}
    >
        {/* Contact Info */}
        <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.5, sm: 3 }}
            alignItems="center"
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={Phone} alt="Phone" />
                <Typography sx={{ color: "white" }} variant="body2">
                    +91 911 601 1899
                </Typography>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "block" }, borderColor: "rgba(255,255,255,0.3)" }} />

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={Email} alt="Email" />
                <Typography sx={{ color: "white" }} variant="body2">
                    sales@scriza.in
                </Typography>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "block" }, borderColor: "rgba(255,255,255,0.3)" }} />

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={Location} alt="Location" />
                <Typography sx={{ color: "white" }} variant="body2">
                    A-4-5, A Block, Sector 16, Noida
                </Typography>
            </Box>
        </Stack>

        {/* Social Icons */}
        <Box
            sx={{
                backgroundColor: "#E88C51",
                display: "flex",
                justifyContent: { xs: "flex-start", md: "center" },
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.5,
                borderRadius: "4px",
                mt: { xs: 1, md: 0 },
            }}
        >
            <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
                <YouTubeIcon />
            </IconButton>
        </Box>
    </Box>
</Box>