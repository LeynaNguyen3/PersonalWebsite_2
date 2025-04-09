import React from 'react'
import './skills.css';
import ProgrammingLanguages from '../../assets/programming_languages.png'
import Tools from '../../assets/Tools.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">About Me</span>
        <span className="skillDesc">I am someone who is well-rounded and tenacious. I started my career off in freelance back in 2018 with photography and private tutoring. 
        By 2020, I earned my NMLS license and pursued mortgage sales becoming a top loan officer within my first month on the floor. 
        Taking a break in 2021, I bicycle toured down the coast of Washington and Oregon. 
        After years of working, in 2022, I finally had to means to to pursue my original goal: a degree in Computer Science. 
        I am so excited to have been accepted by UCI and to be in their prestigious School of Donald Bren!</span>
        <span className="skillTitle">Technical Skills</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={ProgrammingLanguages} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Programming Languages</h2>
                    <p>HTML, CSS, JavaScript, Java, C++, Python, MIPSzy, React</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Tools} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Tools & FrameWorks</h2>
                    <p> Git, GitLab, Catch2, NetBeans, VSCode, Node Package Manager</p>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Skills