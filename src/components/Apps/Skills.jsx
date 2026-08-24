import { FaJava, FaPython, FaDatabase, FaReact, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiC, SiSpringboot, SiHibernate, SiApachekafka, SiRailway, SiVercel, SiApachemaven, SiPostman, SiEclipseide, SiVisualstudiocode, SiMysql } from "react-icons/si";

const skillCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: <FaJava className="w-4 h-4" color="#007396" /> },
      { name: "Python", icon: <FaPython className="w-4 h-4" color="#3776AB" /> },
      { name: "C", icon: <SiC className="w-4 h-4" color="#A8B9CC" /> },
      { name: "SQL", icon: <FaDatabase className="w-4 h-4" color="#e38c00" /> },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4" color="#6DB33F" /> },
      { name: "Hibernate", icon: <SiHibernate className="w-4 h-4" color="#59666C" /> },
      { name: "React JS", icon: <FaReact className="w-4 h-4" color="#61DAFB" /> },
      { name: "Kafka", icon: <SiApachekafka className="w-4 h-4" color="#231F20" /> },
    ],
  },
  {
    label: "Cloud / DevOps",
    skills: [
      { name: "AWS", icon: <FaAws className="w-4 h-4" color="#FF9900" /> },
      { name: "Railway", icon: <SiRailway className="w-4 h-4" color="#0B0D0E" /> },
      { name: "Vercel", icon: <SiVercel className="w-4 h-4" color="#000000" /> },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="w-4 h-4" color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub className="w-4 h-4" color="#181717" /> },
      { name: "Maven", icon: <SiApachemaven className="w-4 h-4" color="#C71A22" /> },
      { name: "Postman", icon: <SiPostman className="w-4 h-4" color="#FF6C37" /> },
      { name: "Eclipse", icon: <SiEclipseide className="w-4 h-4" color="#2C2255" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="w-4 h-4" color="#007ACC" /> },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="w-4 h-4" color="#4479A1" /> },
    ],
  },
];

const Skills = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-6 px-5 sm:px-10 py-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      <h2
        className="text-xl font-bold border-b pb-2"
        style={{ borderColor: "var(--color-border-light)" }}
      >
        Technical Skills
      </h2>

      {skillCategories.map((cat, i) => (
        <div key={i} className="mb-2">
          <h3
            className="text-sm font-bold uppercase mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            {cat.label}
          </h3>
          <div className="flex flex-wrap gap-3">
            {cat.skills.map((skill, j) => (
              <span
                key={j}
                className="flex items-center gap-2 px-3 py-1.5 text-sm cursor-default"
                style={{
                  background: "var(--color-btn-face)",
                  borderTop: "2px solid #ffffff",
                  borderLeft: "2px solid #ffffff",
                  borderBottom: "2px solid var(--color-border-dark)",
                  borderRight: "2px solid var(--color-border-dark)",
                  color: "var(--color-text-dark)",
                }}
              >
                <div className="flex items-center justify-center">
                  {skill.icon}
                </div>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
