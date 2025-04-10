import React from 'react';
import { motion } from 'framer-motion';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';

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
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "backOut"
    }
  }
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Intro = () => {
  return (
    <motion.section 
      id="intro"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="introContent">
        <motion.span className="hello" variants={titleVariants}>
          Hello,
        </motion.span>
        
        <motion.span className="introText" variants={itemVariants}>
          <p className="gradient-element"/>
          I'm <span className="introName">Leyna</span><br />UCI C.S. Student
        </motion.span>
        
        <motion.div className="introParaContainer" variants={itemVariants}>
          <p className="introPara">
            with plans to graduate June 2025. I have a passion for learning <br/>
            and am a well-rounded individual always looking to sharpen my skills.
          </p>
          <div className="gradient-underlay" />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link 
            to='skills' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
          >
            <motion.button 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
              }}
            >
              About Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      <motion.img 
        src={bg} 
        alt="Profile" 
        className="bg" 
        variants={imageVariants}
      />
    </motion.section>
  )
}

export default Intro;