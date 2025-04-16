import React from 'react'

import SectionHeader from '../components/SectionHeader'
import AboutUs from '../components/Home/AboutUs'
import Community from '../components/community/Community'

const About = () => {
    return (

        <>
            <SectionHeader title="ABOUT US">
                Home <span style={{ color: '#F15A29' }}> // </span> About Us
            </SectionHeader>
            <AboutUs />
            <Community />
        </>


        <div>
            About 16/04/25
        </div>

        <HomeThird />


    )
}

export default About
