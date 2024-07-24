import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Forget from '../../images/forget.svg';

const ForgetComponent = () => {
  const navigate = useNavigate();

  return (
    <Container className="forget-container">
      <Row className="justify-content-center align-items-center px-5">
          <h2 className="forget-title text-center">Forgot Your Password?</h2>
          <p className="forget-description text-center">
            Enter your email address and click the SUBMIT button below, and we will send you an email to reset your password. If you do not receive an email from us within a few moments, please check your SPAM folder.
          </p>
          <Col md="7" className="d-none d-md-block" >
          <img src={Forget} alt="Forgot Password" className="forget-image" />
        </Col>
          <Col md="5">
          <div className="form-cont">
          <Form>
            <FormGroup>
              <Label for="email" className="sr-only">Email Address</Label>
              <Input type="email" name="email" id="email" placeholder="Email Address" className="forget-input" />
            </FormGroup>
            <Button color="danger" className="forget-submit">SUBMIT</Button>
          </Form>
          <div className="text-center">
          <Button color="link" className="forget-signin text-decoration-none"  onClick={() => navigate('/login')}>Sign In</Button>
          </div>
          </div>
        </Col>
      </Row>
     
    </Container>
  );
};

export default ForgetComponent;