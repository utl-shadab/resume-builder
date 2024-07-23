import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import loginImage from '../../images/login.svg';
const LoginComponent = () => {
  return (
    <Container className="login-container">
      <Row className="justify-content-center align-items-center">
        <Col md="7" className="d-none d-md-block">
          <img src={loginImage} alt="Login Illustration" className="img-fluid" />
        </Col>
        <Col md="5">
          <h2 className="text-center">Welcome back! Please Sign In.</h2>
          <div className="social-login">
            <Button className="btn-apple" block>
              <i className="fab fa-apple"></i> Sign in with Apple
            </Button>
            <Button className="btn-google" block>
              <i className="fab fa-google"></i> Sign in with Google
            </Button>
            <Button className="btn-facebook" block>
              <i className="fab fa-facebook-f"></i> Sign in with Facebook
            </Button>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          <Form>
            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input type="email" name="email" id="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password" />
              <small className="form-text text-muted">Password should be between 6-16 characters.</small>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </FormGroup>
            <Button className="btn-submit" block>SUBMIT</Button>
          </Form>
          <p className="terms">
            By clicking 'Submit' you also agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
          <p className="signup">
            Need an account? <a href="#">Sign up for free</a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginComponent
