import "../css/nav.css";

import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { AiFillCaretDown } from "react-icons/ai";
function NavComponent() {
  return (
    <div className="navComponent ">
      <Navbar expand="md" className="backgroundColor1">
        <Container>
          <Navbar.Brand href="#home" className=" navTitle gruppoFont">
            <span></span>
            <div className="textColor2">HAVEN</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto navLinks text-center gruppoFont">
              <Nav.Link href="#home">
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
                <div className="textColor1 rounded backgroundColor2 px-2 oxygenFont ">
                  Book Appointment
                </div>
              </Nav.Link>
              <div className="navIcons text-white justify-content-evenly d-flex pt-3 ">
                <div>
                  <FontAwesomeIcon icon={faUser} className="px-2" />
                  Account
                </div>
                <div>
                  <FontAwesomeIcon icon={faBagShopping} className="px-2" />
                  Purchases
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavComponent;
