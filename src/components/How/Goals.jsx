import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Create from '../../images/create.png';
import Maintain from '../../images/maintain.png';
import Share from '../../images/share.png';
import File from '../../images/file.png';
import Secure from '../../images/secure-data.png';

const Goals = () => {
  return (
    <Container className='my-5'>
        <h2 className='text-center mt-5 mb-5 mission-title'>Our Goals</h2>
          <Row>
            <Col xs="4">
             <div className="d-flex justify-content-between align-items-center px-3 py-3 background-color">
              <img src={Create} alt="Create" className="goal-image" />
               <p>Create a professional resume in minutes</p>
                </div>
            </Col>
            <Col xs="4">
            <div className="d-flex justify-content-between align-items-center px-3 py-3 background-color">
              <img src={Maintain} alt="Create" className="goal-image" />
               <p>Maintain a professional resume</p>
                </div>
            </Col>
            <Col xs="4">
            <div className="d-flex justify-content-between align-items-center px-3 py-3 background-color">
              <img src={Share} alt="Create" className="goal-image" />
               <p>Share your resume with the world</p>
                </div>
            </Col>
          </Row>
          <Row className='mt-3 mb-3 justify-content-center'>
            <Col xs="4">
             <div className="d-flex justify-content-between align-items-center px-3 py-3 background-color">
              <img src={File} alt="Create" className="goal-image" />
               <p>Save your resume to your computer</p>
                </div>
            </Col>
            <Col xs="4">
            <div className="d-flex justify-content-between align-items-center px-3 py-3 background-color">
              <img src={Secure} alt="Create" className="goal-image" />
               <p>Secure your resume with a password</p>
                </div>
            </Col>
          </Row>
    
    </Container>
  )
}

export default Goals
