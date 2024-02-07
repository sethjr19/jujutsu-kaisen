import React from 'react'
import './Home.css';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  
  useEffect(() => {
    // Wait for the DOM content to be loaded
    window.addEventListener("DOMContentLoaded", () => {
      // Get a reference to the background image container
      const shrineContainer = document.getElementById("background-image");

      // Add a scroll event listener to update the zoom level on scroll
      window.addEventListener("scroll", () => {
        // Calculate the zoom level based on the scroll position
        const scrollY = window.scrollY;
        const maxZoom = 1.2; // Adjust the maximum zoom level as needed
        const zoom = 1 + (scrollY / window.innerHeight) * maxZoom;
        
        // Apply the zoom level to the container using CSS scale
        shrineContainer.style.transform = `scale(${zoom})`;
      });
    });
  }, []);


  return (
    <div className='home-page' id='home-page'>
      <div className="background-image" id='background-image'></div>
      <div className='home-content' id='home-content'>
        <div className='title-text' id='title-text'>
         <h1>Jujutsu Kaisen</h1>
         <span><h2>呪じゅ術じゅつ廻かい戦せん</h2></span>
         <span className='scroll-section' id='scroll-section'>Scroll to Explore</span>
      </div>
        <div className='bars'>
        <span className='col'></span>
        <span className='col'></span>
        </div>
      </div>
      
    </div>
  )
}

export default Home