import React,{useState} from 'react'
import "./qualification.css"
const Qualifications = () => {

    const[toggleState,setToggleState] = useState(1);
    const toggleTab = (index) =>{
            setToggleState(index);
    }


  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState ===1 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"
                } onClick={ () => {toggleTab(1)}}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState ===2 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"}onClick={ () => {toggleTab(2)}}>
                    <i className="uil uil-briefcase-alt qualification__icon"
                    ></i>Experience
                </div>
            </div>
            <div className="qualification__sections">

                <div className={toggleState === 1? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Senior Secondary Education</h3>
                            <span className="qualification__subtitle">DBMS KHS</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt "></i>2020-2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Higher Education</h3>
                            <span className="qualification__subtitle">KIIT - B.tech</span>
                            <div className="qualification__calander">
                                <i className="uil uil-calendar-alt"></i>2022-Present
                            </div>
                        </div>

                       
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Google UX Design</h3>
                            <span className="qualification__subtitle">Coursera</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2022-2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            {/* <span className="qualification__line"></span> */}
                        </div>
                    </div>

                    
                </div>

                <div className={toggleState === 2? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UI/UX Designer</h3>
                            <span className="qualification__subtitle">GDSC-KIIT</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2024-Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Graphic Designer</h3>
                            <span className="qualification__subtitle">NSS-KIIT</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2023-Present
                            </div>
                        </div>

                       
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Digital Designing</h3>
                            <span className="qualification__subtitle">Freelance</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2022-Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            {/* <span className="qualification__line"></span> */}
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
    </section>
  )
}

export default Qualifications
