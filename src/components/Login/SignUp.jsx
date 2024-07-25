import React, { useState } from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback, Spinner, InputGroup, InputGroupText } from 'reactstrap';

import loginImage from '../../images/login.svg';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setEmailError] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [termsAccepted, setTermsAccepted] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();

        let valid = true;


        if (email.length < 3) {

            setEmailError('Email should be at least 3 characters');

            valid = false;

        } else {

            setEmailError('');

        }


        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

        if (!passwordRegex.test(password)) {

            setPasswordError('Password should be 8-16 characters, include at least one uppercase letter, one number, and one special character');

            valid = false;

        } else {

            setPasswordError('');

        }


        if (password !== confirmPassword) {

            setConfirmPasswordError('Passwords do not match');

            valid = false;

        } else {

            setConfirmPasswordError('');

        }


        if (!termsAccepted) {

            valid = false;

        }


        if (valid) {

            setLoading(true);
            setTimeout(() => {

                console.log('Form submitted');

                navigate('/');

            }, 2000);

        }

    };


    const handleCheckboxChange = (e) => {

        setTermsAccepted(e.target.checked);

    };


    const togglePasswordVisibility = () => {

        setShowPassword(!showPassword);

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

                                <Label for="email">Email</Label>

                                <Input

                                    type="email"

                                    name="email"

                                    id="email"

                                    placeholder="Enter Your Email"

                                    value={email}

                                    onChange={(e) => setEmail(e.target.value)}

                                    invalid={!!emailError}
                                />

                                <FormFeedback>{emailError}</FormFeedback>

                            </FormGroup>

                            <FormGroup>

                                <Label for="password">Password</Label>

                                <InputGroup>

                                    <Input

                                        type={showPassword ? 'text' : 'password'}

                                        name="password"

                                        id="password"

                                        placeholder="Password"

                                        value={password}

                                        onChange={(e) => setPassword(e.target.value)}

                                        invalid={!!passwordError}

                                    />

                                    <InputGroupText onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>

                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />

                                    </InputGroupText>

                                    <FormFeedback>{passwordError}</FormFeedback>

                                </InputGroup>

                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password</Label>

                                <InputGroup>

                                    <Input

                                        type={showPassword ? 'text' : 'password'}

                                        name="confirmPassword"

                                        id="confirmPassword"

                                        placeholder="Confirm Password"

                                        value={confirmPassword}

                                        onChange={(e) => setConfirmPassword(e.target.value)}

                                        invalid={!!confirmPasswordError}

                                    />

                                    <InputGroupText onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>

                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />

                                    </InputGroupText>

                                    <FormFeedback>{confirmPasswordError}</FormFeedback>

                                </InputGroup>

                                <small className="form-text text-muted">Password should be 8-16 characters, include at least one uppercase letter, one number, and one special character.</small>

                                <Link to="/forget" className="forgot-password">Forgot Password?</Link>
                            </FormGroup>

                            <FormGroup check className='mt-3'>

                                <Label check>

                                    <Input type="checkbox" required onChange={handleCheckboxChange} />{' '}

                                    By clicking <span className='text-danger'>Sign Up</span> you also agree to our <Link to="#">Terms and Conditions</Link> and <Link to="#">Privacy Policy</Link>.
                                </Label>
                            </FormGroup>
                            <Button className="btn-submit" block type="submit" disabled={loading}>

                                {loading ? <Spinner size="sm" /> : 'SUBMIT'}

                            </Button>

                        </Form>

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
