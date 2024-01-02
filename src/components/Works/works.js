import React from 'react'
import './works.css';
import Porfolio1 from '../../assets/portfolio-1.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">Projects</h2>
        <span className="worksDesc">Here are all my projects... so far!</span>
        <div className="worksImgs"></div>
        <a href="https://github.com/LeynaNguyen3/PersonalWebsite_2" target="_blank" rel="noopener noreferrer">
          <img src={Porfolio1} alt="First Project" className="worksImg" />
          <div className="overlay">
            <div className="text">This is the website you're currently viewing!</div>
          </div>
        </a>
    </section>
  )
}

export default Works;