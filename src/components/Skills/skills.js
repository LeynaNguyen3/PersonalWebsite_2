import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';
import ProgrammingLanguages from '../../assets/website_woman_technologist_emoji.png';
import Tools from '../../assets/website_tool.png';
import Certificates from '../../assets/website_trophy.png';
import Activities from '../../assets/website_biking.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const titleVariants = {
hidden: { y: -20, opacity: 0 },
visible: {
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.5
  }
}
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }
};

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
    <motion.section 
      id='skills'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.h1 className="skillTitle" variants={titleVariants}>
        About Me
      </motion.h1>
      <motion.p className="skillDesc" variants={textVariants}>
        {aboutMeContent}
      </motion.p>
      
      <motion.h1 className="skillTitle" variants={titleVariants}>
        Technical Skills
      </motion.h1>
      
      <motion.div className="skillBars" variants={containerVariants}>
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skillBar"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img 
              src={skill.icon} 
              alt={skill.category} 
              className="skillBarImg"
              whileHover={{ rotate: 5 }}
            />
            <div className="skillBarText">
              <h2>{skill.category}</h2>
              <p>{skill.items.join(', ')}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;