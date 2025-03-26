import stratSolution from "../assets/strat-solution.png";
import stratSolutionF from "../assets/strat-solution-full.png";
import dataDrivenB from "../assets/data-drivenB.png";
import businessB from "../assets/businessB.png";
import AIB from "../assets/aiB.png";
import business from "../assets/business.png";
import AI from "../assets/ai.png";
import dataDriven from "../assets/data-driven.png";
import officeImage from "../assets/office-image.jpg";
import teamImage from "../assets/team-image.jpg";
import bottomBanner from "../assets/bottom-banner.png";
// import React, { useState } from 'react';
import HeroPage from "./hero-page.js";
import WhatWeDo from "./WhatWeDo.js";
import Footer from "./footer.js";
import FlipCard from "./cardflipAbout.js";
import PricingPlans from "./pricingPlan.js";
import { useNavigate } from "react-router-dom";
import ImplementationProcess from "./implementation-process";
import useAuthStore from "../state/useAuthStore";
// import Navbar from './navbar.js';
// import ScrollAnimation from 'react-animate-on-scroll';

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();

  console.log("User:", user);
  console.log("Is Authenticated:", isAuthenticated);

  const handleEmailRedirect = () => {
    window.location.href = "mailto:info@pdienterprise.com";
  };

  return (
    <div className="min-h-screen">
      <HeroPage />
      <WhatWeDo />
      <section className="py-8 px-4 sm:px-6 lg:px-12 bg-white block">
        <div className="container mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-title mt-2 mb-4">
            Our Services
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-8 sm:mb-12 lg:mb-16">
            Achieve Excellence with Our Dedicated Online{" "}
            <br className="hidden sm:block" /> Support Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FlipCard
              title="Strategic Design Solutions"
              description="Elevate experiences through human-centric design and tech-powered innovation, ensuring sustainable business growth and a competitive advantage."
              frontImage={stratSolution}
              backContent={
                <ul className="list-disc list-inside z-30">
                  <li>Transformative Business Strategies</li>
                  <li>User Experience Design</li>
                  <li>Tech-Driven Innovation</li>
                  <li>End-to-End Engagement</li>
                </ul>
              }
              backImage={stratSolutionF}
            />
            <FlipCard
              title="Data-Driven Analytics"
              description="Leverage data, AI technologies, and innovative domain-specific solutions for impactful decisions, discovering and unlocking new possibilities for superior business outcomes."
              frontImage={dataDriven}
              backImage={dataDrivenB}
              backContent={
                <ul className="list-disc list-inside">
                  <li>AI-Optimized Data Engineering</li>
                  <li>Cutting-Edge Analytics</li>
                  <li>Enterprise Data Intelligence</li>
                  <li>Operational Data Insights</li>
                  <li>Tailored Industry Solutions</li>
                  <li>Analytics and Data Modernization</li>
                </ul>
              }
            />
            <FlipCard
              title="Enterprise Tech Solutions"
              description="Develop, modernize, and integrate technologies to usher in a new digital future, powered by AI and intelligent tools for greater efficiency and cutting-edge operations."
              frontImage={AI}
              backImage={AIB}
              backContent={
                <ul className="list-disc list-inside">
                  <li>Digital Technology Transformation</li>
                  <li>Software Application Services</li>
                  <li>Automated Business Solutions</li>
                  <li>Multi-Experience Platforms</li>
                  <li>Testing & Quality Services</li>
                  <li>Customer Engagement Technology</li>
                  <li>Creative AI Solutions</li>
                </ul>
              }
            />
            <FlipCard
              title="Digital Business Operations"
              description="Combine specialized knowledge, leading-edge technologies, and unique operational models, using the best of human and AI abilities to address specific business needs."
              frontImage={business}
              backImage={businessB}
              backContent={
                <ul className="list-disc list-inside">
                  <li>Sales and Marketing Solutions</li>
                  <li>Compliance and Financial Services</li>
                  <li>Safety Assurance</li>
                  <li>Customer Helpdesk</li>
                  <li>Client Service Solutions</li>
                </ul>
              }
            />
          </div>
        </div>
      </section>

      <section className="pb-12 px-12 bg-white">
        <div className="container mx-auto text-center mb-20">
          <h2 className="text-2xl font-normal text-title mt-2 mb-4">
            Why Choose us?
          </h2>
          <h3 className="text-4xl font-bold text-primary mt-2 mb-4">
            Find the best here
          </h3>
          <p className="text-primary font-normal text-sm">
            Enhancing productivity and satisfaction through streamlined
            operations and <br /> dedicated service. Elevate your customer
            experience with our commitment to <br />
            proactive, high-quality support solutions.
          </p>
          <div className="solutions-container"></div>
        </div>
      </section>

      <ImplementationProcess />

      <section className="py-12 px-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-normal text-center text-title mt-2 mb-4">
            About
          </h2>
          <h3 className="text-4xl font-bold text-primary text-center mt-2 mb-4">
            Explore what drives us and how we make a <br /> difference.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center">
              <p className="text-primary mb-4 text-justify">
                Welcome to{" "}
                <span className="font-bold">POSEIDON DISTRIBUTION OPC.</span>{" "}
                We’re so glad you’re here! Our goal is to make every customer
                feel truly cared for. Here at POSEIDON, we believe great service
                starts from within. All of our employees work hard each day to
                go above and beyond for our clients. It’s what we love to do!
                We’re always coming up with new ideas to improve and looking for
                better ways to connect.
              </p>
            </div>
            <div>
              <img
                src={officeImage}
                alt="Office"
                className="w-full h-auto shadow-lg rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={teamImage}
                alt="Team"
                className="w-full h-auto shadow-lg rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-primary text-justify mb-4">
                Providing an amazing experience is our top priority. Ever since
                we opened our doors, giving excellent care has been our number
                one value. We want every person who contacts us to feel
                appreciated and well taken care of. Our team works tirelessly to
                turn every interaction into a positive memory that customers
                will want to share.
              </p>
              <button
                className="text-xs bg-title text-white font-normal py-4 px-6 rounded-sm drop-shadow-md self-start mt-6"
                onClick={() => navigate("/about")}
              >
                More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <PricingPlans />

      <section className="py-12 px-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-normal text-title mt-2">Our Location</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.46736043755936!2d125.6153552!3d7.070472199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d9ebe09a725%3A0x3265cc4eb4bcf52f!2sPerpectus%20Advertising%20Enterprises!5e0!3m2!1sen!2sph!4v1723431652437!5m2!1sen!2sph"
              allowFullScreen
              loading="lazy"
              title="SouthWing Cafeteria - Jacinto"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 bg-white">
            <h2 className="text-xl font-normal text-title mt-2 text-left">
              Contact us
            </h2>
            <h2 className="text-xl font-semibold text-primary mt-2 mb-4 text-left">
              Drop us a line
            </h2>
            <form className="space-y-4 md:w-11/12">
              <div>
                <input
                  type="email"
                  id="email"
                  className="rounded-tl-3xl rounded-br-3xl mt-1 block w-11/12 p-4 border border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="name"
                  className="rounded-tl-3xl rounded-br-3xl mt-1 block w-11/12 p-4 border border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  className="rounded-tl-3xl rounded-br-3xl mt-1 block w-11/12 p-6 border border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-xs bg-title text-white font-normal py-4 px-6 rounded-sm drop-shadow-md mr-6 mt-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="relative bg-black text-white py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${bottomBanner})` }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              Empower your business with Poseidon Distributions OPC
            </h1>
            <button
              onClick={handleEmailRedirect}
              className="text-xs bg-title text-white font-normal py-4 px-6 rounded-sm drop-shadow-md mr-6 mt-6"
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default LandingPage;
