import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const ImageViewer = () => {
  const { state, closeImage, nextImage, prevImage } = useContext(AppContext);
  
  if (!state.activeImage) return null;

  const hasMultiple = state.activeImageList && state.activeImageList.length > 1;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 sm:p-10"
      onClick={closeImage}
    >
      <div 
        className="relative max-w-full max-h-full flex flex-col items-end"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image wrapper
      >
        <button 
          onClick={closeImage}
          className="mb-2 px-3 py-1 font-bold text-sm shadow-[inset_1px_1px_0px_white,inset_-1px_-1px_0px_#000] active:shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_white]"
          style={{ background: "var(--color-btn-face)", color: "#ffffff", border: "1px solid var(--color-border-dark)" }}
        >
          X Close
        </button>
        <div className="relative flex items-center justify-center">
          {hasMultiple && (
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute -left-12 sm:-left-20 text-white text-4xl sm:text-6xl hover:text-gray-300 drop-shadow-md z-10 p-4"
            >
              &#8249;
            </button>
          )}
          <img 
            src={state.activeImage} 
            alt="Maximized view" 
            className="max-w-full max-h-[85vh] object-contain border-[1px] border-black shadow-2xl" 
          />
          {hasMultiple && (
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute -right-12 sm:-right-20 text-white text-4xl sm:text-6xl hover:text-gray-300 drop-shadow-md z-10 p-4"
            >
              &#8250;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
