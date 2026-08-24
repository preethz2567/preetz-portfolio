import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socials = ({ isMaximized }) => {
  const socialLinks = [
    {
      name: "LINKEDIN",
      description: "Connect & Network",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/preethidurgaprasad67",
      bgGradient: "linear-gradient(135deg, #0077b5 0%, #004182 100%)",
      glowColor: "rgba(0, 119, 181, 0.5)",
    },
    {
      name: "GITHUB",
      description: "Code & Projects",
      icon: <FaGithub />,
      url: "https://github.com/preethz2567",
      bgGradient: "linear-gradient(135deg, #333333 0%, #000000 100%)",
      glowColor: "rgba(51, 51, 51, 0.5)",
    },
    {
      name: "LEETCODE",
      description: "Problem Solving",
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/preethz2567/",
      bgGradient: "linear-gradient(135deg, #f89f1b 0%, #a86500 100%)",
      glowColor: "rgba(248, 159, 27, 0.5)",
    },
    {
      name: "EMAIL",
      description: "Say Hello",
      icon: <FaEnvelope />,
      url: "mailto:preethidurgaprasad@gmail.com",
      bgGradient: "linear-gradient(135deg, #ea4335 0%, #991c11 100%)",
      glowColor: "rgba(234, 67, 53, 0.5)",
    },
  ];

  return (
    <div
      className={`flex flex-col gap-6 px-5 sm:px-10 py-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      <h2
        className="text-2xl font-bold border-b pb-2"
        style={{ borderColor: "var(--color-border-light)" }}
      >
        My Socials
      </h2>

      <div className="flex flex-col gap-8 pb-10 mt-2">
        {socialLinks.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="group relative w-full h-40 sm:h-56 overflow-hidden flex items-center p-6 cursor-pointer"
            style={{
              background: social.bgGradient,
              borderTop: "3px solid var(--color-border-dark)",
              borderLeft: "3px solid var(--color-border-dark)",
              borderBottom: "3px solid #ffffff",
              borderRight: "3px solid #ffffff",
              textDecoration: "none",
              boxShadow: `0px 10px 20px ${social.glowColor}`,
              transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.02) translateY(-4px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0px)";
            }}
          >
            {/* Giant faded background icon */}
            <div 
              className="absolute -right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white opacity-20 pointer-events-none transition-transform duration-500 group-hover:scale-110"
              style={{ fontSize: "140px", sm: { fontSize: "200px" } }}
            >
              {social.icon}
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col justify-center h-full text-white">
              <div className="text-4xl sm:text-6xl mb-2 drop-shadow-lg">
                {social.icon}
              </div>
              <h3 className="font-extrabold text-2xl sm:text-4xl tracking-wider drop-shadow-md">
                {social.name}
              </h3>
              <p className="font-bold text-sm sm:text-lg opacity-90 mt-1 uppercase tracking-widest drop-shadow-md">
                {social.description}
              </p>
            </div>

            {/* "Play" or "Go" button overlay on hover */}
            <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="bg-white text-black px-4 py-2 text-xs font-bold border-2 border-black shadow-[2px_2px_0_#000]">
                  OPEN LINK ↗
               </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
