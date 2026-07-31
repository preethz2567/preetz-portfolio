import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";

const Socials = ({ isMaximized }) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={32} />,
      url: "https://www.linkedin.com/in/preethidurgaprasad67",
      color: "#0077b5",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={32} />,
      url: "https://github.com/preethz2567",
      color: "#333",
    },
    {
      name: "LeetCode",
      icon: <FaCode size={32} />,
      url: "https://leetcode.com/u/preethz2567/",
      color: "#f89f1b",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={32} />,
      url: "mailto:preethidurgaprasad@gmail.com",
      color: "#d44638",
    },
  ];

  return (
    <div
      className={`flex flex-col gap-6 p-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      <h2
        className="text-xl font-bold border-b pb-2 mb-2"
        style={{ borderColor: "var(--color-border-light)" }}
      >
        My Socials
      </h2>

      <div className="flex flex-col gap-4">
        {socialLinks.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 hover:-translate-y-1 transition-transform"
            style={{
              background: "#fafaf9",
              border: "1px solid var(--color-border-light)",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.1)",
              textDecoration: "none",
              color: "var(--color-text-dark)",
            }}
          >
            <div
              className="flex justify-center items-center w-12 h-12"
              style={{ color: social.color }}
            >
              {social.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{social.name}</h3>
              <p className="text-xs" style={{ color: "var(--color-accent)" }}>
                {social.url.replace("mailto:", "")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
