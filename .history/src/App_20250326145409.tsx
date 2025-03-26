import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/home-page";
import Navbar from "./components/navbar-menu";

import "./App.css";
import OfferPage from "./components/offer-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/offer-page" element={<OfferPage />} />
      </Routes>
    </Router>
  );
}

export default App;
