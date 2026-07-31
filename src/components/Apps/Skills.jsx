const skillCategories = [
  {
    label: "Languages",
    skills: ["Java", "Python", "C", "SQL"],
  },
  {
    label: "Frameworks",
    skills: [
      "Spring Boot",
      "Spring Data JPA / Hibernate",
      "React JS",
      "Kafka (Producer-Consumer)",
    ],
  },
  {
    label: "Cloud / DevOps",
    skills: ["AWS (EC2, S3, IAM, CloudWatch)", "Railway", "Vercel"],
  },
  {
    label: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "Eclipse IDE",
      "VS Code",
    ],
  },
  {
    label: "Database",
    skills: ["MySQL"],
  },
];

const Skills = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-5 px-5 sm:px-10 py-6 h-full overflow-y-auto ${
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
        <div key={i}>
          <h3
            className="text-sm font-bold uppercase mb-2"
            style={{ color: "var(--color-accent)" }}
          >
            {cat.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, j) => (
              <span
                key={j}
                className="px-3 py-1 text-sm"
                style={{
                  background: "#e8e8e6",
                  border: "1px solid var(--color-border-light)",
                  color: "var(--color-text-dark)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
