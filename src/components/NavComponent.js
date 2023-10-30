import "../css/nav.css";

import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  return (
    <div className="navComponent fixed-top ">
      <Navbar
        expand="lg"
        expanded={expanded}
        className="navContainer backgroundColor1"
      >
        <Container className="backgroundColor1">
          <Navbar.Brand href="#home" className=" navTitle gruppoFont">
            <span></span>
            <div className="textColor2">HAVEN</div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto navLinks text-center gruppoFont">
              <Nav.Link onClick={() => goToPage("")}>
                <div className="textColor2">Home</div>
              </Nav.Link>
              <NavDropdown
                title={
                  <span style={{ color: "#effefe" }}>
                    About <AiFillCaretDown size={12} />
                  </span>
                }
              >
                <div className="textColor2 navLinks">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    -Careers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link href="#link">
                <div className="textColor2">Services</div>
              </Nav.Link>
              <Nav.Link href="#link">
                <div className="textColor2">Gallery</div>
              </Nav.Link>
              <Nav.Link href="#link">
                <div className="textColor2">Schedule</div>
              </Nav.Link>
              <Nav.Link href="#link">
                <div className="bookLink textColor1 rounded backgroundColor2 px-2 oxygenFont ">
                  Book Appointment
                </div>
              </Nav.Link>
              <div className="navIcons text-white justify-content-evenly d-flex pt-3">
                <button
                  className="navButton"
                  onClick={() => goToAccount()}
                  data-toggle="collapse"
                  data-target="#navbar"
                >
                  <FontAwesomeIcon icon={faUser} className="px-2" />
                  Account
                </button>

                {user && (
                  <button className="navButton">
                    <FontAwesomeIcon icon={faBagShopping} className="px-2" />
                    Cart
                  </button>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavComponent;
