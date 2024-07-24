import React from 'react'
import Navbar from '../components/Header/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Mission from '../images/mission.svg'
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section className='breadcrumb-container'>
      <Container className='position-relative' >
            <Breadcrumb className='breadcrumb-center'>
            <BreadcrumbItem><Link to="/" className='bread-text'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem  className='text-white' active>About Us</BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </section>
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
      <Footer isGeneral={true}/>
    </div>
  )
}

export default AboutUs
