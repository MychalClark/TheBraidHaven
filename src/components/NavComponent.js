import "../css/nav.css";

import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

function NavComponent() {
  return (
    <div>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <div className="navIcons">
            <FontAwesomeIcon icon={faUser} className="px-2" />
            <FontAwesomeIcon icon={faBagShopping} className="px-2" />
          </div>
          <Navbar.Brand href="#home" className="oxygenFont">
            <img
              src="/images/logo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top navLogo rounded-circle"
              alt="TBH"
            />
            HAVEN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavComponent;
