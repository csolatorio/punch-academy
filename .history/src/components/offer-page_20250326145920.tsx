import React from "react";

const OfferPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-20 h-6 bg-[#EBE8DE]"></div>
        <h2 className="text-2xl font-bold">What we offer</h2>
      </div>
      <p className="text-gray-600 mb-6">
        At Punch, we offer personal training and group classes that blend
        boxing, fitness, and fun to build strength, confidence, and overall
        well-being.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative group">
          <img
            src="/personal-training.jpg"
            alt="Personal Training"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <span className="text-white text-lg font-bold">
              Personal Training
            </span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="/corporate-classes.jpg"
            alt="Corporate Classes"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <span className="text-white text-lg font-bold">
              Corporate Classes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
