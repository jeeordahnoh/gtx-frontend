import React from 'react'
import Banner from './Banner'
import Feature from './Feature'
import About from './About'
import Mission from './Mission'
import Faqs from './Faqs'
import Team from './Team'

const Home = () => {
  return (
    <>
        <section id="home">
          <Banner />
          <Feature />
          <About />
          <Mission />
          <Team />
          <Faqs />
        </section>
    </>
  )
}

export default Home