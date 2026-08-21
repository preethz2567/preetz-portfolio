import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tips = [
  "It looks like you're trying to hire a Software Engineer! Have you checked out my Resume app?",
  "Did you know you can drag the windows around the screen?",
  "Try playing Tic Tac Toe! I heard the bot is pretty smart.",
  "You can double-click the icons on the desktop to open them.",
  "Check out my GitHub and LinkedIn by clicking the Socials icon!",
  "My skills are listed in the Skills app. I know a lot about React and JavaScript!",
  "Don't forget to look at my Hackathon experiences!",
];

const PixelPCSVG = () => (
  <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    {/* Monitor Case */}
    <rect x="8" y="16" width="48" height="40" rx="2" fill="#c0c0c0" stroke="#000000" strokeWidth="2" />
    
    {/* Screen */}
    <rect x="14" y="22" width="36" height="26" fill="#008080" stroke="#000000" strokeWidth="2" />
    
    {/* Screen Glare */}
    <polygon points="16,24 24,24 16,32" fill="#ffffff" opacity="0.3" />

    {/* Monitor Stand */}
    <rect x="24" y="56" width="16" height="8" fill="#c0c0c0" stroke="#000000" strokeWidth="2" />
    <rect x="16" y="64" width="32" height="6" rx="1" fill="#c0c0c0" stroke="#000000" strokeWidth="2" />
    <line x1="24" y1="58" x2="40" y2="58" stroke="#a0a0a0" strokeWidth="2" />

    {/* Cute Face */}
    {/* Eyes */}
    <rect x="22" y="30" width="4" height="4" fill="#ffffff" />
    <rect x="38" y="30" width="4" height="4" fill="#ffffff" />
    
    {/* Blush */}
    <rect x="18" y="34" width="4" height="4" fill="#ff69b4" opacity="0.6" />
    <rect x="42" y="34" width="4" height="4" fill="#ff69b4" opacity="0.6" />

    {/* Mouth */}
    <rect x="26" y="38" width="4" height="2" fill="#ffffff" />
    <rect x="30" y="40" width="4" height="2" fill="#ffffff" />
    <rect x="34" y="38" width="4" height="2" fill="#ffffff" />

    {/* Disk Drive & Buttons */}
    <rect x="40" y="50" width="10" height="2" fill="#000000" />
    <circle cx="16" cy="51" r="1.5" fill="#000000" />
    <circle cx="20" cy="51" r="1.5" fill="#000000" />
  </svg>
);

const Clippy = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showMessage, setShowMessage] = useState(true);
  const [currentTip, setCurrentTip] = useState(tips[0]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setShowMessage(true);
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
      
      // Auto-hide the message after 8 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 8000);
    }, 20000); // New tip every 20 seconds

    // Initial hide
    const initialHide = setTimeout(() => {
      setShowMessage(false);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialHide);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-14 right-4 z-[100] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-2 mr-6 pointer-events-auto"
          >
            <div 
              className="relative p-4 max-w-[220px] shadow-lg text-sm"
              style={{
                background: "#ffffcc",
                color: "black",
                border: "1px solid black",
                borderRadius: "8px",
                fontFamily: "'MS Sans Serif', sans-serif"
              }}
            >
              <p>{currentTip}</p>
              
              {/* Speech bubble tail */}
              <div 
                className="absolute w-4 h-4 bg-[#ffffcc] border-r border-b border-black transform rotate-45"
                style={{ bottom: "-8px", right: "20px" }}
              />

              <button 
                onClick={() => setShowMessage(false)}
                className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-black"
                title="Dismiss"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto cursor-pointer" onClick={() => {
        if (!showMessage) {
          setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
          setShowMessage(true);
        }
      }}>
        <PixelPCSVG />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="absolute bottom-0 right-0 text-[10px] bg-gray-200 border border-gray-400 px-1 opacity-0 hover:opacity-100 transition-opacity"
        >
          Hide
        </button>
      </div>
    </div>
  );
};

export default Clippy;
