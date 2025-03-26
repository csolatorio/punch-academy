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
      <p className="text-gray-600 mb-6 text-lg md:text-base">
        At Punch, we offer personal training and group classes that blend
        boxing, fitness, and fun to build strength, confidence, and overall
        well-being.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        {/* Card 1 */}
        <div className="relative w-64 h-64 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
          <img
            src={PersonalImage}
            alt="Team Building"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <h2 className="font-bold text-lg relative">Boxing Fitness Classes</h2>
          <p className="text-sm relative text-center px-4 mt-2">
            Strengthen connections among colleagues with collaborative training
            sessions that nurture teamwork and communication.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative w-64 h-64 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
          <img
            src="/images/memorable-bonding.jpg"
            alt="Memorable Bonding"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <h2 className="font-bold text-lg relative">Private Training</h2>
          <p className="text-sm relative text-center px-4 mt-2">
            Create lasting memories as team members motivate and challenge one
            another, deepening workplace relationships.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative w-64 h-64 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center shadow-lg">
          <img
            src="/images/pushing-limits.jpg"
            alt="Pushing Limits"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <h2 className="font-bold text-lg relative">Corporate Wellness</h2>
          <p className="text-sm relative text-center px-4 mt-2">
            Encouraging personal and professional growth outside comfort zones.
          </p>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div> */}
    </div>
  );
};

export default OfferPage;
