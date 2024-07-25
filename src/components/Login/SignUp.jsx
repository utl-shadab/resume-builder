import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import loginImage from '../../images/login.svg';
import Google from '../../images/google.svg';
import Apple from '../../images/apple.svg';
import Facebook from '../../images/facebook.svg';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (username.length < 3) {
            setUsernameError('Username should be at least 3 characters');
            valid = false;
        } else {
            setUsernameError('');
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
                <h2 className="text-center my-3">Create your account</h2>
                <Col md="6" className="d-none d-md-block">
                    <img src={loginImage} alt="Login Illustration" className="img-fluid" />
                </Col>
                <Col md="6">
                    <div className="form-cont">

                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    invalid={!!usernameError}
                                />
                                <FormFeedback>{usernameError}</FormFeedback>
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
                        <FormGroup check className='mt-3'>
                            <Label check>
                                <Input type="checkbox" required />{' '}
                                By clicking <span className='text-danger'>Sign Up</span> you also agree to our <Link to="#">Terms and Conditions</Link> and <Link to="#">Privacy Policy</Link>.
                            </Label>
                        </FormGroup>
                        <p className="signup text-start text-underline">
                            Already have an account? <Link to="/login">Sign in</Link>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp
