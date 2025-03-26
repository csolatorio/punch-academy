import React from "react";
import heroBanner from "../assets/Banner-Image.png";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header
        className="relative w-full h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-black/40 to-title"></div>

        <div className="container mx-auto relative z-10 flex flex-col justify-center items-start h-full p-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-left w-full sm:w-2/4">
            A Boxing Workout That Hits Different!
          </h1>
          <p className="text-base mb-6">
            The perfect blend of boxing techniques and full-body fitness crafted
            for women.
          </p>
          <div className="flex space-x-4">
            <button
              //   onClick={() => navigate("/request-a-quote")}
              className="text-md bg-title text-white font-normal py-4 px-12 rounded-sm drop-shadow-md"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
