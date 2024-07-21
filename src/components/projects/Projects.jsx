import React, { useState } from 'react'
import "./projects.css"
import netflix from "../../assets/Netflix.png"
import mint from "../../assets/MovieMintGroup.png"
import sound from "../../assets/SoundStreamGroup.png"
import nike from "../../assets/NikeGroup.png"
import kp3 from "../../assets/Kp3.png"

const Work = () => {

  const [toggleState,setToggleState]=useState(0);
  const toggleTab =(index) =>{
    setToggleState(index);
  }

  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most Recent Works</span>
        <div className="projects__tab">
            <div id='projects' className={toggleState ===0 ? "projects__active projects__button  button--flex":"projects__button button--flex"
            } onClick={ () => {toggleTab(0)}}>
                <span className='projects__item'>All</span>
            </div>

            <div id='projects' className={toggleState ===1 ? "projects__active projects__button  button--flex":"projects__button button--flex"}onClick={ () => {toggleTab(1)}}>
                <span className='projects__item'>Web</span>
            </div>

            <div id='projects' className={toggleState ===2 ? "projects__active  projects__button button--flex":"projects__button button--flex"}onClick={ () => {toggleTab(2)}}>
                <span className='projects__item'>Design</span>
            </div>

        </div>

       
        <div className="projects__container container grid">
          
         
              
            <div className={toggleState ===0 || toggleState ===1 ? 'active__card' : "projects__card"} >
                <img src={netflix} alt="" className="projects__image" />
                <h3 className="projects__title">Netflix Clone</h3>
                <a href="https://github.com/aryanjainjsr/NetflixClone" className="projects__button">
                  Demo <i className="bx bx-right-arrow-alt projects__button-icon"></i>
                </a>
             </div>

            
            <div className={toggleState ===0 || toggleState ===2 ? 'active__card' : "projects__card"} >
                <img src={mint}  className="projects__image" />
                <h3 className="projects__title">MoviesMint</h3>
                <a href="https://www.figma.com/design/mRl1oyUVbFCC6v1yYDSJix/HighFeidility-Moviesapp?node-id=615-1874&t=fsdpLq4AdTEo3XgP-0" className="projects__button">
                  Demo <i className="bx bx-right-arrow-alt projects__button-icon"></i>
                </a>
            </div>

            <div className={toggleState ===0 || toggleState ===1 ? 'active__card' : "projects__card"} >
                <img src={kp3} alt="" className="projects__image" />
                <h3 className="projects__title">Kings Palace III</h3>
                <a href="https://github.com/KudoAkinichi/KP_3_Web" className="projects__button">
                  Demo <i className="bx bx-right-arrow-alt projects__button-icon"></i>
                </a>
            </div>
            <div className={toggleState ===0 || toggleState ===2 ? 'active__card' : "projects__card"} >
                <img src={sound} alt="" className="projects__image" />
                <h3 className="projects__title">SoundStream</h3>
                <a href="https://www.figma.com/design/kCAfKptHo6Wf6SQhBu0CtY/Untitled?node-id=332-1701&t=fsdpLq4AdTEo3XgP-0" className="projects__button">
                  Demo <i className="bx bx-right-arrow-alt projects__button-icon"></i>
                </a>
            </div>
            <div className={toggleState ===0 || toggleState ===2 ? 'active__card' : "projects__card"} >
                <img src={nike} alt="" className="projects__image" />
                <h3 className="projects__title">Nike</h3>
                <a href="https://www.figma.com/design/gvDxZ5VSrSBahUXnzkgtvc/Untitled?node-id=0-1&t=fsdpLq4AdTEo3XgP-0" className="projects__button">
                Demo <i className="bx bx-right-arrow-alt projects__button-icon"></i>
                </a>
            </div>
            

            
            </div>
            
        

        
    </section>
  )
}

export default Work
