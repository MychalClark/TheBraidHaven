import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavComponent from "./components/NavComponent";
import FooterComponet from "./components/FooterComponent";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("im logged inn!!", user);
        setUser(user);
      } else {
        console.log("no userrr");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="navPlaceHolder">
          <NavComponent user={user} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
      <FooterComponet />
    </div>
  );
}

export default App;
