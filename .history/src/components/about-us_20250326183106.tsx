import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 grid gap-8">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="w-16 h-16 bg-[#EBE8DE]"></div>
            <div className="w-5 h-16 bg-[#EBE8DE]"></div>
            <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          </div>

          <p className="mt-4 text-gray-700">
            With 17 years of self-defense and boxing experience, along with 14
            years of military service, Stacey Pincher brings unparalleled
            expertise to Punch Boxing Academy. A former competitive boxer,
            personal trainer, and bodyguard, she is dedicated to helping women
            unleash their power through a dynamic and inclusive boxing program.
          </p>
          <p className="mt-4 text-gray-700">
            At Punch, we help women build confidence, strength, and resilience.
            Our sessions blend fitness with fun, enhancing cardiovascular
            health, balance, and stress management while incorporating Western
            boxing techniques. Under Stacey's guidance, every session is
            designed to challenge, support, and inspire.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src="/path-to-image-main.jpg"
            alt="Stacey Pincher"
            className="w-32 h-32 object-cover rounded"
          />
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/path-to-image1.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded"
            />
            <img
              src="/path-to-image2.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex flex-col items-center">
          <img
            src="/path-to-mission-image.jpg"
            alt="Boxing Training"
            className="w-full md:w-64 h-48 object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="w-4 h-8 bg-gray-300 mr-2"></span> Our Mission
          </h2>
          <p className="mt-4 text-gray-700">
            At Punch, our mission is to integrate boxing into everyday life,
            celebrating it as an art form of discipline, confidence, and
            empowerment for women. We are dedicated to breaking down the stigma
            surrounding boxing with a program specifically designed to focus on
            the female body, boosting confidence with every punch while
            tailoring workouts to your fitness level to enhance cardiovascular
            health, balance, and strength.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
