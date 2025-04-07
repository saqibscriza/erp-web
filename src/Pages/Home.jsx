import { Padding } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import Community from '../components/community/Community'
import GetInTouch from '../components/getInTouch/GetInTouch'

const Home = () => {
    return (
        <Box sx={{ height: "100%", alignContent: "center", mt: 10 }}>
            <Community />
            <GetInTouch />
        </Box>
    )
}

export default Home
