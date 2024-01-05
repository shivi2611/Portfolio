import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { useState, useEffect } from 'react';

function NavBar() {
    const [scrolled, setScrolled]  = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    },[scrolled]);
  return (
    <Navbar expand="lg" className={`nav ${scrolled && "nav-scrolled"}`} >
      <Container className='nav-container'>
        <Navbar.Brand href="#Home">LOGO</Navbar.Brand>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home" className='navbar-link nav-link-centered'>Home</Nav.Link>
            <Nav.Link href="#About" className='navbar-link'>About</Nav.Link>
            <Nav.Link href="#Skills" className='navbar-link'>Skills</Nav.Link>
            <Nav.Link href="#Projects" className='navbar-link'>Projects</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/shivi-singh-a8156b216/" className='navbar-icon'><div className="icon-container"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z" fill="white"/>
<path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z" fill="white"/>
<path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z" fill="white"/>
</svg> </div>
</Nav.Link>
            <Nav.Link href="https://github.com/shivi2611" className='navbar-icon'><div className='icon-container'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div></Nav.Link>
            <a className="contact-btn" href="#Connect">Let's Connect </a>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;