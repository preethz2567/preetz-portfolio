const competitions = [
  {
    placement: "🥈 Finalist",
    name: "Fynergy 2025",
    organizer: "IIT Madras",
    year: "2025",
    images: [
      "/assets/images/competition1-img1.jpg",
      "/assets/images/competition1-img2.jpg",
      "/assets/images/competition1-img3.jpg",
    ],
  },
];

const Competitions = ({ isMaximized }) => {
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
        Competitions
      </h2>

      <p
        className="text-xs italic"
        style={{ color: "#888" }}
      >
        Competitions are distinct from hackathons — these are structured technical
        contests, not build-sprint events.
      </p>

      {competitions.map((c, i) => (
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
                style={{ fontSize: "12px", background: "#7a8a6a" }}
              >
                {c.placement}
              </span>
              <span className="font-bold text-base">{c.name}</span>
              {c.year && (
                <span className="text-xs ml-2" style={{ color: "#666" }}>
                  ({c.year})
                </span>
              )}
            </div>
          </div>
          <p
            className="text-sm mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            {c.organizer}
          </p>
          <div className="photo-strip">
            {c.images.map((src, j) => (
              <img key={j} src={src} alt={`${c.name} photo ${j + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Competitions;
