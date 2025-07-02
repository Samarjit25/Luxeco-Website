import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Qualities from '../Components/Qualities'
import Menu from '../Components/Menu'
import Gallery from '../Components/Gallery'  
import WhoAreWe from '../Components/WhoAreWe'
import Team from '../Components/Team'
import Reservation from '../Components/Reservation'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Gallery/>
      <Team/>
      <Menu/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
