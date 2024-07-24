import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import loginImage from '../../images/login.svg';
import Google from '../../images/google.svg';
import Apple from '../../images/apple.svg';
import Facebook from '../../images/facebook.svg';
import { Link } from 'react-router-dom';
const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let valid = true;
  
      if (!validateEmail(email)) {
        setEmailError('Invalid email address');
        valid = false;
      } else {
        setEmailError('');
      }
  
      if (password.length < 6 || password.length > 16) {
        setPasswordError('Password should be between 6-16 characters');
        valid = false;
      } else {
        setPasswordError('');
      }
  
      if (valid) {
        // Handle form submission
        console.log('Form submitted');
      }
    };
  return (
    <Container className="login-container">
      <Row className="justify-content-center align-items-center px-5">
          <h2 className="text-center">Welcome back! Please Sign In.</h2>
        <Col md="6" className="d-none d-md-block">
          <img src={loginImage} alt="Login Illustration" className="img-fluid" />
        </Col>
        <Col md="6">
            <div className="form-cont">

          <div className="social-login">
           <Button className="btn-apple btn-block mb-3">
             <img src={Apple} alt="Apple" />
             <span> Sign in with Apple</span>
           </Button>
           <Button className="btn-google btn-block mb-3">
             <img src={Google} alt="Google" />
             <span> Sign in with Google</span>
           </Button>
           <Button className="btn-facebook btn-block mb-3">
             <img src={Facebook} alt="Facebook" />
             <span> Sign in with Facebook</span>
           </Button>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                invalid={!!emailError}
              />
              <FormFeedback>{emailError}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                invalid={!!passwordError}
              />
              <FormFeedback>{passwordError}</FormFeedback>
              <small className="form-text text-muted">Password should be between 6-16 characters.</small>
              <Link to="/forget" className="forgot-password">Forgot Password?</Link>
            </FormGroup>
            <Button className="btn-submit" block type="submit">SUBMIT</Button>
          </Form>
          <p className="terms">
            By clicking <span className='text-danger'>Submit</span> you also agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
          <p className="signup">
            Need an account? <Link to="/sign-up">Sign up for free</Link>
          </p>
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginComponent
