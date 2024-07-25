import React from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import { Container, Row, Col } from 'reactstrap'
import Mission from '../images/mission.svg'
import Simplicity from '../images/simplicity.png'
import Smartphone from '../images/smartphone.png'
import Technology from '../images/technology-driven.png'
import Flexibility from '../images/flexiblity.png'
import Ownership from '../images/data-ownership.png'
import Goals from '../components/How/Goals'
import BreadcrumbComponent from '../components/Breadcrumb/BreadcrumbComponent'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <BreadcrumbComponent pageName="About Us" />
      <Container>
      <Row className="align-items-center text-center text-md-left">
              <Col md="6">
                <img src={Mission} alt="Mission" className=" mission-image" />
             </Col>
          <Col md="6">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              Our mission is to empower individuals to create professional and impactful resumes
              effortlessly. We believe in simplifying the job application process and helping
              job seekers present their best selves to potential employers. Join us on this
              journey to success!
            </p>
          </Col>
        </Row>
     
       
         
      </Container>
      <section className="our-values">
          <h2 className="text-center mission-title my-5">Our Values</h2>
        <Container>
         
          <Row className="text-center justify-content-evenly gap-3">
              <Col md="2">
              <div className='about-wrapper'>
              <img src={Simplicity} alt="Years Of Experience" className="icon" />
              <p>Simplicity</p>
              
              </div>
            </Col>
            <Col md="2">  
              <div className='about-wrapper'>
              <img src={Smartphone} alt="Projects Delivery" className="icon" />
             <p>Add To Call</p>
              </div>
            </Col>
            <Col md="2">
              <div className='about-wrapper'>
              <img src={Technology} alt="Efficiency" className="icon" />
              <p>Technology Driven</p>
              </div>
            </Col>
            <Col md="2">
              <div className='about-wrapper'>
              <img src={Flexibility} alt="Transparency" className="icon" />
              <p>Flexibility</p>
              </div>
            </Col>
            <Col md="2">
                <div className='about-wrapper'>
              <img src={Ownership} alt="Quality" className="icon" />
              <p>Data Ownership</p>
              </div>
              </Col>
          </Row>
          </Container>
        </section>
        <Goals />
      <Footer isGeneral={true}/>
    </div>
  )
}

export default AboutUs
