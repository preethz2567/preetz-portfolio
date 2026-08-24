import { useContext, useMemo } from "react";
import AppContext from "../../context/AppContext";

const hackathons = [
  {
    placement: "🏆 Winner",
    name: "Ossome Hacks 3.0",
    organizer: "GitHub Community SRM",
    year: "2026",
    images: [
      "/assets/images/hackathon1-%20img1.jpg",
      "/assets/images/hackathon1-img2.jpg",
      "/assets/images/hackathon1-img3.jpg",
      "/assets/images/hackathon1-img4.jpg",
    ],
  },
  {
    placement: "🏆 Winner",
    name: "Codeathon 4.0",
    organizer: "Prathyusha Engineering College",
    year: "",
    longDescription: "My first-ever external hackathon experience ended with a 1st Prize victory! This event taught me a crucial lesson: step out of your comfort zone, ignore the noise in the room, and focus purely on observing, learning, and building something excellent.",
    images: [
      "/assets/images/hackathon2%20-%20img1.jpg",
      "/assets/images/hackathon2-img2.jpg",
      "/assets/images/hackathon2-img3.jpg",
      "/assets/images/hackathon2-img4.jpg",
    ],
  },
  {
    placement: "🏆 Winner",
    name: "TechXora",
    organizer: "Agni Institute of Technology",
    year: "",
    images: [
      "/assets/images/hackathon3-img1.jpg",
      "/assets/images/hackathon3-img2.jpg",
      "/assets/images/hackathon3-img3.jpg",
      "/assets/images/hackathon3-img4.jpg",
    ],
  },
  {
    placement: "🏆 Winner",
    name: "Hack Hustle",
    organizer: "Saveetha Engineering College",
    year: "",
    longDescription: "Collaborated with a brilliant team of four to build a winning solution, securing 1st Prize and a ₹20,000 cash award. My biggest takeaway? The code is only as strong as its foundation—always map out the architecture before writing a single line.",
    images: [
      "/assets/images/hackathon4-img1.jpg",
      "/assets/images/hackathon4-img2.jpg",
      "/assets/images/hackathon4-img3.jpg",
      "/assets/images/hackathon4-img4.jpg",
    ],
  },
  {
    name: "TechRitz, RIT Institute of Technology",
    description:
      "Participation.",
    images: [
      "/assets/images/hackathon5-img1.jpeg",
      "/assets/images/hackathon5-img2.jpeg",
    ],
  },
  {
    name: "IBM Datathon by Shooting Stars Foundation",
    description:
      "Data science and analytics competition.",
    images: [
      "/assets/images/hackathon6-img1.jpeg",
      "/assets/images/hackathon6-img2.jpeg",
    ],
  },
  {
    name: "Smart India Hackathon, SIH2025 Internal Round",
    description:
      "National level hackathon internal selection round.",
    images: [
      "/assets/images/hackathon7-img1.jpeg",
      "/assets/images/hackathon7-img2.jpeg",
      "/assets/images/hackathon7-img3.jpeg",
    ],
  },
  {
    placement: "🏆 1st Prize",
    name: "SheBuilds x CCCL Hack",
    organizer: "Intellexa REC, powered by Claude Code Central London",
    year: "2026",
    longDescription: "All women hackathon. Built Muthirai, an enterprise-grade brand identity enforcement and drift analytics platform acting as a cryptographic seal of authenticity.",
    images: [
      "/assets/images/hackathon8-img1.jpg",
      "/assets/images/hackathon8-img2.jpg",
      "/assets/images/hackathon8-img3.jpg",
    ],
  },
];

const Hackathons = ({ isMaximized }) => {
  const { openImage } = useContext(AppContext);

  const shuffledHackathons = useMemo(() => {
    return [...hackathons].sort(() => Math.random() - 0.5);
  }, []);

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
        Hackathons
      </h2>

      {shuffledHackathons.map((h, i) => (
        <div
          key={i}
          className="p-4"
          style={{
            border: "1px solid var(--color-border-light)",
            background: "#fafaf9",
          }}
        >
          <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
            <div>
              <span
                className="trophy-badge mr-2"
                style={{ fontSize: "12px" }}
              >
                {h.placement}
              </span>
              <span className="font-bold text-lg">{h.name}</span>
              {h.year && (
                <span className="text-sm ml-2" style={{ color: "#666" }}>
                  ({h.year})
                </span>
              )}
            </div>
          </div>
          <p
            className="text-base mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            {h.organizer}
          </p>
          <div className="photo-strip" style={{ gap: "12px" }}>
            {h.images.map((src, j) => (
              <img 
                key={j} 
                src={src} 
                alt={`${h.name} photo ${j + 1}`} 
                style={{ height: "280px", minWidth: "220px", objectFit: "cover", border: "2px solid var(--color-border-light)", cursor: "pointer", flexShrink: 0 }}
                className="hover:opacity-80 transition-opacity"
                onClick={() => openImage(src, h.images)}
              />
            ))}
          </div>
          <div className="mt-4">
            <p className="text-base italic" style={{ color: "#888" }}>
              {h.longDescription ? h.longDescription : "[Add your hackathon experience description here...]"}
            </p>
            {h.linkedinUrl && (
              <a
                href={h.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 px-3 py-1 text-xs font-bold"
                style={{
                  background: "var(--color-accent)",
                  color: "#fff",
                  textDecoration: "none",
                  border: "1px solid var(--color-border-dark)",
                }}
              >
                🔗 View Post on LinkedIn
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hackathons;
