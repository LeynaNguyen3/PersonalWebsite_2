import React from 'react';
import './skills.css';
import ProgrammingLanguages from '../../assets/website_woman_technologist_emoji.png';
import Tools from '../../assets/website_tool.png';
import Certificates from '../../assets/website_trophy.png';
import Activities from '../../assets/website_biking.png';

const aboutMeContent = `
I am someone who is well-rounded and tenacious. I started my career off in freelance back in 2018 
with photography and private tutoring. By 2020, I earned my NMLS license and pursued mortgage sales, 
becoming a top loan officer within my first month on the floor. Taking a break in 2021, I bicycle 
toured down the coast of Washington and Oregon. After years of working, in 2022, I finally had the 
means to pursue my original goal: a degree in Computer Science. I am so excited to have been accepted 
by UCI and to be in their prestigious School of Donald Bren!
`;

const skillsData = [
    {
        category: "Programming Languages",
        items: ["Python", "C", "C++", "Java", "JavaScript", "CSS", "HTML", "SQL", "R", "MIPSzy"],
        icon: ProgrammingLanguages
      },
      {
        category: "Tools/Frameworks",
        items: ["Git", "Docker", "Kubernetes", "AWS", "Numpy/Pandas", "scikit-learn", "React", "MySQL", "RESTful APIs", "jQuery"],
        icon: Tools
      },
      {
        category: "Certifications & Training",
        items: [
          "Cornell Machine Learning Foundations",
          "NMLS (Mortgage Licensing)",
          "CPR Certified",
          "First Aid/AED Certified",
          "University of Helsinki MOOC (Java)"
        ],
        icon: Certificates
      },
      {
        category: "Activities",
        items: [
          "Presented at CCSC-SW CS Research Conference (2025)",
          "Swing Dance @ UCI Board Member (2025)",
          "Biked 800 miles through Oregon/Washington (2021)",
          "Top 10 National CelebratingArt Competition (2013)"
        ],
        icon: Activities
      }
];

const Skills = () => {
  return (
    <section id='skills'>
      <h1 className="skillTitle">About Me</h1>
      <p className="skillDesc">{aboutMeContent}</p>
      
      <h1 className="skillTitle">Technical Skills</h1>
      
      <div className="skillBars">
        {skillsData.map((skill, index) => (
          <div key={index} className="skillBar">
            <img 
              src={skill.icon} 
              alt={skill.category} 
              className="skillBarImg" 
            />
            <div className="skillBarText">
              <h2>{skill.category}</h2>
              <p>{skill.items.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;