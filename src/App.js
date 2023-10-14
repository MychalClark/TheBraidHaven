import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button>hello</Button>
    </div>
  );
}

export default App;
