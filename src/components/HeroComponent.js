import "../css/hero.css";
function HeroComponent({ heroImg }) {
  return (
    <div className="heroComponent">
      <div
        className="heroImg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="heroText passionFont textColor7">
        <h1>Love Your Hair.</h1>
        <h1>Don't wait.</h1>
        <h1>The Braid Haven LLC.</h1>

        <button type="button" name="" id="" class="btn textColor1 rounded-1">
          Book Now!
        </button>
      </div>
    </div>
  );
}
export default HeroComponent;
