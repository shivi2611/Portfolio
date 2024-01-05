import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Banner.css';

function Banner() {
    // banner contains image, text and introductory paragraph 
    // use grids from bootstrap
    //<img src="src\assets\images\header-img.svg" alt="Header Img"/>
  return (
    <div className="banner" id="Home">
    <Container>
      <Row>
        <Col xs={12} md={6} xl={7} className="flex-container"> 
        <div className="banner-text">
        <span className='welcome-message'> Welcome to my Portfolio</span>
        <h1 className="banner-heading">Hi, I am an idiot! </h1>
        <p className="banner-about"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
        </div>
        </Col> 
        <Col xs={12} md={6} xl={5}>
        <img className="banner-img" src="src\assets\images\header-img.png" alt="Header Img"/>
        
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Banner;