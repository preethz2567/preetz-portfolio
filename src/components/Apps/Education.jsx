const educationImages = {
  college: [
    "/assets/images/edu-college1.jpeg",
    "/assets/images/edu-college2.jpeg",
    "/assets/images/edu-college3.jpeg",
  ],
  school: [
    "/assets/images/edu-school1.jpeg",
    "/assets/images/edu-school2.jpeg",
    "/assets/images/edu-school3.jpeg",
    "/assets/images/edu-school4.jpeg",
  ],
};

import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Education = ({ isMaximized }) => {
  const { openImage } = useContext(AppContext);

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
        Education
      </h2>

      {/* BE */}
      <div
        className="p-4"
        style={{
          border: "1px solid var(--color-border-light)",
          background: "#fafaf9",
        }}
      >
        <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
          <h3 className="font-bold text-base">
            B.E. Computer Science and Engineering
          </h3>
          <span
            className="text-xs px-2 py-0.5"
            style={{ background: "var(--color-accent)", color: "#fff" }}
          >
            2024 – 2028
          </span>
        </div>
        <p
          className="text-sm font-semibold mb-1"
          style={{ color: "var(--color-accent)" }}
        >
          Saveetha Engineering College, Chennai
        </p>
        <p className="text-sm mb-2">
          CGPA <span className="font-bold">9.6 / 10</span>
        </p>
        <p className="text-sm italic mb-3" style={{ color: "#666" }}>
          [Alongside academics, I actively participate in technical communities, internships, and personal projects that strengthen my practical software engineering skills. I enjoy turning ideas into scalable applications while continuously learning new technologies.]
        </p>

        {/* College photos */}
        <div className="photo-strip">
          {educationImages.college.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`College photo ${i + 1}`}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImage(src, educationImages.college)}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          ))}
        </div>
      </div>

      {/* Class XII */}
      <div
        className="p-4"
        style={{
          border: "1px solid var(--color-border-light)",
          background: "#fafaf9",
        }}
      >
        <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
          <h3 className="font-bold text-base">CBSE Class XII</h3>
          <span
            className="text-xs px-2 py-0.5"
            style={{ background: "var(--color-accent)", color: "#fff" }}
          >
            Completed
          </span>
        </div>
        <p
          className="text-sm font-semibold mb-1"
          style={{ color: "var(--color-accent)" }}
        >
          St. John's Senior Secondary School, Chennai
        </p>
        <p className="text-sm mb-2">
          Score <span className="font-bold">90.6%</span>
        </p>
        <p className="text-sm italic mb-3" style={{ color: "#666" }}>
          [Spent 14 years at St. John's Senior Secondary School, where I developed strong academic foundations, leadership skills, and lifelong friendships. My school years shaped my discipline, confidence, and passion for continuous learning.]
        </p>

        {/* School photos */}
        <div className="photo-strip">
          {educationImages.school.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`School photo ${i + 1}`}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImage(src, educationImages.school)}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
