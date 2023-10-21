import "../css/footer.css";
import { BsInstagram, BsFacebook, BsMailbox2 } from "react-icons/bs";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import "../index.css";
import { Container } from "react-bootstrap";

function FooterComponet() {
  return (
    <div className="footerComponent backgroundColor1 d-flex flex-column ">
      <Container fluid>
        <div className="row justify-content-center ">
          <div className="col-md-6 text-center address text-white comfortFont row ">
            <h3 className="textColor2 passionFont footHeader">Information</h3>

            <a link="#" className="col-12 text-white">
              Frequently Asked Questions
            </a>
            <span></span>
            <a link="#" className="col-12 text-white">
              Privacy Policy
            </a>
          </div>

          <div className="col-md-6 text-center address text-white comfortFont">
            <h3 className="textColor2 passionFont footHeader">Contact Us!</h3>

            <p>
              <FaLocationDot className="textColor2 " /> 1814 Nashua Dr, St.
              Louis, MO
            </p>
            <p>
              <FaSquarePhone className="textColor2 " />
              +1 314-202-0689
            </p>
            <p>
              <BsMailbox2 className="textColor2 " />
              braidhavenllc@mail.com
            </p>
          </div>
          <hr></hr>
          <div className="col-md-4 text-center py-1  w-100">
            <a
              href="https://www.instagram.com/thebraidhavenllc/"
              target="_blank"
              className="px-2"
            >
              <BsInstagram className="textColor2 " />
            </a>
            <a
              href="https://www.facebook.com/thebraidhaven/"
              target="_blank"
              className="px-2"
            >
              <BsFacebook className="textColor2" />
            </a>
          </div>
        </div>
        <div className="text-center bg-dark text-white w-100 mt-1">
          &copy; TheBraidHavenLLC 2023
        </div>
      </Container>
    </div>
  );
}
export default FooterComponet;
