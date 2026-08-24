import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaWindowClose } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socials = ({ isMaximized }) => {
  const socialLinks = [
    {
      name: "LinkedIn.exe",
      description: "Network & Connect",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/preethidurgaprasad67",
      color: "#0077b5",
    },
    {
      name: "GitHub.exe",
      description: "Code & Projects",
      icon: <FaGithub />,
      url: "https://github.com/preethz2567",
      color: "#333333",
    },
    {
      name: "LeetCode.exe",
      description: "Problem Solving",
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/preethz2567/",
      color: "#f89f1b",
    },
    {
      name: "Email.exe",
      description: "Say Hello",
      icon: <FaEnvelope />,
      url: "mailto:preethidurgaprasad@gmail.com",
      color: "#d44638",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4 mt-2">
        {socialLinks.map((social, i) => (
          <div
            key={i}
            className="flex flex-col"
            style={{
              background: "#c0c0c0",
              borderTop: "2px solid #ffffff",
              borderLeft: "2px solid #ffffff",
              borderBottom: "2px solid #000000",
              borderRight: "2px solid #000000",
              boxShadow: "inset 1px 1px #dfdfdf, inset -1px -1px #808080",
            }}
          >
            {/* Fake Title Bar */}
            <div className="flex justify-between items-center px-1 py-0.5" style={{ background: "#000080", color: "#ffffff" }}>
              <span className="text-[10px] sm:text-xs font-bold tracking-wide">{social.name}</span>
              <div className="w-3 h-3 bg-[#c0c0c0] flex items-center justify-center border border-white border-b-black border-r-black">
                 <span className="text-black text-[8px] font-bold">X</span>
              </div>
            </div>

            {/* Window Body */}
            <div className="flex items-center gap-3 p-3">
              <div className="text-3xl sm:text-4xl" style={{ color: social.color }}>
                {social.icon}
              </div>
              <div className="flex flex-col flex-grow">
                <p className="font-bold text-xs sm:text-sm">{social.description}</p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-center text-[10px] sm:text-xs font-bold px-2 py-1 hover:active:border-t-black hover:active:border-l-black hover:active:border-b-white hover:active:border-r-white"
                  style={{
                    background: "#c0c0c0",
                    borderTop: "2px solid #ffffff",
                    borderLeft: "2px solid #ffffff",
                    borderBottom: "2px solid #000000",
                    borderRight: "2px solid #000000",
                    color: "black",
                    textDecoration: "none",
                    width: "fit-content"
                  }}
                >
                  Open ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 p-4" style={{ border: "2px dashed var(--color-border-light)", background: "#fafaf9" }}>
        <p className="text-sm leading-relaxed">
          <strong>Let's connect!</strong> Feel free to check out my profiles above. Whether you want to review my code on GitHub, see my professional journey on LinkedIn, check my problem-solving stats on LeetCode, or just drop a quick hello via email - I'd love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default Socials;
