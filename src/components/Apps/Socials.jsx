import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socials = ({ isMaximized }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-12 h-12" />,
      url: "https://www.linkedin.com/in/preethidurgaprasad67",
      color: "#0077b5",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-12 h-12" />,
      url: "https://github.com/preethz2567",
      color: "#333",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="w-12 h-12" />,
      url: "https://leetcode.com/u/preethz2567/",
      color: "#f89f1b",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-12 h-12" />,
      url: "mailto:preethidurgaprasad@gmail.com",
      color: "#d44638",
    },
  ];

  return (
    <div
      className={`flex flex-col gap-6 px-5 sm:px-10 py-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "#ffffff", color: "var(--color-text-dark)" }}
    >
      <div className="flex items-center gap-2 border-b-2 pb-2 mb-4" style={{ borderColor: "var(--color-border-light)" }}>
        <img src="/assets/socials.png" alt="Address Book" className="w-6 h-6" />
        <h2 className="text-xl font-bold font-['VT323'] sm:font-sans">
          Address_Book.exe
        </h2>
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-4">
        {socialLinks.map((social, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 cursor-pointer w-24"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="flex justify-center items-center p-2"
                style={{ 
                  color: social.color,
                  filter: isHovered ? "drop-shadow(2px 2px 0px rgba(0,0,128,0.3))" : "none",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.1s ease-in-out"
                }}
              >
                {social.icon}
              </div>
              
              <div 
                className="text-xs text-center px-1 border border-transparent"
                style={{
                  background: isHovered ? "#000080" : "transparent",
                  color: isHovered ? "#ffffff" : "var(--color-text-dark)",
                  borderColor: isHovered ? "#ffffff" : "transparent",
                  borderStyle: isHovered ? "dotted" : "solid",
                  borderWidth: "1px"
                }}
              >
                {social.name}
              </div>
            </a>
          );
        })}
      </div>
      
      <div className="mt-auto border-t-2 pt-4 flex items-start gap-3" style={{ borderColor: "var(--color-border-light)", color: "var(--color-text-dark)" }}>
         <div className="w-8 h-8 flex-shrink-0 bg-[#000080] text-white flex items-center justify-center font-bold text-xl border-2 border-white shadow-[1px_1px_0_#000]">!</div>
         <div>
           <p className="text-sm font-bold">Network Connection Established.</p>
           <p className="text-xs mt-1">Double-click an icon above to connect with me across the web.</p>
         </div>
      </div>
    </div>
  );
};

export default Socials;
