import "../css/sliderBar.css";
import "../index.css";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function SliderBar({ backgroundColor, title, desc, img, link }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const randomDuration = Math.random() * (900 - 500) + 500;
  const slideIn = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0%)" },
    reset: inView,
    config: { duration: randomDuration },
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: inView,
    config: { duration: randomDuration },
    slidesPerView: 5, // Reduce the number of visible slides
    slidesPerGroup: 5, // Reduce the number of slides moved per swipe
    loop: false,
  });

  return (
    <div
      ref={ref}
      className={`${inView ? "sliderBar " : ""} d-flex ${backgroundColor}`}
    >
      <animated.div
        style={inView ? { ...slideIn, ...fadeIn } : { opacity: 0 }}
        className="sliderText col-7 d-flex flex-column align-items-center "
      >
        <a
          name=""
          id=""
          className="btn sliderTitle passionFont textColor2 m-0 p-0 h-50 align-items-end"
          href="#"
          role="button"
        >
          <h2 className="sliderTitle passionFont textColor2">{title}</h2>
        </a>
        <div className="d-flex flex-column justify-content-top  h-50">
          <span className="sliderText textColor2 fairFont text-center">
            {desc}
          </span>
        </div>
      </animated.div>
      <animated.div
        style={inView ? { ...slideIn, ...fadeIn } : { opacity: 0 }}
        className="sliderImgContainer col-5"
      >
        <img className="sliderImg" src={img} alt="Slider Image" />
      </animated.div>
    </div>
  );
}

export default SliderBar;
