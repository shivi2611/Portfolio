import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div>
        <div className='flex-container' id="Projects">
        <div className='project-container'>
        <h1 className='project-heading'> Projects </h1>
        <div className="project-list">
        <div className="project">
            <h3> ChatSphere </h3>
            <a className="project-banner" href="https://github.com/shivi2611"> <img src="src\assets\images\demo-img.png" alt="ChatSphere" /> </a>
        </div>
            <div className="project" id="p">
            <h3> Netflix Clone </h3>
            <a className="project-banner" href="https://github.com/shivi2611"> <img src="src\assets\images\demo-img.png" alt="ChatSphere" /> </a>
            </div>
            <div className="project">
            <h3> Translator App </h3>
            <a className="project-banner" href="https://github.com/shivi2611"> <img src="src\assets\images\demo-img.png" alt="ChatSphere" /> </a>
            </div>
            <div className="project">
            <h3> ECommerce </h3>
            <a className="project-banner" href="https://github.com/shivi2611"> <img src="src\assets\images\demo-img.png" alt="ChatSphere" /> </a>
        </div>
        <div className="project">
            <h3> BargainBuddy </h3>
            <a className="project-banner" href="https://github.com/shivi2611"> <img src="src\assets\images\demo-img.png" alt="ChatSphere" /> </a>
        </div>
        <div className="project">
            <h3> XYZ </h3>
            <a  className="project-banner" href="https://github.com/shivi2611"> <img src="src\assets\images\demo-img.png" alt="ChatSphere" /> </a>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Projects;