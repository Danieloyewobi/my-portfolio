// import React from 'react'

import AboutMe from "./Component/AboutMe"
import ClientTestimony from "./Component/ClientTestimony"
import ContactUs from "./Component/ContactUs"
import Footer from "./Component/Footer"
import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import ProjectsDone from "./Component/ProjectsDone"
import Resume from "./Component/Resume"
import WorkExperience from "./Component/WorkExperience"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <WorkExperience/>
      <Resume/>
      <ProjectsDone/>
      <ClientTestimony/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default Home