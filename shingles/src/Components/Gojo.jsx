import React from 'react'
import './Gojo.css';
import { useInView } from "framer-motion";
import { useRef } from "react";

const Gojo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='gojo-container'>
      <div style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}><img src="./src/assets/gojosatoru.jpg" alt="Gojo" className='gojo-image' />  </div>
        <div className='gojo-text'>
          <h1>Gojo Satoru</h1>
        </div>
    </div>
  )
}

export default Gojo;