import React from "react";
import "./PhotoStrip.css";

const rawImages = import.meta.glob('/public/assets/images/*.{jpg,jpeg,png}', { eager: true });
const allImages = Object.keys(rawImages).map(path => path.replace('/public', ''));

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Shuffle the images and then duplicate to create a seamless loop
const shuffledAll = shuffle([...allImages]);
const half = Math.floor(shuffledAll.length / 2);
const part1 = shuffledAll.slice(0, half);
const part2 = shuffledAll.slice(half);

const strip1Images = [...part1, ...part1, ...part1];
const strip2Images = [...part2, ...part2, ...part2];

const PhotoStrip = () => {
  return (
    <div className="photostrip-container pointer-events-none opacity-40">
      <div className="photostrip-track strip-1">
        {strip1Images.map((src, i) => (
          <div key={i} className="photostrip-item">
            <img src={src} alt="strip 1" />
          </div>
        ))}
      </div>
      <div className="photostrip-track strip-2">
        {strip2Images.map((src, i) => (
          <div key={i} className="photostrip-item">
            <img src={src} alt="strip 2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoStrip;
