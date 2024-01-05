import React from 'react'
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'

function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [state, handleSubmit] = useForm("mrgngobk");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
};

  return (
    <div id="Connect"> 
      <div className='flex-container'>
      <div className="contact-grid">
      <img className="contact-img" src="src\assets\images\contact-img.png" alt="contact" />
      <div className="contact-form">
      <h2 className='contact-text'>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
      <Row>
      <Col size={12} sm={6} className="px-1">
        <input className="form-input" name="FirstName" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
      </Col>
      <Col size={12} sm={6} className="px-1">
        <input className="form-input"name="LastName" type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
      </Col>
      <Col size={12} sm={6} className="px-1">
        <input className="form-input" name="email" type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
      </Col>
      <Col size={12} sm={6} className="px-1">
        <input className="form-input"name="telephone" type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
      </Col> 
      <Col size={12} className="px-1">
      <button className="submit-btn" type="submit" disabled={state.submitting}><span>Submit</span></button>
      </Col>
      </Row>
      </form>
      </div>
      </div> 
      </div>
    </div>

  )
};

export default Contact;
/*<div className='contact' id="connect">
<div className="flex-container">
<Container>
<Row className="align-items-center">
      <Col xs={12} md={6} xl={7}>
        <img className="contact-img" src="src\assets\images\contact-img.png" alt="contact" />
      </Col>
      <Col size={12} md={6}>
      <h2>Get In Touch</h2>
     
      </Col>
</Row>
</Container>
</div>
</div>*/