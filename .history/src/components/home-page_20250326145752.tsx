// import React, { useState } from 'react';
import HeroPage from "../components/hero-page";
import OfferPage from "../components/offer-page";
import WelcomePage from "./welcome-section";

const HomePage = () => {
  return (
    <div className="min-h-[50vh">
      <HeroPage />
      <WelcomePage />
      <OfferPage />
    </div>
  );
};

export default HomePage;
