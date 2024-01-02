import React from 'react'
import './skills.css';
import ProgrammingLanguages from '../../assets/programming_languages.png'
import Tools from '../../assets/Tools.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Technical Skills</span>
        <span className="skillDesc">This is going to be a placement sentence.This is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentence.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={ProgrammingLanguages} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Programming Languages</h2>
                    <p>HTML, CSS, JavaScript, Java, C++, Python, MIPSzy</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Tools} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Tools & FrameWorks</h2>
                    <p> Git, GitLab, Catch2, NetBeans, VSCode, Tailwind CSS, React</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Extra Content</h2>
                    <p>lorem ipsum dolot might</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills