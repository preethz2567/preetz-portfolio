import { FaJava, FaPython, FaDatabase, FaReact, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiC, SiSpringboot, SiHibernate, SiApachekafka, SiRailway, SiVercel, SiApachemaven, SiPostman, SiEclipseide, SiVisualstudiocode, SiMysql } from "react-icons/si";

const skillCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: <FaJava className="w-8 h-8" color="#007396" /> },
      { name: "Python", icon: <FaPython className="w-8 h-8" color="#3776AB" /> },
      { name: "C", icon: <SiC className="w-8 h-8" color="#A8B9CC" /> },
      { name: "SQL", icon: <FaDatabase className="w-8 h-8" color="#e38c00" /> },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8" color="#6DB33F" /> },
      { name: "Hibernate", icon: <SiHibernate className="w-8 h-8" color="#59666C" /> },
      { name: "React JS", icon: <FaReact className="w-8 h-8" color="#61DAFB" /> },
      { name: "Kafka", icon: <SiApachekafka className="w-8 h-8" color="#231F20" /> },
    ],
  },
  {
    label: "Cloud / DevOps",
    skills: [
      { name: "AWS", icon: <FaAws className="w-8 h-8" color="#FF9900" /> },
      { name: "Railway", icon: <SiRailway className="w-8 h-8" color="#0B0D0E" /> },
      { name: "Vercel", icon: <SiVercel className="w-8 h-8" color="#000000" /> },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="w-8 h-8" color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub className="w-8 h-8" color="#181717" /> },
      { name: "Maven", icon: <SiApachemaven className="w-8 h-8" color="#C71A22" /> },
      { name: "Postman", icon: <SiPostman className="w-8 h-8" color="#FF6C37" /> },
      { name: "Eclipse", icon: <SiEclipseide className="w-8 h-8" color="#2C2255" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="w-8 h-8" color="#007ACC" /> },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="w-8 h-8" color="#4479A1" /> },
    ],
  },
];

const Skills = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-6 px-5 sm:px-10 py-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "#ffffff", color: "var(--color-text-dark)" }}
    >
      <div className="flex items-center gap-2 border-b-2 pb-2 mb-2" style={{ borderColor: "var(--color-border-light)" }}>
        <img src="/assets/projects.png" alt="folder" className="w-6 h-6" style={{ filter: "grayscale(20%)" }} />
        <h2 className="text-xl font-bold font-['VT323'] sm:font-sans">
          C:\\My_Skills
        </h2>
      </div>

      {skillCategories.map((cat, i) => (
        <div 
          key={i} 
          className="p-3 mb-2"
          style={{
            border: "2px groove var(--color-border-light)",
            background: "var(--color-window-content)"
          }}
        >
          <h3
            className="text-sm font-bold uppercase mb-4 px-2 bg-white inline-block relative -top-6"
            style={{ color: "var(--color-text-dark)" }}
          >
            {cat.label}
          </h3>
          <div className="flex flex-wrap gap-6 mt-[-10px]">
            {cat.skills.map((skill, j) => (
              <div
                key={j}
                className="flex flex-col items-center justify-center gap-2 p-2 w-[80px] hover:bg-blue-100 cursor-pointer border border-transparent hover:border-blue-400 hover:border-dotted"
              >
                <div 
                  className="flex items-center justify-center w-12 h-12 bg-white"
                  style={{
                    border: "1px solid var(--color-border-dark)",
                    boxShadow: "1px 1px 0px #000"
                  }}
                >
                  {skill.icon}
                </div>
                <span className="text-xs text-center leading-tight bg-transparent" style={{ wordBreak: 'break-word' }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
