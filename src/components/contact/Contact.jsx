import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"



const contact = () => {

            const form = useRef();

        const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_b4syo43', 'template_jyqjc0i', form.current, {
            publicKey: 'fVPMj0CjgZ3hDHFxs',
            })
            e.target.reset()
        };
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container grid container">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">22051150@kiit.ac.in</span>

                        <a href="22051150@kiit.ac.in" className="contact__button">Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">790-365-4056</span>

                        <a href="https://wa.me/qr/7N3TGMJUTTNPA1" className="contact__button">Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card"> 
                        <i className="bx bxl-instagram contact__card-icon"></i>

                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">@jain_man_13</span>

                        <a href="https://www.instagram.com/jain_man_13?igsh=bDNncWk2dHB4dm84" className="contact__button">Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label  className="contact__form-tag">Name</label>
                        <input type="text" 
                         name='name'
                         className="contact__form-input" 
                         placeholder='Enter your name' />
                    </div>

                    <div className="contact__form-div">
                        <label  className="contact__form-tag">Email</label>
                        <input type="email" 
                        name='email'
                        className="contact__form-input" 
                        placeholder='Enter your email' />
                    </div>      

                    <div className="contact__form-div contact__form-area">
                        <label  className="contact__form-tag">Description</label>
                        <textarea name="project"
                        className='contact__form-input'
                        id="" 
                        placeholder='Write your project idea'></textarea>

                        
                    </div>
                    <button className="button button--flex">Send Message</button>
                   
                </form>

            </div>
        </div>
    </section>
  )
}

export default contact
