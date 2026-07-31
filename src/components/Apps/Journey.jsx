import React from "react";

const milestones = [
  {
    year: "2020",
    title: "The Spark",
    description: "Watched the 'Silicon Valley' series during the lockdown. It sparked my fascination with programming and building things from scratch.",
    icon: "📺",
  },
  {
    year: "2024",
    title: "Started B.E. Computer Science",
    description: "Began my formal education in Computer Science at Saveetha Engineering College, diving deep into fundamentals and data structures.",
    icon: "🎓",
  },
  {
    year: "2025",
    title: "First Hackathon Win",
    description: "Won 1st Prize at Ossome Hacks 3.0 by Github Community SRM, developing a full prototype in 24 hours.",
    icon: "🏆",
  },
  {
    year: "2026",
    title: "Entering the Industry",
    description: "Started an SDE internship at IntakeOff.AI, getting hands-on with DevOps, CI/CD, and Vercel/Railway deployments.",
    icon: "💼",
  },
  {
    year: "Future",
    title: "Continuous Learning",
    description: "Working towards my Oracle Certified Professional Java SE 21 certification and building robust, scalable backend systems.",
    icon: "🚀",
  },
];

const Journey = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-6 p-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      <h2
        className="text-xl font-bold border-b pb-2 mb-4"
        style={{ borderColor: "var(--color-border-light)" }}
      >
        My Coding Journey
      </h2>

      <div className="flex flex-col gap-6 relative before:content-[''] before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--color-border-light)]">
        {milestones.map((milestone, i) => (
          <div key={i} className="flex gap-4 relative z-10">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md flex-shrink-0 text-xl"
              style={{ border: "2px solid var(--color-border-light)" }}
            >
              {milestone.icon}
            </div>
            <div 
              className="p-4 flex-1"
              style={{
                background: "#fafaf9",
                border: "1px solid var(--color-border-light)",
                boxShadow: "2px 2px 0 rgba(0,0,0,0.1)",
              }}
            >
              <span className="text-xs font-bold px-2 py-1 mb-2 inline-block" style={{ background: "var(--color-accent)", color: "white" }}>
                {milestone.year}
              </span>
              <h3 className="font-bold text-base mb-1">{milestone.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
