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
        <span className="skillTitle">Work Experience</span>
        <div className="skillBars">
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Learning Assistant</h2>
                    <p>University of California, Irvine<br></br>
                    ICS 46 - Data Structures & Algorithms in C++<br></br>
                    Jan. 2024 – Present<br></br><br></br>    
                        ● Supports lectures by answering questions for students and explaining complex concepts from lecture or reading<br></br>  
                        ● Assist in the programming lab by debugging students' code and providing project guidance<br></br>  
                        ● Participate in Learning Assistant training to improve communication with students</p>
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Mortgage Banker</h2>
                    <p>Mr. Cooper/Ladera Lending <br></br>
                        Jan. 2020 – Feb. 2021 <br></br><br></br>  
                        ● Achieved top loan officer status within the first few months of onboarding, originating over $6,000,000 in monthly sales</p>  
                        ● Addressed challenges, conducted client consultations, and managed a client intake and pipeline of 125+ clients <br></br>  
                        ● Developed a comprehensive Excel-based mortgage calculator to optimize the refinance proposal process, widely used by the  
                            office <br></br>  
                </div>
            </div>
            <div className="skillBar">
                <div className="skillBarText">
                    <h2>Freelance Photographer</h2>
                    <p> Orange County, CA <br></br>
                        Dec. 2018 – Dec. 2019 <br></br>
                        <br></br>
                        ● Built photography business from ground up by creating social media brand, website SEO, and client base <br></br>
                        ● Specialized in wedding, family, and business photography averaging monthly revenue of $2,500 <br></br></p>
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