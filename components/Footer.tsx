"use client";
import { FaGithub, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa"; 
import React, { useState, useEffect } from "react"; 
import { FloatingDock } from "./ui/FloatingDock";
import { Link } from "react-scroll"; 

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false); 
  const [clicked, setClicked] = useState(false); 

  // Track the scroll position and show arrow based on that
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home"); 
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        // Show the arrow when the user has scrolled down 10px from the home section
        if (rect.top < -10) {
          setShowArrow(true);
        } else {
          setShowArrow(false); 
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setClicked(true); // Set the clicked state to true
    setTimeout(() => {
      setClicked(false); // Reset the clicked state after 500ms (adjust as needed)
    }, 500);
  };

  // Define the items for the FloatingDock
  const navItems = [
    { title: "GitHub", icon: <FaGithub size={30} className="text-white" />, href: "https://github.com/KodeHodeKlevis?tab=repositories" },
    { title: "Instagram", icon: <FaInstagram size={30} className="text-[#E4405F]" />, href: "https://www.instagram.com/dakev21/" },
    { title: "LinkedIn", icon: <FaLinkedin size={30} className="text-[#0A66C2]" />, href: "https://www.linkedin.com/in/klevis-papagkikas-9b1869253/" },
  ];

  return (
    <section className="pt-10 bg-background relative">
      {/* Copyright text */}
      <div className="z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <h1 className="text-white">
          Copyright © 2025 Klevis. All rights reserved. Crafted with passion and innovation.
        </h1>
      </div>

     {/* FloatingDock for social media */}
     <div className="z-0 pb-5">
        <FloatingDock items={navItems} />
      </div>

      {/* Up arrow button for smooth scrolling to the top */}
      {showArrow && (
        <div className="absolute bottom-7 right-10 z-10">
          <Link
            to="home" 
            smooth={true} 
            duration={1000} 
            spy={true} 
            offset={-50} 
          >
            <button
              onClick={handleClick} // Toggle color on click
              className={`p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer hover:bg-[#A22C29]
                ${clicked ? 'bg-[#A22C29] ' : 'bg-black'} 
                hover:scale-110`}
              aria-label="Back to Top"
            >
              <FaArrowUp size={30} className="text-white" />
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Footer;
