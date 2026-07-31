const presidioImages = [
  "/assets/images/intern1-img1.jpg",
  "/assets/images/intern1-img2.jpg",
  "/assets/images/intern1-img3.jpg",
  "/assets/images/intern1-img4.jpg",
  "/assets/images/intern1-img5.jpg",
  "/assets/images/intern1-img6.jpg",
];

import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Experience = ({ isMaximized }) => {
  const { openImage } = useContext(AppContext);
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
        Work Experience
      </h2>

      {/* Presidio */}
      <div
        className="p-4"
        style={{
          border: "1px solid var(--color-border-light)",
          background: "#fafaf9",
        }}
      >
        <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
          <h3 className="font-bold text-lg">Software Development Engineering Intern</h3>
          <span
            className="text-xs px-2 py-0.5"
            style={{ background: "var(--color-accent)", color: "#fff" }}
          >
            2026 · 2 months
          </span>
        </div>
        <p
          className="text-base font-semibold mb-2"
          style={{ color: "var(--color-accent)" }}
        >
          Presidio
        </p>
        <p className="text-base mb-3">
          Structured SDE training program covering enterprise software development
          practices and tooling.
        </p>
        <div className="mt-2 text-base italic" style={{ color: "#888" }}>
          <ul className="list-disc ml-5 space-y-1">
            <li>Completed a structured, mentor-led software engineering internship with hands-on experience across backend development, frontend engineering, DevOps, cloud infrastructure, and AI/LLM integration.</li>
            <li>Designed and delivered full-stack applications applying modern software engineering best practices.</li>
            <li>Built and integrated microservices, implemented CI/CD pipelines, containerised applications with Docker, and deployed solutions on AWS.</li>
            <li>Collaborated in an Agile development environment, contributing to feature development, testing, debugging, and deployment across multiple project iterations.</li>
          </ul>
        </div>
        {/* Photo strip */}
        <div className="photo-strip mt-2">
          {presidioImages.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`Presidio internship photo ${i + 1}`} 
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImage(src, presidioImages)}
            />
          ))}
        </div>
      </div>

      {/* IntakeOff.AI */}
      <div
        className="p-4"
        style={{
          border: "1px solid var(--color-border-light)",
          background: "#fafaf9",
        }}
      >
        <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
          <h3 className="font-bold text-lg">SDE Intern</h3>
          <span
            className="text-xs px-2 py-0.5"
            style={{ background: "var(--color-accent)", color: "#fff" }}
          >
            Apr – May 2026
          </span>
        </div>
        <p
          className="text-base font-semibold mb-2"
          style={{ color: "var(--color-accent)" }}
        >
          IntakeOff.AI
        </p>
        <p className="text-base mb-3">
          Early-stage AI startup — CI/CD pipelines, Railway &amp; Vercel
          deployments, GitHub branch management.
        </p>
        <div className="mt-2 text-base italic" style={{ color: "#888" }}>
          <ul className="list-disc ml-5 space-y-1">
            <li>Managed the complete DevOps lifecycle, implementing CI/CD pipelines using GitHub Actions and automating deployments with Railway and Vercel.</li>
            <li>Containerised applications with Docker to ensure consistent development and production environments.</li>
            <li>Diagnosed and resolved production issues, improving application stability and deployment reliability.</li>
            <li>Established and maintained a GitHub branching strategy with a protected main branch, enforcing pull request workflows and automated CI validation before merges.</li>
          </ul>
        </div>
        
        {/* Photo strip for IntakeOff */}
        <div className="photo-strip mt-2">
          {["/assets/images/intern2-img1.png"].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`IntakeOff internship photo ${i + 1}`}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImage(src, ["/assets/images/intern2-img1.png"])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
