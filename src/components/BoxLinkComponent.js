import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "../css/boxLink.css";

function BoxLinkComponent({ links }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: inView,
    config: { duration: 5000 },
  });
  return (
    <div className="BoxLinkComponent pt-4 row justify-content-evenly ">
      <div className="title text-center row px-4">
        <div className="line col-3 px-3"></div>
        <h3 className="col-6 fairFont">Shopping</h3>
        <div className="line col-3"></div>
        <span className="lead ">Find it. Love it. Fast.</span>
      </div>
      {links.map((link, index) => (
        <BoxLink key={index} link={link} />
      ))}
    </div>
  );
}

function BoxLink({ link }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: inView,
    config: { duration: 1500 },
  });

  return (
    <animated.div
      ref={ref}
      style={inView ? { ...fadeIn } : { opacity: 0 }}
      className="boxLink backgroundColor1 d-flex justify-content-center mt-4 align-items-center text-center col-6 "
    >
      <div className="title neonFont textColor2">{link.title}</div>
      <div className="filter"></div>
      <img src={link.img} alt={link.title} />
    </animated.div>
  );
}

export default BoxLinkComponent;
