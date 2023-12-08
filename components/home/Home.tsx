import React from 'react'
import Banner from './Banner'
import Feature from './Feature'
import About from './About'
import Mission from './Mission'
import Faqs from './Faqs'

const Home = () => {
  return (
    <>
        <section id="home">
          <Banner />
          <Feature />
          <About />
          <Mission />
          <Faqs />
        </section>
    </>
  )
}

export default Home