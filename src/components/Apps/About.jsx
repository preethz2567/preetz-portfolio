import { useState, useContext } from "react";
import AppContext from "../../context/AppContext";

const communityImages = [
  "/assets/images/community-img1.jpg",
  "/assets/images/community-img2.jpg",
  "/assets/images/community-img3.jpg",
  "/assets/images/community-img4.jpg",
  "/assets/images/community-img5.jpg",
  "/assets/images/community-img6.jpg",
  "/assets/images/community-img7.jpg",
  "/assets/images/community-img8.jpeg",
];

const About = ({ isMaximized }) => {
  const [seeMore, setSeeMore] = useState(false);
  const { openImage } = useContext(AppContext);

  return (
    <div
      className={`flex flex-col gap-7 px-5 sm:px-10 py-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      {/* ─── Hero row ─── */}
      <div className="flex sm:flex-row flex-col sm:gap-8 items-center sm:items-start">
        <img
          src="/assets/images/me.jpeg"
          alt="Preethi D profile photo"
          className="w-[190px] sm:w-[170px] object-cover"
          style={{
            border: "2px solid var(--color-border-light)",
            outline: "1px solid var(--color-border-dark)",
          }}
        />
        <div className="flex flex-col sm:items-start items-center gap-1 mt-4 sm:mt-10">
          <h2
            className={`font-extrabold ${isMaximized ? "text-[40px]" : "text-[28px]"}`}
            style={{ color: "var(--color-text-dark)" }}
          >
            Preethi D
          </h2>
          <h3
            className={`font-bold ${isMaximized ? "text-3xl" : "text-xl"}`}
            style={{ color: "var(--color-accent)" }}
          >
            Software Engineer
          </h3>
          <p
            className="text-base mt-1"
            style={{ color: "var(--color-text-dark)" }}
          >
            📍 Tamil Nadu, India
          </p>
        </div>
      </div>

      {/* ─── About Bio ─── */}
      <div>
        <h4
          className="font-bold text-base uppercase mb-2"
          style={{ color: "var(--color-accent)" }}
        >
          About Me
        </h4>
        <p className="text-base leading-relaxed">
          Systems-oriented Software developer with a strong foundation in Software Engineering fundamentals. Experienced in building, debugging applications and integrating RESTful services, database-backend applications, and event-driven workflows through hands-on projects. Interested in reliable system design, clean architecture, and disciplined debugging to deliver predictable, scalable software.
        </p>
        {seeMore && (
          <>
            <p className="text-base leading-relaxed mt-4">
              I am currently pursuing my B.E. in Computer Science and Engineering at Saveetha Engineering College, Chennai (2024–2028).I thrive on the challenges that come with building innovative applications.
            </p>
            <p className="text-base leading-relaxed mt-4">
              Lastly, I am a huge fan of working with like-minded individuals, as
              I firmly believe that one's surroundings greatly influence their
              personal and professional growth.
            </p>
          </>
        )}
        <button
          className="mt-4 px-3 py-1 text-sm bg-gray-200 border border-gray-400 hover:bg-gray-300 transition-colors"
          style={{
            background: "var(--color-btn-face)",
            color: "var(--color-text-light)",
            borderTop: "2px solid #fff",
            borderLeft: "2px solid #fff",
            borderBottom: "2px solid var(--color-border-dark)",
            borderRight: "2px solid var(--color-border-dark)",
          }}
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "Show Less" : "See More..."}
        </button>
      </div>

      {/* ─── Community Involvement ─── */}
      <div>
        <h4
          className="font-bold text-base uppercase mb-1"
          style={{ color: "var(--color-accent)" }}
        >
          Community Involvement
        </h4>
        <p className="text-base mb-3" style={{ color: "#555" }}>
          Active participation in tech community meetups and events.
        </p>
        <div className="photo-grid">
          {communityImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Community event photo ${i + 1}`}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImage(src, communityImages)}
            />
          ))}
        </div>
      </div>

      {/* ─── Download Resume ─── */}
      <div className="flex justify-center pb-4">
        <a
          href="/assets/Resume/PreethiResume.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm"
          style={{
            border: "1px solid var(--color-border-dark)",
            background: "var(--color-btn-face)",
            color: "var(--color-text-light)",
            textDecoration: "none",
          }}
        >
          ⬇ Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
