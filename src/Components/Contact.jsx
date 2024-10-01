import React from 'react'
import '../assets/CSS/Contact.css'

const Contact = () => {
  return (
    <div>
        <section class="contact" id="contact">
  <h2 class="heading animate__animated animate__fadeInDown animate__infinite	infinite animate__slower	2s">Contact <span>Me!</span></h2>
  <form action="#" autocomplete="off">
    <div class="input-box">
      <div class="input-field">
        <input type="text" placeholder="Full Name" required/>
        <span class="focus"></span>
      </div>
      <div class="input-field">
        <input type="text" placeholder="Email Address" required/>
        <span class="focus"></span>
      </div>
    </div>
    <div class="input-box">
      <div class="input-field">
        <input type="numbers" placeholder="Mobile Number" required/>
        <span class="focus"></span>
      </div>
      <div class="input-field">
        <input type="text" placeholder="Email Subject" required/>
        <span class="focus"></span>
      </div>
    </div>
    <div class="textarea-field">
      <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
      <span class="focus"></span>
    </div>
    <div class="btn-box btns">
      <button type="submit" class="btn">Submit</button>
    </div>
  </form>


</section>
    </div>
  )
}

export default Contact