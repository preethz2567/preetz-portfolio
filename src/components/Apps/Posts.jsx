import React from 'react';

const embeddedPosts = [
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7448826980411547648",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7457121223416631296",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7441086346661797888"
];

const Posts = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-6 px-5 sm:px-10 py-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      <div className="flex justify-between items-center border-b pb-2 mb-2" style={{ borderColor: "var(--color-border-light)" }}>
        <h2 className="text-2xl font-bold">LinkedIn Feed</h2>
        <a href="https://linkedin.com/in/preethidurgaprasad67" target="_blank" rel="noreferrer" className="px-3 py-1 text-sm font-bold bg-[#0a66c2] text-white hover:bg-[#004182]" style={{ textDecoration: "none", border: "1px solid #000" }}>Connect</a>
      </div>

      <div className="flex flex-col gap-8 items-center w-full">
        {embeddedPosts.map((iframeUrl, i) => (
          <div 
            key={i} 
            className="w-full max-w-[504px] flex justify-center bg-white"
            style={{
              border: "1px solid var(--color-border-light)",
              boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
              minHeight: "500px"
            }}
          >
            <iframe
              src={iframeUrl}
              height="800"
              width="100%"
              frameBorder="0"
              allowFullScreen=""
              title={`Embedded post ${i+1}`}
              className="w-full bg-white"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
