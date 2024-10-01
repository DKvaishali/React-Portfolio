import React from 'react'
import '../assets/CSS/Education.css'

const Education = () => {
  return (
    <div>
         <section class="eduction" id="eduction">
      <h2 class="heading animate__animated animate__fadeInDown animate__infinite animate__slower	2s">My <span>Journey</span></h2>

      <div class="education-row">
        <div class="education-column">
          <h3 class="title" >Eduction</h3>

          <div class="education-box">
            <div class="education-content">
              <div class="content">
                <h3>Bachlor Degree - SRTMUN University</h3>
                <div class="year"><i class='bx bxs-calendar'></i>2013 - 2016</div>
                <p>I earned My Bachlor Degree in Computer Science From M.S.Bideve College Of Engineering.</p>
              </div>
            </div>

            <div class="education-content">
              <div class="content">
                <h3>Diploma</h3>
                <div class="year"><i class='bx bxs-calendar'></i>2010 - 2013</div>
                <p>I Completed My Diploma in Computer Enginnering from VDF School of Polytechnic and Enginnering College</p>
              </div>
            </div>
            <div class="education-content">
              <div class="content">
                <h3>SSC</h3>
                <div class="year"><i class='bx bxs-calendar'></i>2000 - 2010</div>
                <p>My SSC education laid a strong foundation in various subjects, fostering my analytical and problem-solving skills. It also instilled in me a passion for continuous learning and a drive to excel in both academics and extracurricular activities.</p>
              </div>
            </div>
          </div>
        </div>



        <div class="education-column">
          <h3 class="title">Experience</h3>

          <div class="education-box">
            <div class="education-content">
              <div class="content">
                <h3>Full Stack Developer Intern - Technoworld </h3>
                <div class="year"> <i class='bx bxs-calendar'></i>April 2024 -  Sept 2024</div>
                <p>Created Technoworld Software website using HTML and CSS.<br/>
                  Created Analog Clock and Calculator using HTML, CSS, and Javascript.<br/>
                  Accomplish ABCD Audio Webpage, Animation.css page, Form Validation in Javascript and HTML,CSS.
                  </p>
              </div>
            </div>

            <div class="education-content">
              <div class="content">
                <h3>React JS Tainee - RAK Softech Pvt. Ltd.</h3>
                <div class="year"> <i class='bx bxs-calendar'></i>Feb 2024 - Present</div>
                <p>Worked on Job Portal website using React JS and Bootstrap.
                  In that React Hook is used.<br/>
                 Worked on Dr.Website using React JS and Bootstrap, CSS.
                 </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Education