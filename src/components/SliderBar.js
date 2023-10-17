import "../css/sliderBar.css";
import "../index.css";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

function SliderBar({ backgroundColor, title, desc, img, link }) {
  const randomDuration = Math.random() * (900 - 500) + 500;
  const slideIn = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0)" },
    config: { duration: randomDuration },
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: randomDuration },
  });
  return (
    <animated.div
      style={{
        ...slideIn,
        ...fadeIn,
      }}
      className={`sliderBar d-flex ${backgroundColor}`}
    >
      <div className="sliderText col-7 d-flex flex-column align-items-center ">
        <a
          name=""
          id=""
          class="btn sliderTitle passionFont textColor2 m-0 p-0 h-50 align-items-end"
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
      </div>
      <div className="sliderImgContainer col-5">
        <img className="sliderImg" src={img} alt="Slider Image" />
      </div>
    </animated.div>
  );
}

export default SliderBar;
