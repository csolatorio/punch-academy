import React from "react";

import CorporateImage from "../assets/corporate-classes.jpg";
import PersonalImage from "../assets/personal-training.jpg";

const OfferPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <div className="w-16 h-16 bg-[#EBE8DE]"></div>
        <div className="w-5 h-16 bg-[#EBE8DE]"></div>
        <h2 className="text-3xl md:text-4xl font-bold">What we offer</h2>
      </div>
      <p className="text-gray-600 mb-6 text-md md:text-base">
        At Punch, we offer personal training and group classes that blend
        boxing, fitness, and fun to build strength, confidence, and overall
        well-being.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative group">
          <img
            src={PersonalImage}
            alt="Personal Training"
            className="w-full h-64 sm:h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-white opacity-50"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <span className="text-white text-2xl sm:text-4xl font-bold">
              Personal Training
            </span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={CorporateImage}
            alt="Corporate Classes"
            className="w-full h-64 sm:h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-white opacity-50"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <span className="text-white text-2xl sm:text-4xl font-bold">
              Corporate Classes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
