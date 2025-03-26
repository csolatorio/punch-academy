import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/home-page";
import Navbar from "./components/navbar-menu";

import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
