import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import contact from '../assets/gif.gif'
import { Container, Row, Col, Form,  Button } from 'reactstrap'
import BreadcrumbComponent from '../components/Breadcrumb/BreadcrumbComponent'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle form submission
      console.log('Form submitted', formData);
    }
  };
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
            <Form onSubmit={handleSubmit}>
              <div className="form-group custom-form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  className={`custom-input custom-class ${errors.name ? 'is-invalid' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="custom-label">Enter your Name</label>
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group custom-form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  className={`custom-input custom-class ${errors.email ? 'is-invalid' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="custom-label">Enter a valid email address</label>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-group custom-form-group">
                <select
                  name="subject"
                  id="subject"
                  className={`custom-input custom-class ${errors.subject ? 'is-invalid' : ''}`}
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option className='custom-option' value="" disabled hidden>Select a Subject</option>
                  <option value="item1">Issues</option>
                  <option value="item2">Complaints</option>
                  <option value="item3">Suggestions</option>
                </select>
                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </div>
              <div className="form-group custom-form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder=" "
                  className={`custom-input custom-class ${errors.message ? 'is-invalid' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message" className="custom-label">Enter your message</label>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
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
