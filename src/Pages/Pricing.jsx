import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
import PricingComponent from '../components/Pricing/PricingComponent'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <PricingComponent margin="40px 0" />
        <Footer isGeneral={true}/>
    </div>
  )
}

export default Pricing
