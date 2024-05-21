import React from 'react'
import Education from './components/Education'
import SecondSection from './components/SecondSection'
import DataSection from './components/DataSection'
import OurLeaderShip from './components/OurLeaderShip'
import OurBlog from './components/OurBlog'

const Home = () => {
  return (
    <section>
        <Education/>
        <SecondSection/>
        <DataSection/>
        <OurLeaderShip/>
        <OurBlog/>
    </section>
  )
}

export default Home