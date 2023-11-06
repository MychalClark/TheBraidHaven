import "../css/cards.css";

function CardGalleryComponent() {
  return <div className="cardGalleryComponent"></div>;
}

function Card() {
  return (
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
  );
}
export default CardGalleryComponent;
