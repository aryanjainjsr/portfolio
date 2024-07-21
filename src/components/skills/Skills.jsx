import React from 'react'
import Frontend from './Frontend'
import Design from './Design'
import './skills.css'
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Techniical Expertise</span>

      <div className="skills__container container grid">
        <Frontend/>
        <Design/>

      </div>


    </section>
  )
}

export default Skills
