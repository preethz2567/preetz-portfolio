import React from 'react';

const mockPosts = [
  {
    date: "August 20, 2026",
    content: "I'm thrilled to share that I've just published a new article about my journey with Spring Boot and microservices architecture! Check out how I solved common latency issues in my latest project.",
    likes: 42,
    comments: 5
  },
  {
    date: "August 15, 2026",
    content: "Just earned my Oracle Certified Professional: Java SE 21 Developer certification! It was a challenging exam, but I learned so much about modern Java features along the way.",
    likes: 120,
    comments: 18
  },
  {
    date: "July 30, 2026",
    content: "Completed the JPMorganChase Software Engineering Job Simulation. Hands-on experience building backend systems with Kafka was incredible. Highly recommend this for anyone wanting real-world backend practice.",
    likes: 85,
    comments: 12
  }
];

const Posts = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-5 px-5 sm:px-10 py-6 h-full overflow-y-auto ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      <div className="flex justify-between items-center border-b pb-2" style={{ borderColor: "var(--color-border-light)" }}>
        <h2 className="text-2xl font-bold">LinkedIn Feed</h2>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="px-3 py-1 text-sm font-bold bg-[#0a66c2] text-white hover:bg-[#004182]" style={{ textDecoration: "none", border: "1px solid #000" }}>Connect</a>
      </div>

      {mockPosts.map((post, i) => (
        <div
          key={i}
          className="p-4 flex flex-col gap-3"
          style={{
            border: "1px solid var(--color-border-light)",
            background: "#ffffff",
            boxShadow: "2px 2px 0px rgba(0,0,0,0.1)"
          }}
        >
          <div className="flex gap-3 items-center mb-1">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-gray-400 overflow-hidden">
               <img src="/assets/images/me-main.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm">Preethi Durgaprasad</div>
              <div className="text-xs text-gray-500">{post.date} • 🌐</div>
            </div>
          </div>
          
          <p className="text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {post.content}
          </p>

          <div className="flex gap-4 mt-2 pt-2 border-t border-gray-200 text-xs font-bold text-gray-600">
            <span className="flex items-center gap-1 cursor-pointer hover:text-[#0a66c2]">👍 {post.likes} Likes</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-[#0a66c2]">💬 {post.comments} Comments</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
