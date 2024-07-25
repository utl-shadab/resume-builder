import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback, Spinner, InputGroup, InputGroupText } from 'reactstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loginImage from '../../images/login.svg';
import Google from '../../images/google.svg';
import Apple from '../../images/apple.svg';
import Facebook from '../../images/facebook.svg';
import { Link, useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,16}$/;
    return re.test(password);
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
  
    if (!validatePassword(password)) {
      setPasswordError('Password should be 6-16 characters and include at least one letter and one number');
      valid = false;
    } else {
      setPasswordError('');
    }
  
    if (valid) {
      setLoading(true);
      setTimeout(() => {
        if (email === 'admin@gmail.com' && password === 'Admin@1234') {
          console.log('Form submitted');
          navigate('/');
        } else {
          setEmailError('Invalid email or password');
          setPasswordError('Invalid email or password');
          setLoading(false);
        }
      }, 2000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center align-items-center px-5">
        <h2 className="text-center my-3">Welcome back! Please Sign In.</h2>
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
                <div className="input-group">
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (passwordError && validatePassword(e.target.value)) {
                          setPasswordError('');
                        }
                      }}
                      invalid={!!passwordError}
                    />
                    <InputGroupText onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </InputGroupText>
                    <FormFeedback>{passwordError}</FormFeedback>
                  </InputGroup>
                </div>
                <FormFeedback>{passwordError}</FormFeedback>
                <small className="form-text text-muted">Password should be 6-16 characters and include at least one letter and one number.</small>
              </FormGroup>
              <Link to="/forget" className="forgot-password">Forgot Password?</Link>
              <Button className="btn-submit" block type="submit" disabled={loading}>
                {loading ? <Spinner size="sm" /> : 'SUBMIT'}
              </Button>
            </Form>
            <p className="signup">
              Need an account? <Link to="/registration">Sign up for free</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;