import React from 'react';
import './Skills.css';

function Skills() {
  return (
   <div className="flex-container" id="Skills">
   <div className='skill-container'>
    <h1 className='skill-heading'> Skills </h1>
    <div className='skill-list'>
    <div className="languages skill-box">
        <span className='skill'> C++ </span>
        <span className='skill'> Java </span>
        <span className='skill'> Python </span>
    </div>
    <div className="frontend skill-box">
        <span className='skill'> HTML </span>
        <span className='skill'> CSS </span>
        <span className='skill'> JavaScript </span>
        
        <span className='skill'> ReactJS </span>
        <span className='skill'> Redux </span>
    </div>
    <div className="backend skill-box">
        <span className='skill'> NodeJS </span>
        <span className='skill'> ExpressJS </span>
        <span className='skill'> API </span>
    </div>
    <div className="database skill-box">
        <span className='skill'> MySQL </span>
        <span className='skill'> MongoDB </span>
    </div>
    <div className="tools skill-box">
        <span className='skill'> Git </span>
        <span className='skill'> Github </span>
        <span className='skill'> VSCode </span>
        <span className='skill'> Postman </span>
    </div>
    <div className="others skill-box">
        <span className='skill'> AWS </span>
        <span className='skill'> Docker </span>
    </div>
   </div>
   </div>
   </div>
  )
}

export default Skills;