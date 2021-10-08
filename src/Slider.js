import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./App.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => { //if length-1 this is last slide so returns to 0= first slide continuous loop
    setCurrent(current === length - 1 ? 0 : current + 1); //else current + next in array
  };

  const prevSlide = () => {  //if current is first slide count backwards in array from first 
    setCurrent(current === 0 ? length - 1 : current - 1); //else count backwards from slide your on now
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null; //in case no array or no slides
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt={slide.alt} className="images" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
