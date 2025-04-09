import React from 'react';
import './experience.css';

const experienceData = [
  {
    title: "IT Cloud Operations Intern",
    company: "SAP NS2",
    location: "Herndon, VA",
    startDate: "Expected Start Date: June 2025",
    responsibilities: [
      "Support cloud and on-premise IT operations by performing hands-on technical work",
      "Develop experience in data network and IT security related items, including managing and installing patches to servers",
      "Collaborate with cross-functional teams to troubleshoot issues, gather requirements, and assist in project lifecycle management for technology and change implementation workstreams"
    ]
  }, 
  {
    title: "Application Developer",
    company: "Fabflix Movie Database Web App ",
    companyLink: "https://www.youtube.com/watch?v=giEpsQsG414&ab_channel=LeynaNguyen",
    location: "Irvine, CA",
    startDate: "Sep. 2024 – Dec. 2024",
    responsibilities: [
      "Collaborated in team of 2 to design and deploy a scalable web app on AWS, MySQL, and Tomcat, enabling users to search, browse, and buy from a catalog of 12,000 movies with features like secure logins, auto-suggestions, and a checkout process",
      "Built a user-friendly front-end using JavaScript, jQuery, and AJAX, improving the browsing and purchasing experience",
      "Optimized performance by 20% and scalability with MySQL replication, connection pooling, and Kubernetes deployment across multiple AWS instances"
    ]
  },
  {
    title: "Lab Research Assistant",
    company: "Hinman Lab",
    location: "Los Angeles, CA",
    startDate: "Sep. 2024 – Present",
    responsibilities: [
      "Contributed to stroke recovery research at one of the leading neurology labs in the U.S., using AI and machine learning to identify potential drug therapies with a team of 6",
      "Developed an AI-driven axon regeneration classifier by integrating RNA sequencing data and neuron microscopy images with advanced machine learning algorithms",
      "Leveraged tools like RegenOrNoRegen, Seurat, NeuroQuantify, and Garnett to optimize the classifier, supporting research aimed at improving recovery outcomes for stroke patients"
    ]
  },
  {
    title: "Artificial Intelligence Intern",
    company: "UCLA Department of Neurology",
    companyLink: "https://docs.google.com/presentation/d/1_2yMVcBLNqmqKTIjmgZUHVHMSMt-pIZioBUL4UcfYN0/edit?usp=drive_link",
    location: "Los Angeles, CA",
    startDate: "Mar. 2024 – Present",
    responsibilities: [
      "Selected from a pool of thousands of applicants to join 250 students in an 18-month program to master critical skills in data science, machine learning (ML), and artificial intelligence (AI)",
      "Gained proficiency in constructing data analysis pipelines, training ML models, Jupyter, NumPy, and Pandas",
      "Applied this knowledge to my role as a Lab Research Assistant, where I developed an AI-driven axon regeneration classifier"
    ]
  },
  {
    title: "Teaching Assistant",
    company: "UCI Department of Computer Science",
    location: "Irvine, CA",
    startDate: "Jan. 2024 – Dec. 2024",
    responsibilities: [
      "Developed/delivered lectures on Data Structures & Algorithms, focusing on concepts such as trees, graphs, and algorithms",
      "Assisted students in lab projects, guiding them through developing a simple shell in C, dynamic memory allocators, and multithreading using tools like GDB, Vim, and VS Code",
      "Taught principles of system design in C, including multiprocesses, multithreading, POSIX system calls, and concurrency"
    ]
  },
  {
    title: "Mortgage Banker",
    company: "Mr. Cooper & Ladera Lending ",
    location: "Orange County, CA",
    startDate: "Jan. 2020 – Feb. 2021",
    responsibilities: [
      "Achieved top loan officer status within the first few months of onboarding, originating over $6,000,000 in monthly sales",
      "Addressed challenges, conducted client consultations, and managed a client intake and pipeline of 125+ clients"
    ]
  },
];

const Experience = () => {
  return (
    <section id='experiences'>
      <h1 className="experienceTitle">Work Experience</h1>
      
      <div className="experienceBars">
        {experienceData.map((exp, index) => (
          <div key={index} className="experienceBar">
            <div className="experienceBarText">
              <h2>{exp.title}</h2>
              <p>
                {exp.location}<br />
                {exp.companyLink ? (
                  <a 
                    href={exp.companyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="companyLink"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}<br />
                {exp.company}<br />
                {exp.startDate}<br /><br />
                
                {exp.responsibilities.map((item, i) => (
                  <React.Fragment key={i}>
                    ● {item}<br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;