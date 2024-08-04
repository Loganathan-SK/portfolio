import { React, useState } from 'react';
import Education from './Education.jsx';
import Skills from './Skills.jsx';
import Certifications from './Certifications.jsx';
import Projects from './Projects.jsx';
import PersonalInfo from "./PersonalInfo.jsx";

export default function Main(){

  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'skills':
        return <Skills />;
      case 'personalInfo':
        return <PersonalInfo />;
      default:
        return <Education />;
    }
  };

    return (
        <div className="main">
            <button onClick={() => setActiveComponent('education')}><h2>Education</h2></button>
            <button onClick={() => setActiveComponent('projects')}><h2>Projects</h2></button>
            <button onClick={() => setActiveComponent('certifications')}><h2>Certification</h2></button>
            <button onClick={() => setActiveComponent('skills')}><h2>Skills</h2></button>
            <button onClick={() => setActiveComponent('personalInfo')}><h2>Personal Info</h2></button>
            <div id="border">{renderComponent()}</div>
        </div>
    );
}