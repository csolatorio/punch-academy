// import React, { useState } from 'react';
import HeroPage from "../components/hero-page";
import OfferPage from "../components/offer-page";
import WelcomePage from "..components/welcome-page";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="min-h-[50vh]">
      <HeroPage />
      <WelcomePage />
      <OfferPage />
      <Footer />
    </div>
  );
};

export default HomePage;
