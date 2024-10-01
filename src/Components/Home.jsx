import React from 'react';
import '../assets/CSS/Home.css'
import bg from '../assets/images/bgr.png';


const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h1 className="animate__animated animate__flash">Hi,I'm <span>Vaishali Kawale</span></h1>
          <div className="text-animate  animate__animated animate__fadeInLeft">
            <h3>Fontend Developer</h3>
          </div>
          <p>
            Hello! I’m Vaishali, a passionate and dedicated web developer with a knack for creating dynamic, user-friendly, and visually appealing websites. With a solid foundation in both front-end technologies, I strive to build websites that not only meet but exceed client expectations.
          </p>
          <div className="btn-box">
            <a href="" className="btn">Hire'me</a>
            <a href="" className="btn">Download CV</a>
          </div>
        </div>
        <div className="home-icons">
          <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
          <a href="https://github.com/DKvaishali" target="_blank"> <i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/vaishali-kawale-953491193/" target="_blank"> <i className="fa fa-linkedin"></i></a>
          <a href="https://x.com/i/flow/login" target="_blank"> <i className="fa fa-twitter"></i></a>
        </div>
      </section>
      <div class="developer-img">
      <img src={bg} alt="" />
    </div>
    
    </div>
  )
}

export default Home