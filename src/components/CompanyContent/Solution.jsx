import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
// import './Solution.css';
import { useNavigate } from 'react-router-dom';
import video from '../../images/video.mp4'
import Template from '../../images/template.avif'
const Solution = () => {
    const navigate = useNavigate(); 

    const handleNavigate = () => {
      navigate('/builder'); 
    };
  return (
    <Container className="solution-container text-center">
      <h2 className="solution-title">Our job search solutions</h2>
      <Row className="justify-content-center">
        <Col md="6" className="mb-3">
            <div className='solution-video-container'>
          <video className="solution-video"  autoPlay muted loop >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="center-button" onClick={handleNavigate}>Customize Your Resume</button>
            </div>
        </Col>
        <Col md="6" className="mb-3">
        <div className="resume-com-card">
            <img src={Template} alt="Illustration" className="resume-com-image" />
            <h3 className="resume-com-title">Build your resume in 15 minutes</h3>
            <p className="resume-com-description">
              Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for.
            </p>
            <Button color="primary" className="resume-com-button" onClick={handleNavigate}>
              Create My Resume
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Solution;