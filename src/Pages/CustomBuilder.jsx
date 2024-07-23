import React from 'react'
import ResumeTemplate from '../components/ResumeTemp/ResumeTemplate'
import Footer from '../components/Footer/Footer'
const CustomBuilder = () => {
  return (
    <div>
      <ResumeTemplate />
      <Footer isGeneral={true} />
    </div>
  )
}

export default CustomBuilder
