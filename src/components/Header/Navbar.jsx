import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Container, NavbarBrand, Nav, NavItem, Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import logo from '../../images/werkfeed-logo.png';
const CustomNavbar = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePageOrCompanyPage = location.pathname === '/' || location.pathname === '/company';
   
    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = window.innerHeight * 0.05;
            setIsScrolled(scrollPosition > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
    <Navbar id="nav_top" expand="lg" fixed="top" className={`${isHomePageOrCompanyPage ? 'transparent-navbar' : 'seagreen-navbar'} ${isScrolled ? 'scrolled' : ''}`}>
                <Container  className="d-flex  justify-content-between  align-items-center">
                    <NavbarBrand>
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </NavbarBrand>
                    <div className="d-flex align-items-center justify-content-center gap-4 d-lg-none">
                        <a href="#login" className="custom-login-for-mobile">Login</a>
                        <i className="ri-menu-line text-white" onClick={toggleOffcanvas} aria-controls="offcanvasNavbar"></i>
                    </div>
                    <Nav className="d-none gap-4 d-lg-flex align-items-center">
                    <NavItem className="nav-link-animated">
                            <NavLink className='text-white' to="/" activeClassName="active-link">Home</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-animated">
                            <NavLink className='text-white' to="/about-us" activeClassName="active-link">About Us</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-animated">
                            <NavLink className='text-white' to="/pricing" activeClassName="active-link">Pricing</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-animated">
                            <NavLink className='text-white' to="/blog" activeClassName="active-link"> Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                        <Button onClick={() => navigate('/login')} className="mx-3 px-5 work-with-us-button">Login</Button>

                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>

            <Offcanvas direction="end" isOpen={isOffcanvasOpen} toggle={toggleOffcanvas} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <OffcanvasHeader toggle={toggleOffcanvas}>
                    <h5 id="offcanvasNavbarLabel">Menu</h5>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Nav vertical>
                        <NavItem className="nav-link-animated">
                            <NavLink className='text-black' href="#services">Services</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-animated">
                            <NavLink className='text-black' href="#work">Work</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-animated ">
                            <NavLink className='text-black' href="#company">Company</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-animated ">
                            <NavLink className='text-black' href="#blog">Blog</NavLink>
                        </NavItem>
                    </Nav>
                    <div className="footer d-flex justify-content-around">
                        <i className="ri-instagram-line"></i>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-twitter-line"></i>
                        <i className="ri-youtube-line"></i>
                        <i className="ri-linkedin-line"></i>
                        <i className="ri-pinterest-line"></i>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}

export default CustomNavbar   
