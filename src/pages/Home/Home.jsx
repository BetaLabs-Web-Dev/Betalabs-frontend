import React from 'react'
import Hero from '../../components/Hero/Hero';
import MeetTheTeam from '../../components/MeetTheTeam/MeetTheTeam';
import Projects from '../../components/Carousel/Projects';
import GetInTouch from '../../components/GetInTouch/GetInTouch';


const Home = () => {
  return (
    <div>
      <Hero />
      <MeetTheTeam />
      <Projects />
      <GetInTouch />
    </div>
  )
}

export default Home