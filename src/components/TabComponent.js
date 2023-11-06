import { Spring } from "react-spring";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import "../css/tab.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";

function TabComponent({ items }) {
  useEffect(() => {
    function createStars() {
      const container = document.querySelector(".starContainer");

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        container.appendChild(star);
      }
    }

    createStars();
  });

  return (
    <div className="tabComponent backgroundColor4 mt-5  pb-3">
      <div class="starContainer backgroundColor1"></div>
      <div className="tabTitle title text-center row px-4 textColor2">
        <div className="line col-3 px-3"></div>
        <h3 className="col-6 fairFont">Trending</h3>
        <div className="line col-3"></div>
        <span className="lead ">Find trending styles quick and esay</span>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          slideShadows: 1000,
          rotate: 100,
          stretch: 70,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiperContainer py-5"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <animated.div className="tab  mx-5 rounded-3 pt-4 d-flex  text-center justify-content-center align-items-center flex-column">
              <div className="imgTab  backgroundColor1 rounded-circle mb-2 border border-4">
                <img src={item.img} alt={`Item ${index}`} />
              </div>
              <h3 className="mb-0  title pb-2 pt-3 passionFont">
                {item.title}
              </h3>

              <a
                className="btn mb-4 border border-5 tabBtn bg-transparent"
                href="#"
                role="button"
              >
                <div className="textColor1 passionFont">VIEW</div>
              </a>

              <span className="px-4 pt-2 tabDesc">{item.description}</span>
            </animated.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default TabComponent;
