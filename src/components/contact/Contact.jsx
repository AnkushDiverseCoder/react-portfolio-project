import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com';
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8idg29s', 'template_81utusk', form.current, 'w-5zlYa-4lWfuFxfb')
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
      <div className="contact__options">
            <article className="contact__option" >
                <MdOutlineMailOutline className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>thakurankushsingh1902@gmail.com</h5>
                <a href="mailto:thakurankushsingh1902@gmail.com" target="_blank" rel="noreferrer"> Send a Message</a>
            </article>
            <article className="contact__option" >
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Linkedin</h4>
                <h5>thakurankush</h5>
                <a href="https://www.linkedin.com/in/thakur-ankush-056561219/" target="_blank" rel="noreferrer"> Send a Message</a>
            </article>
            <article className="contact__option" >
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <a href="https://wa.me/+919606272707?text=I'm%20interested%20in%20your%20skills%20can%20we%20talk" target="_blank" rel="noreferrer"> Send a Message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className="button">
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact