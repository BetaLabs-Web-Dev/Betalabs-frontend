import React from 'react'
import Hero from '../../components/Hero/Hero';
import MeetTheTeam from '../../components/MeetTheTeam/MeetTheTeam';
import Projects from '../../components/Projects/Projects';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import About from '../../components/About/About';


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MeetTheTeam />
      <Projects />
      <GetInTouch />
    </div>
  )
}

export default Home