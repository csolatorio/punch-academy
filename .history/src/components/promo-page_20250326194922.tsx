import React from "react";

const PromoPage: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/mnt/data/image.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-[#F5F2EA] p-8 md:p-12 max-w-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Get 50% off of first PT
        </h2>
        <p className="mt-4 text-black text-sm md:text-base">
          Unlock your potential with tailored training plans that fit your
          schedule. Our personal coaching keeps you on track and accountable—
          just share your goals, and we’ll take care of the rest!
        </p>
        <button className="mt-6 bg-black text-white py-3 px-6 text-lg shadow-md hover:bg-gray-800">
          Book a Trial
        </button>
      </div>
    </div>
  );
};

export default PromoPage;
