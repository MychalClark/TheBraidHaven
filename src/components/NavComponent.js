import "../css/nav.css";

import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { BsFillHandbagFill } from "react-icons/bs";
import { ImMenu, ImCross } from "react-icons/im";
import { FaUserLarge, FaDoorOpen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function NavComponent({ user }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  function goToAccount() {
    if (user) {
      navigate("/account");
    } else {
      navigate("/login");
    }
    setExpanded(false);
  }

  function goToPage(page) {
    navigate("/" + page);
    window.scrollTo(0, 0);
    setExpanded(false);
  }

  const slideIn = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: expanded ? "translateX(0%)" : "translateX(-100%)" },
    config: { duration: 300 },
  });

  return (
    <div className="navComponent fixed-top ">
      <Navbar expand="lg" className="navContainer backgroundColor1">
        <Container className="backgroundColor1 row d-flex align-items-center p-0 m-0  rounded-bottom-5">
          <div
            className="col-4 m-0 d-flex  justify-content-start navIcons textColor2  "
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded && <ImMenu />}
            {expanded && <ImCross />}
          </div>
          <Navbar.Brand
            href="#home"
            className="  m-0 d-flex justify-content-center col-4 navTitle gruppoFont"
          >
            <div className="textColor2">HAVEN</div>
          </Navbar.Brand>

          <div className="col-4 m-0 d-flex justify-content-end ">
            <BsFillHandbagFill className=" navIcons textColor2" />
          </div>
        </Container>

        <animated.div
          style={{ ...slideIn }}
          className="sideNav backgroundColor1 w-75 text-center row d-flex pt-5 flex-column textColor2"
        >
          <Nav.Link onClick={() => goToPage("")}>
            <div className="navLink  py-2 backgroundColor5">Home</div>
          </Nav.Link>
          <Nav.Link onClick={() => goToPage("")}>
            <div className="navLink py-2 backgroundColor1">About</div>
          </Nav.Link>
          <Nav.Link onClick={() => goToPage("")}>
            <div className="navLink  py-2 backgroundColor5">Gallery</div>
          </Nav.Link>
          <Nav.Link onClick={() => goToPage("")}>
            <div className="navLink py-2 backgroundColor1">Services</div>
          </Nav.Link>

          <Nav.Link onClick={() => goToPage("")}>
            <div className="navLink  py-2 textColor1 backgroundColor3">
              Book Appointment
            </div>
          </Nav.Link>

          <Nav.Link onClick={() => goToAccount()}>
            <div className="navLink py-2  mt-5 backgroundColor5">
              <span>
                <FaUserLarge className="me-2 pb-1" />
                {user && <span>Account</span>}
                {!user && <span>Sign In</span>}
              </span>
            </div>
          </Nav.Link>

          <Nav.Link onClick={() => goToPage("")}>
            <div className="navLink  py-2 textColor2 backgroundColor1">
              <FaDoorOpen className="me-2 pb-1" />
              Log Out
            </div>
          </Nav.Link>
        </animated.div>
      </Navbar>
    </div>
  );
}
export default NavComponent;
