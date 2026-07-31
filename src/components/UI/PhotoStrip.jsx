import React from "react";
import "./PhotoStrip.css";

const allImages = [
  "/assets/images/community-img1.jpg",
  "/assets/images/community-img2.jpg",
  "/assets/images/community-img3.jpg",
  "/assets/images/community-img4.jpg",
  "/assets/images/community-img5.jpg",
  "/assets/images/community-img6.jpg",
  "/assets/images/community-img7.jpg",
  "/assets/images/hackathon1- img1.jpg",
  "/assets/images/hackathon1-img2.jpg",
  "/assets/images/hackathon1-img3.jpg",
  "/assets/images/hackathon1-img4.jpg",
  "/assets/images/hackathon2 - img1.jpg",
  "/assets/images/hackathon2-img2.jpg",
  "/assets/images/hackathon2-img3.jpg",
  "/assets/images/hackathon2-img4.jpg",
  "/assets/images/hackathon3-img1.jpg",
  "/assets/images/hackathon3-img2.jpg",
  "/assets/images/hackathon3-img3.jpg",
  "/assets/images/hackathon3-img4.jpg",
  "/assets/images/intern1-img1.jpg",
  "/assets/images/intern1-img2.jpg",
  "/assets/images/intern1-img3.jpg",
  "/assets/images/intern2-img1.png",
  "/assets/images/hackathon5-img1.jpeg",
  "/assets/images/hackathon5-img2.jpeg",
  "/assets/images/hackathon6-img1.jpeg",
  "/assets/images/hackathon6-img2.jpeg",
  "/assets/images/hackathon7-img1.jpeg",
  "/assets/images/hackathon7-img2.jpeg",
  "/assets/images/hackathon7-img3.jpeg",
  "/assets/images/community-img8.jpeg",
];

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
