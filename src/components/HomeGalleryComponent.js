import "../css/homeGalleryComponent.css";
import "../css/cards.css";
function HomeGalleryComponent() {
  return (
    <div className="homeGalleryComponent pt-3 pb-1  backgroundColor3">
      <div className=" title text-center row px-4 pb-4">
        <div className="line col-3 px-3"></div>
        <h3 className="col-6 fairFont">Gallery</h3>
        <div className="line col-3"></div>
        <span className="lead ">Need an Idea? Look no further! </span>
      </div>

      <div className="styleCardHolder p-1 justify-content-evenly row  d-flex">
        <div className="styleCard col-6 m-0 p-2 backgroundColor2 rounded-3">
          <div className="styleCardStylst pb-2 pt-2 ps-3  d-flex row">
            <div className="styleCardProfileImg p-0 m-0 d-flex align-items-center justify-content-center col-2 rounded-circle ">
              <img src="../images/girl2.png"></img>
            </div>
            <div className="styleCardProfileName d-flex flex-column  ps-1 align-items-start justify-content-end col-9 m-0 p-0 d-flex  gruppoFont">
              By Alexandria
            </div>
          </div>

          <img src="../images/girl2.png" className="styleCardImg"></img>

          <div className="styleCardName text-center d-flex align-items-center justify-content-center gruppoFont ">
            Box Braids
          </div>
        </div>
        <div className="styleCard col-6 m-0 p-2 backgroundColor2 rounded-3">
          <div className="styleCardStylst pb-2 pt-2 ps-3  d-flex row">
            <div className="styleCardProfileImg p-0 m-0 d-flex align-items-center justify-content-center col-2 rounded-circle ">
              <img src="../images/girl2.png"></img>
            </div>
            <div className="styleCardProfileName d-flex flex-column  ps-1 align-items-start justify-content-end col-9 m-0 p-0 d-flex  gruppoFont">
              By Alexandria
            </div>
          </div>

          <img src="../images/girl2.png" className="styleCardImg"></img>

          <div className="styleCardName text-center d-flex align-items-center justify-content-center gruppoFont ">
            Box Braids
          </div>
        </div>

        <a
          className="btn homeGalleryBtn border-3  border-white  rounded-3 w-50 mt-5 mb-4 "
          href="#"
          role="button"
        >
          <div className=" passionFont textColor2">View More</div>
        </a>
      </div>
    </div>
  );
}

export default HomeGalleryComponent;
