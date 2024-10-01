import React from 'react'
import '../assets/CSS/Skills.css';

const Skills = () => {
  return (
    <div>
    <section className="skills" id="skills">
  <h2 className="heading animate__animated animate__fadeInDown animate__infinite	infinite animate__slower	2s">My <span>Skills</span></h2>
  <div className="skills-row">
    <div className="skills-column">
      <h3 className="title">Frontend Skills </h3>

      <div className="skills-box">
        <div className="skills-content">
          <div className="progress">
            <h3>HTML <span>90%</span></h3>
            <div className="bar"><span></span></div>
          </div>

          <div className="progress">
            <h3>CSS <span>80%</span></h3>
            <div className="bar"><span></span></div>
          </div>

          <div className="progress">
            <h3>JavaScript <span>60%</span></h3>
            <div className="bar"><span></span></div>
          </div>

          <div className="progress">
            <h3>BootStrap <span>70%</span></h3>
            <div className="bar"><span></span></div>
          </div>

          <div className="progress">
            <h3>JQuery <span>50%</span></h3>
            <div className="bar"><span></span></div>
          </div>


          <div className="progress">
            <h3>React JS <span>65%</span></h3>
            <div className="bar"><span></span></div>
          </div>
        </div>
      </div>
    </div>


    <div className="skills-column">
      <h3 className="title">knowledgeable About</h3>

      <div className="skills-box">
        <div className="skills-content">
          <div className="progress">
            <h3>C <span>90%</span></h3>
            <div className="bar"><span></span></div>
          </div>

          <div className="progress">
            <h3>C++ <span>80%</span></h3>
            <div className="bar"><span></span></div>
          </div>

          <div className="progress">
            <h3>Java <span>70%</span></h3>
            <div className="bar"><span></span></div>
          </div>

          

        </div>
      </div>
    </div>
  </div>
 </section>
    </div>
  )
}

export default Skills