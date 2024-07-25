import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
import PricingComponent from '../components/Pricing/PricingComponent'
import BreadcrumbComponent from '../components/Breadcrumb/BreadcrumbComponent'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <BreadcrumbComponent pageName="Pricing" />
        <PricingComponent margin="40px 0" />
        <Footer isGeneral={true}/>
    </div>
  )
}

export default Pricing
