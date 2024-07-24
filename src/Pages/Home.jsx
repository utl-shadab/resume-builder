import React from 'react'

import Header from '../components/Header/Header'
import Builder from '../components/Builder/Builder'
import Powerfull from '../components/Powerfull/Powerfull'
import HowWeWork from '../components/How/HowWeWork'
import PricingComponent from '../components/Pricing/PricingComponent'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Builder />
      <Powerfull />
      <HowWeWork/>
      <PricingComponent/>
      <Footer isGeneral={false}/>
    </div>
  )
}

export default Home
