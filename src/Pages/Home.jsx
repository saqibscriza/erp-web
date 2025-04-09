import { Padding } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import Community from '../components/community/Community'
import GetInTouch from '../components/getInTouch/GetInTouch'
import HomeFirst from '../components/Home/HomeFirst'
import HomeSecond from '../components/Home/HomeSecond'
import HomeThird from '../components/Home/HomeThird'
import { Outlet, Route, Routes } from 'react-router-dom'
import FeatureLayout from './features/FeatureLayout'
import AcademicsManagement from './features/AcademicsManagement'
import StudentManagement from './features/StudentManagement'
import TransportationManagement from './features/TransportationManagement'
import ExamManagement from './features/ExamManagement'
import HRManagement from './features/HRManagement'
import BlogSection from '../components/Home/BlogSection'

const Home = () => {
    return (
        <Box sx={{ height: "100%", alignContent: "center", mt: 10 }}>
            <HomeFirst />
            <HomeSecond />
            <FeatureLayout />

            <HomeThird />
            <BlogSection />
            <Community />
            <GetInTouch />
        </Box>
    )
}

export default Home
