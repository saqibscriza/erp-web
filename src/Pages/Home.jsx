import { Padding } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import Community from '../components/community/Community'
import GetInTouch from '../components/getInTouch/GetInTouch'
import HomeFirst from '../components/Home/HomeFirst'
import HomeSecond from '../components/Home/HomeSecond'
import HomeThird from '../components/Home/HomeThird'
import { Route, Routes } from 'react-router-dom'
import FeatureLayout from './features/FeatureLayout'
import AcademicsManagement from './features/AcademicsManagement'
import StudentManagement from './features/StudentManagement'
import TransportationManagement from './features/TransportationManagement'
import ExamManagement from './features/ExamManagement'
import HRManagement from './features/HRManagement'

const Home = () => {
    return (
        <Box sx={{ height: "100%", alignContent: "center", mt: 10 }}>
            <HomeFirst />
            <HomeSecond />
            <Routes>
                <Route element={<FeatureLayout />}>
                    <Route path="academics" element={<AcademicsManagement />} />
                    <Route path="student" element={<StudentManagement />} />
                    <Route path="transportation" element={<TransportationManagement />} />
                    <Route path="exam" element={<ExamManagement />} />
                    <Route path="hr" element={<HRManagement />} />
                </Route>
            </Routes>
            <HomeThird />
            <Community />
            <GetInTouch />
        </Box>
    )
}

export default Home
