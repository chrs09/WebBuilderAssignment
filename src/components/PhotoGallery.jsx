import React, { useState, useEffect } from 'react';
import pg1 from '../assets/real-estate-assets/pg1md.jpg';
import pg2 from '../assets/real-estate-assets/pg2md.jpg';
import pg3 from '../assets/real-estate-assets/pg3md.jpg';
import pg4 from '../assets/real-estate-assets/pg4md.jpg';
import pg5 from '../assets/real-estate-assets/pg5md.jpg';
import pg6 from '../assets/real-estate-assets/pg6md.jpg';
import pg7 from '../assets/real-estate-assets/pg7md.jpg';

const images = [pg1, pg2, pg3, pg4, pg5, pg6, pg7];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Photo Gallery</h2>
      <div className="main-image-wrapper">
        <div className="arrow left" onClick={prevSlide}>&lt;</div>
        <img src={images[currentImage]} alt="main" className="main-image" />
        <div className="arrow right" onClick={nextSlide}>&gt;</div>
      </div>
      <div className="thumbnail-container">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className={`thumbnail ${currentImage === idx ? 'active' : ''}`}
            onClick={() => setCurrentImage(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
