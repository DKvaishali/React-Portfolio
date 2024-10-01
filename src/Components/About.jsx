import React from 'react';
import profile from '../assets/images/profiler.jpg';
import '../assets/CSS/About.css';
import resume from '../assets/PDF/Vaishali Kawale Resume-9545756878.pdf';

const About = () => {
  return (
    <section className="about
    d-flex justify-center item-center " id="about">
      <h2 className="heading animate__animated animate__fadeInDown animate__infinite animate__slower 2s">
        About <span>Me</span>
      </h2>
      <div className="about-img">
        <img src={profile} alt="profile" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content text-center">
        <h3 className='fs-[20.6rem]'>Frontend Developer</h3>
        <p className="animate__animated animate__fadeInUp animate__infinite infinite animate__slower 2s
        fs-[1.6rem] "
       
        >
          My journey in web development began with a fascination for technology and a desire to bring ideas to life on the web. Over the years, I've honed my skills through various projects, from simple static websites to complex web applications. Each project has been an opportunity to learn and grow, and I thrive on the challenges that come with staying at the forefront of web technologies.
          I believe in continuous learning and staying updated with the latest industry trends. My goal is to develop websites that are not only technically sound but also provide an intuitive and enjoyable user experience. I am committed to writing clean, efficient, and maintainable code and am always eager to tackle new challenges and solve complex problems.
        </p>
        <div className="btn-box btns">
          <a href={resume} className="btn" download="VaishaliKawaleResume.pdf">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;



