import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavComponent from "./components/NavComponent";
import FooterComponet from "./components/FooterComponent";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Home />
      <FooterComponet />
    </div>
  );
}

export default App;
