const resumeUrl = "/assets/Resume/PreethiResume.pdf";

const Resume = ({ isMaximized }) => {
  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      {/* Embedded PDF viewer — fills the window */}
      <iframe
        src={resumeUrl}
        title="Resume"
        className="flex-1 w-full"
        style={{
          border: "none",
          minHeight: isMaximized ? "calc(100vh - 120px)" : "400px",
        }}
      />
      {/* Fallback download button below iframe */}
      <div
        className="flex justify-center py-2"
        style={{
          borderTop: "1px solid var(--color-border-light)",
          background: "#f0f0ee",
        }}
      >
        <a
          href={resumeUrl}
          download
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-1.5 text-sm"
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

export default Resume;
