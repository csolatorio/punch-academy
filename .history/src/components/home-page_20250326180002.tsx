// import React, { useState } from 'react';
import HeroPage from "../components/hero-page";
import OfferPage from "../components/offer-page";
import WelcomePage from "./welcome-section";
import Footer from "./footer";

const HomePage = () => {
  return (
    <div className="min-h-[50vh] bg-white">
      <HeroPage />
      <WelcomePage />
      <OfferPage />
      <Footer />
    </div>
  );
};

export default HomePage;
