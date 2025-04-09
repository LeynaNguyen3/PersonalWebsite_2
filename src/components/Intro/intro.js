import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"><p className="gradient-element"/>I'm <span className="introName">Leyna</span><br />UCI C.S. Student</span>
            <div className="introParaContainer">
              <p className="introPara"> with plans to graduate June 2025. I have a passion for learning <br/> and am a well-rounded individual always looking to sharpen my skills.</p>
              <div className="gradient-underlay" />
            </div>
            <Link to='skills' spy={true} smooth={true} offset={-100} duration={500}><button className="btn"  onClick={() => {
          document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
        }}>About Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro