import { useState } from 'react'
import  './SliderForImage.css'
export default function SliderForImage({allImages}) {
      const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
   <div className="slider-container">
      <button className="slider-btn left" onClick={goToPrevious}>
        &#10094;
      </button>

      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {allImages.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index}`} className="slide" />
          ))}
        </div>
      </div>

      <button className="slider-btn right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  )
}
