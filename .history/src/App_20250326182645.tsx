import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/home-page";
import Navbar from "./components/navbar-menu";
import OfferPage from "./components/offer-page";
import Footer from "./components/footer";
import CorporateWellness from "./components/corporate-wellness";
import AboutUs from "./components/about-us";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/offer-page" element={<OfferPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/corporate-wellness" element={<CorporateWellness />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
