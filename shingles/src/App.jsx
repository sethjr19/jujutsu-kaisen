import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { useScroll, useMotionValueEvent, motion, useTransform, useSpring, inView } from "framer-motion";

import Home from './Home';
import Gojo from './Components/Gojo';

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Image({ id }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);
// }

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const gojo = document.getElementById("gojo")

  const sectionHeight = window.innerHeight;
  const totalSections = 3; 
  const threshold = 0.5
  

  //   window.addEventListener("scroll", handleScrollToNextSection);

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollToNextSection);
  //   };
  // }, [scrollYProgress]);

  return (
    <>
      <div className='container'>
        <Home/>
        <Gojo id='gojo'/>
        <motion.div className='progress-bar' style={{ scaleX }} />
          <section className='section'>Section1''</section>
          <section className='section'>Section2''</section>
          <section className='section'>Section3''</section>
      </div>
    </>
  )
}

export default App
