import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Container, NavbarBrand, Nav, NavItem, Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from '../../images/werkfeed-logo.png';

const CustomNavbar = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePageOrCompanyPage = location.pathname === '/' || location.pathname === '/company';

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
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

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, [location]);
    return (
        <>
            <Navbar id="nav_top" expand="lg" fixed="top" className={`${isHomePageOrCompanyPage ? 'transparent-navbar' : 'seagreen-navbar'} ${isScrolled ? 'scrolled' : ''}`}>
                <Container className="d-flex justify-content-between align-items-center">
                    <NavbarBrand>
                        <Link to="/"><img src={logo} alt="Logo" className='animated-logo'/></Link>
                    </NavbarBrand>
                    <div className="d-flex align-items-center justify-content-center gap-4 d-lg-none">
                        <Button onClick={() => navigate('/login')} className="mx-3 px-5 work-with-us-button d-none">Login</Button>
                        <i className="ri-menu-line text-white" onClick={toggleOffcanvas} aria-controls="offcanvasNavbar"></i>
                    </div>
                    <Nav className="d-none gap-4 d-lg-flex align-items-center">
                        {location.pathname !== '/login' && location.pathname !== 'registration' && (
                            <>
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
                                    <NavLink className='text-white' to="/contact-us" activeClassName="active-link">Contact Us</NavLink>
                                </NavItem>
                            </>
                        )}
                        <NavItem>
                            {!isLoggedIn && location.pathname !== '/login' && location.pathname !== 'registration' ? (
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                    <DropdownToggle caret className="mx-3 px-5 work-with-us-button">
                                        Dashboard
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => navigate('/dashboard')}>Dashboard</DropdownItem>
                                        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <Button onClick={() => navigate('/login')} className="mx-3 px-5 work-with-us-button">Login</Button>
                            )}
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
                        {location.pathname !== '/login' && location.pathname !== '/registration' && (
                            <>
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
                                    <NavLink className='text-white' to="/contact-us" activeClassName="active-link">Contact Us</NavLink>
                                </NavItem>
                            </>
                        )}
                        <NavItem>
                            {!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/registration' ? (
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                    <DropdownToggle caret className="mx-3 px-5 work-with-us-button">
                                        Dashboard
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => navigate('/dashboard')}>Dashboard</DropdownItem>
                                        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <Button onClick={() => navigate('/login')} className="mx-3 px-5 work-with-us-button">Login</Button>
                            )}
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
    );
}

export default CustomNavbar;
