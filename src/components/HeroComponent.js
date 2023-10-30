import "../css/hero.css";
function HeroComponent({ heroImg }) {
  return (
    <div className="heroComponent">
      <div
        className="heroImg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="heroText passionFont text-center textColor2">
        <h1>Love Your Hair.</h1>
        <h1>Don't wait.</h1>
        <p>Find the best time available for you.</p>
        <button type="button" className="btn rounded-1">
          Book Now!
        </button>
      </div>
    </div>
  );
}
export default HeroComponent;
