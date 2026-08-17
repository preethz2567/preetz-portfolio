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

const ClippySVG = () => (
  <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Paperclip body */}
    <path d="M 28 60 L 28 20 C 28 10 42 10 42 20 L 42 55 C 42 70 20 70 20 55 L 20 25 C 20 20 30 20 30 25 L 30 50" stroke="#a0a0a0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 28 60 L 28 20 C 28 10 42 10 42 20 L 42 55 C 42 70 20 70 20 55 L 20 25 C 20 20 30 20 30 25 L 30 50" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Eyes */}
    <ellipse cx="27" cy="20" rx="6" ry="8" fill="white" stroke="black" strokeWidth="1.5" />
    <ellipse cx="40" cy="22" rx="5" ry="7" fill="white" stroke="black" strokeWidth="1.5" />
    
    {/* Pupils */}
    <circle cx="29" cy="20" r="2.5" fill="black" />
    <circle cx="38" cy="22" r="2" fill="black" />
    
    {/* Eyebrows */}
    <path d="M 20 10 Q 27 5 33 11" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M 36 12 Q 41 8 46 15" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
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
        <ClippySVG />
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
