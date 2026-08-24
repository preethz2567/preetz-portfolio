import { useContext, useMemo } from "react";
import AppContext from "../../context/AppContext";

// Dynamically import all hackathon images from the public folder
const rawImages = import.meta.glob('/public/assets/images/hackathon*.{jpg,jpeg,png}', { eager: true });
// Clean up the paths to be usable as src URLs
const allImageUrls = Object.keys(rawImages).map(path => path.replace('/public', ''));

const hackathons = [
  {
    prefix: "hackathon1",
    placement: "🏆 Winner",
    name: "Ossome Hacks 3.0",
    organizer: "GitHub Community SRM",
    year: "2026",
  },
  {
    prefix: "hackathon2",
    placement: "🏆 Winner",
    name: "Codeathon 4.0",
    organizer: "Prathyusha Engineering College",
    year: "",
    longDescription: "My first-ever external hackathon experience ended with a 1st Prize victory! This event taught me a crucial lesson: step out of your comfort zone, ignore the noise in the room, and focus purely on observing, learning, and building something excellent.",
  },
  {
    prefix: "hackathon3",
    placement: "🏆 Winner",
    name: "TechXora",
    organizer: "Agni Institute of Technology",
    year: "",
  },
  {
    prefix: "hackathon4",
    placement: "🏆 Winner",
    name: "Hack Hustle",
    organizer: "Saveetha Engineering College",
    year: "",
    longDescription: "Collaborated with a brilliant team of four to build a winning solution, securing 1st Prize and a ₹20,000 cash award. My biggest takeaway? The code is only as strong as its foundation—always map out the architecture before writing a single line.",
  },
  {
    prefix: "hackathon5",
    name: "TechRitz, RIT Institute of Technology",
    description: "Participation.",
  },
  {
    prefix: "hackathon6",
    name: "IBM Datathon by Shooting Stars Foundation",
    description: "Data science and analytics competition.",
  },
  {
    prefix: "hackathon7",
    name: "Smart India Hackathon, SIH2025 Internal Round",
    description: "National level hackathon internal selection round.",
  },
  {
    prefix: "hackathon8",
    placement: "🏆 1st Prize",
    name: "SheBuilds x CCCL Hack",
    organizer: "Intellexa REC, powered by Claude Code Central London",
    year: "2026",
    longDescription: "All women hackathon. Built Muthirai, an enterprise-grade brand identity enforcement and drift analytics platform acting as a cryptographic seal of authenticity.",
  },
];

const Hackathons = ({ isMaximized }) => {
  const { openImage } = useContext(AppContext);

  // Map the dynamically loaded images to each hackathon
  const hackathonsWithImages = useMemo(() => {
    return hackathons.map((h) => {
      // Find all images that match this hackathon's prefix
      const images = allImageUrls.filter(url => url.includes(`/assets/images/${h.prefix}-`));
      return { ...h, images };
    });
  }, []);

  const shuffledHackathons = useMemo(() => {
    return [...hackathonsWithImages].sort(() => Math.random() - 0.5);
  }, [hackathonsWithImages]);

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
