const WelcomePage = () => {
  return (
    <div className="relative w-full text-white">
      <section className="flex items-center justify-center min-h-[40vh] p-6 sm:p-4">
        <div className="relative max-w-6xl text-[#1E1E1E] text-center">
          <h1 className="text-7xl md:text-5xl sm:text-4xl font-semibold mb-10">
            Welcome to Punch Boxing Academy!
          </h1>
          <p className="text-lg md:text-base sm:text-sm mb-20">
            Empowering women in the heart of Hong Kong through boxing! Our
            supportive and inclusive community welcomes all levels and prides
            itself on being especially beginner-friendly. With a focus on
            technique, fitness, and personal growth, our expert team will guide
            you on your journey to confidence and resilience. Join us to
            experience the power of boxing, connect with inspiring women, and
            smash your goals—one punch at a time!
          </p>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
