import React from "react";

const OfferPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-white bg-black">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
        <p className="text-gray-400 mt-2 text-lg md:text-base">
          At Punch, we provide top-tier boxing fitness, private training, and
          open gym access to help you reach your fitness goals.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        {/* Boxing Fitness Classes */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg shadow-lg w-80">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
            <img
              src="/icons/boxing-icon.png"
              alt="Boxing Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-bold">BOXING FITNESS CLASSES</h3>
          <p className="text-red-500 mt-1">IN-PERSON</p>
          <p className="text-gray-400 mt-2">
            Burn 600+ calories in our award-winning 45-minute Box N Burn
            classes. No experience necessary—just fun, fitness, and expert
            guidance!
          </p>
        </div>

        {/* Private Training */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg shadow-lg w-80">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
            <img
              src="/icons/training-icon.png"
              alt="Training Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-bold">PRIVATE TRAINING</h3>
          <p className="text-red-500 mt-1">WORLD CLASS TRAINERS</p>
          <p className="text-gray-400 mt-2">
            Get personalized coaching and small-group training with our
            certified professional trainers to reach your specific fitness
            goals.
          </p>
        </div>

        {/* Open Gym */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg shadow-lg w-80">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
            <img
              src="/icons/gym-icon.png"
              alt="Gym Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-bold">OPEN GYM</h3>
          <p className="text-red-500 mt-1">Limited access to a private gym</p>
          <p className="text-gray-400 mt-2">
            Prefer working out at your own pace? Enjoy access to high-quality
            boxing and strength training equipment in our private gym.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
