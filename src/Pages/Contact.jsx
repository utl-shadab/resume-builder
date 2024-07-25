import React from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import contact from '../assets/gif.gif'
import { Container, Row, Col, Form,  Button } from 'reactstrap'
import BreadcrumbComponent from '../components/Breadcrumb/BreadcrumbComponent'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <BreadcrumbComponent pageName="Contact Us" />
      <section className='contact-section'>
    <Container className="text-center upper-contact">
      <h1 className="mb-3">Get in Touch with Us</h1>
      <p className="mb-5">We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
    </Container>
        <div className="contact-overlay">
      <Container className="contact-container">
        <Row className='align-items-center'>
          <Col md="6" className="contact-info">
            <img src={contact} alt="contact" className='contact-img' />
          </Col>
          <Col md="6" className="contact-form-wrapper">
          <div className="contact-form">
            <h3>CONTACT US</h3>
            <Form>
            <div className="form-group custom-form-group">
              <input type="text" name="name" id="name" placeholder=" " className="custom-input custom-class" />
              <label htmlFor="name" className="custom-label">Enter your Name</label>
            </div>
            <div className="form-group custom-form-group">
              <input type="email" name="email" id="email" placeholder=" " className="custom-input custom-class" />
              <label htmlFor="email" className="custom-label">Enter a valid email address</label>
            </div>
            <div className="form-group custom-form-group">
              <select name="subject" id="subject" className="custom-input custom-class">
                <option className='custom-option' value="" disabled selected hidden>Select a Subject</option>
                <option value="item1">Issues</option>
                <option value="item2">Complaints</option>
                <option value="item3">Suggestions</option>
               
              </select>
              {/* <label htmlFor="subject" className="custom-label">Select a Subject</label> */}
            </div>
            <div className="form-group custom-form-group">
              <textarea name="message" id="message" placeholder=" " className="custom-input custom-class"></textarea>
              <label htmlFor="message" className="custom-label">Enter your message</label>
            </div>
              <Button type="submit" className="work-with-us-button d-block">SUBMIT</Button>
            </Form>
          </div>
        </Col>
        </Row>
      </Container>
        </div>
      </section>
      <Footer isGeneral={true}/>
    </div>
  )
}

export default Contact
