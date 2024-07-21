import React, { useState } from 'react'
import './services.css'
const Services = () => {

        const[toggleState,setToggleState] = useState(0);
        const toggleTab = (index) =>{
                setToggleState(index);
        }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                        <div>
                                <i className="uil uil-web-grid services__icon"></i>
                                <h3 className="services__title">Web <br/> Development</h3>
                        </div>
                        <span className="services__button" onClick={ () => toggleTab(1)}>
                                View more
                                <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>

                        <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
                                <div className="services__modal-content">
                                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                                        <h3 className="services__modal-title">Web Development</h3>
                                        <p className="services__modal-description">Services with 2+ years of experience. Providing quality work</p>

                                        <ul className="services__modal-services grid">
                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info">I develop User Interface.</p>
                                                </li>

                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info">Web page development.</p>
                                                </li>

                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info">Providing functions seamlessly on all devices.</p>
                                                </li>
                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info">Providing ongoing website updates and technical support.</p>
                                                </li>
                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info"> Providing consistent performance across different web browsers.</p>
                                                </li>
                                        </ul>
                                </div>
                        </div>
            </div>

            <div className="services__content">
                        <div>
                                <i className="uil uil-arrow services__icon"></i>
                                <h3 className="services__title">UI/UX <br/> Design </h3>
                        </div>
                        <span className="services__button" onClick={ () => toggleTab(2)}>
                                View more
                                <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>

                        <div className={toggleState ===2 ? "services__modal active__modal" : "services__modal"}>
                                <div className="services__modal-content" >
                                        <i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0)}></i>

                                        <h3 className="services__modal-title">UI/UX Designer</h3>
                                        <p className="services__modal-description">Services with 3+ years of experience and aim to enhance the overall user journey.</p>

                                        <ul className="services__modal-services grid">
                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info">I develop user interactions</p>
                                                </li>

                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info">Designing to ensure accessibility for all users.</p>
                                                </li>

                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info"> Designing intuitive and engaging user interfaces.</p>
                                                </li>

                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info">Ensuring a consistentency across all devices.</p>
                                                </li>

                                                <li className="services__modal-service">
                                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                                        <p className="services__modal-info">Conducting in-depth user research to inform design decisions.</p>
                                                </li>
                                        </ul>
                                </div>
                        </div>
            </div>

            <div className="services__content">
                    <div>
                            <i className="uil uil-edit services__icon"></i>
                            <h3 className="services__title">Graphic <br/> Designer</h3>
                    </div>
                    <span className="services__button" onClick={() =>{toggleTab(3)}}>
                            View more
                            <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3? "services__modal active__modal" : "services__modal"}>
                            <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() =>{toggleTab(0)}}></i>

                                    <h3 className="services__modal-title">Graphic Designer</h3>
                                    <p className="services__modal-description">Services with 2+ years of experience in creating creative and stylish designs</p>

                                    <ul className="services__modal-services grid">
                                            <li className="services__modal-service">
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p className="services__modal-info"> Creating personalized logos.</p>
                                            </li>
                                                
                                            <li className="services__modal-service">
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p className="services__modal-info"> Producing eye-catching visuals.</p>
                                            </li>
                                            <li className="services__modal-service">
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p className="services__modal-info">Creating impactful visual identities for brands.</p>
                                            </li>

                                            <li className="services__modal-service">
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p className="services__modal-info">Creating attractive and functional graphics</p>
                                            </li>

                                                

                                                
                                    </ul>
                            </div>
                    </div>
                </div>



               
        </div>
    </section>
  )
}

export default Services
