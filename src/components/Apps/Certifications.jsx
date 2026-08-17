const certs = [
  {
    title: "Oracle Certified Professional: Java SE 21 Developer",
    issuer: "Oracle",
    date: "November 2025",
    credentialLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C4E5128DEB5BA10E25D9302F14A08F4C496E416281260C6145F322AE6118AECA",
    imagePath: "/assets/Certificates/Java_Oracle%20Certificate.jpg",
    learnt: "Mastered core Java SE 21 concepts including records, sealed classes, pattern matching, and virtual threads. Gained deep knowledge of OOP, generics, concurrency, and JVM internals.",
  },
  {
    title: "JPMorganChase Software Engineering Job Simulation",
    issuer: "Forage / JPMorganChase",
    date: "January 2026",
    credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_z2adLihTnFkJrvrAy_1769088241559_completion_certificate.pdf",
    imagePath: "/assets/Certificates/JPMorganForage.jpg",
    learnt: "Built backend components using Spring Boot and Kafka. Implemented transaction processing and incentive services. Debugged real-world integration issues using logs and breakpoints.",
  },
  {
    title: "Object Oriented Programming in Java",
    issuer: "IBM / CourseEra",
    date: "January 2025",
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/7F57YW0Z21ST",
    imagePath: "/assets/Certificates/IBM-Oops%20JAVA.jpg",
    learnt: "[Mastered core OOP principles in Java: classes/objects, inheritance, polymorphism, encapsulation, abstraction, plus interfaces and abstract classes.]",
  },
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Deloitte/Forage",
    date: "June 2026",
    credentialLink: "https://drive.google.com/file/d/11L-WYpvvnBmthPxhI4IPNfmdQ2mjq9sG/view?usp=sharing",
    imagePath: "/assets/Certificates/Deloitte%20Tech%20Job%20Simulation%20-%20Certficate%20Of%20Completion.jpg",
    learnt: "[Completed a job simulation involving development and coding, Wrote a proposal for creating a dashboard ]",
  },
  {
    title: "Oracle Cloud Infrastructure Certificate",
    issuer: "Oracle",
    date: "",
    credentialLink: null,
    imagePath: "/assets/Certificates/Preethi%20D%20-%20Oracle%20Cloud%20Infrastructure%20Certificate.jpg",
    learnt: "Gained foundational knowledge of Oracle Cloud Infrastructure services, networking, and cloud architecture.",
  }
];

const Certifications = ({ isMaximized }) => {
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
        Certifications
      </h2>

      {certs.map((cert, i) => (
        <div
          key={i}
          className="p-4 flex flex-col gap-3"
          style={{
            border: "1px solid var(--color-border-light)",
            background: "#fafaf9",
          }}
        >
          {/* Header Row */}
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5" style={{ flexShrink: 0 }}>🏅</span>
            <div className="flex-1">
              <h3 className="font-bold text-base mb-0.5">{cert.title}</h3>
              <p className="text-sm" style={{ color: "var(--color-accent)" }}>
                {cert.issuer}
              </p>
              <p className="text-sm mt-1" style={{ color: "#888" }}>
                {cert.date}
              </p>
            </div>
          </div>

          {/* What I learnt */}
          <p className="text-sm leading-relaxed italic px-1" style={{ color: "#555", borderLeft: "2px solid var(--color-border-light)", paddingLeft: "8px" }}>
            {cert.learnt}
          </p>

          {/* Buttons Row */}
          <div className="flex gap-2 flex-wrap">
            {cert.credentialLink && (
              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 text-xs font-bold"
                style={{
                  background: "var(--color-accent)",
                  color: "#fff",
                  textDecoration: "none",
                  border: "1px solid var(--color-border-dark)",
                }}
              >
                🔗 View Credential
              </a>
            )}
            {cert.imagePath && (
              <a
                href={cert.imagePath}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 text-xs font-bold"
                style={{
                  background: "var(--color-btn-face)",
                  color: "var(--color-text-light)",
                  textDecoration: "none",
                  border: "1px solid var(--color-border-dark)",
                }}
              >
                🖼️ View Certificate
              </a>
            )}
          </div>
          
          {cert.imagePath && (
            <div className="mt-3" style={{ border: "1px solid var(--color-border-dark)" }}>
              <img
                src={cert.imagePath}
                alt={`${cert.title} Certificate`}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Certifications;
