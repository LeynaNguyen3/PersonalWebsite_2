import React from 'react'
import './skills.css';
import ProgrammingLanguages from '../../assets/programming_languages.png'
import Tools from '../../assets/Tools.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">About Me</span>
        <span className="skillDesc">This is going to be a placement sentence.This is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentenceThis is going to be a placement sentence.</span>
        <span className="skillTitle">Technical Skills</span>
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
        </div>
        <span className="skillTitle">Work Experience</span>
        <div className="skillBars">
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Mortgage Banker</h2>
                    <p>Mr. Cooper/Ladera Lending <br></br>
                        Jan. 2020 – Feb. 2021 <br></br><br></br>    
                        ● Addressed challenges, conducted client consultations, and managed a client intake and pipeline of 125+ clients <br></br>  
                        ● Developed a comprehensive Excel-based mortgage calculator to optimize the refinance proposal process, widely used by the  
                            office <br></br>  
                        ● Nurtured enduring client relationships, resulting in consistent repeat business and top performance</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Freelance Photographer</h2>
                    <p> Orange County, CA <br></br>
                        Dec. 2018 – Dec. 2019 <br></br>
                        <br></br>
                        ● Built photography business from ground up by creating social media brand, website SEO, and client base <br></br>
                        ● Specialized in wedding, family, and business photography. <br></br>
                        ● Collaborated with philanthropist, Kwanza Jones, on her music videos and Supercharged brand, establishing connections to
                        the film industry</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Private Tutor</h2>
                    <p>Sept. 2018 – Dec. 2019 <br></br>
                    <br></br>
                    ● Private tutor for K-8 students in math, science, English, and APs <br></br>
                    ● Worked with parents and family assistants, ensuring a collaborative and effective learning environment <br></br>
                    ● Boosted a student’s math test scores from C to an A within a two-month period
                    </p>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Skills