import React from 'react'
import Navbar from '../components/Header/Navbar'
import { Container, Row, Col } from 'reactstrap';
import GroupImage from '../images/groupresume.png'
import CompanyContent from '../components/CompanyContent/CompanyContent'
import Testimonial from '../components/Testimonial/Testimonial'
import Solution from '../components/CompanyContent/Solution'
import Footer from '../components/Footer/Footer'
const Company = () => {
  return (
    <>
    <div className="hero">
      <Navbar />
      <Container>
        <Row>
          <Col lg={12}>
         <div className='hero-content'>
        <h1 className='hero-title'>We’re proud to have helped nearly 6 million people during their job search</h1>
        <p className='hero-subtitle'>We believe that the job search is hard enough, so we want to make resume writing easy. In 2024, <br /> we partnered with Indeed, the world’s #1 job site, to redesign our resume builder using data <br /> about how employers really read resumes.</p>
      
      </div>
      </Col>
      </Row>
      </Container>
      <div className="company-bottom">
        <Container fluid>
          <Row>
            <Col lg={6} className='p-0'>
              <div className="company-bottom-image-container">
                <img src={GroupImage} alt="Resumes" className="company-bottom-image" />
              </div>
            </Col>
            <Col lg={6} className='p-0'>
            <div className="company-bottom-info">
                <h2>Our resume builder is 100% free  to use</h2>
                <p>Werkfeed has no cost, no ads and no limitations. Access features that will help you get hired:</p>
                <ul>
                  <li><i className="fas fa-check-circle"></i> Build a professional resume backed by research with hundreds of employers.</li>
                  <li><i className="fas fa-check-circle"></i> Choose from smart resume templates that highlight your best qualities.</li>
                  <li><i className="fas fa-check-circle"></i> Print, download and share your resume instantly in flexible formats like PDF and .doc.</li>
                  <li><i className="fas fa-check-circle"></i> Share your resume with Indeed to easily apply to jobs.</li>
                  <li><i className="fas fa-check-circle"></i> Access professional resume examples formatted for specific jobs and industries.</li>
                  <li><i className="fas fa-check-circle"></i> Log in to your account to update your resume online.</li>
                  <li><i className="fas fa-check-circle"></i> Get free job search and career advice to help you build your resume and get the job.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
     <CompanyContent />
    <Testimonial />
    <Solution />  
    <Footer isGeneral={true}/>
      </>
  )
}

export default Company
