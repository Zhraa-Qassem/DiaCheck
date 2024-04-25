import React from 'react';
import heroImg from '../../../assets/diabetic_clinic.webp'; // Assuming your image path is correct
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="w-screen hero-section bg-gradient-to-r from-blue-500 to-indigo-500 py-16 px-4 text-center lg:text-left">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Creative Image Container (Responsive & Customizable) */}
        <div className="lg:w-1/2 lg:mr-16 image-container relative overflow-hidden">
          {/* Responsive Image with Aspect Ratio for Cropping */}
          <img
            src={heroImg}
            alt="Diabetes Management"
            className="w-full h-full object-cover object-center rounded-lg shadow-xl"
          />

          {/* Creative Shape Overlay (Customizable) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-lg opacity-50 z-10"></div>

          {/* Customizable Text Overlay (Optional) */}
          {/* <div className="absolute inset-0 flex items-center justify-center text-white z-20">
            <h2 className="text-3xl font-bold leading-tight">Manage Your Diabetes</h2>
          </div> */}
        </div>

        {/* Content Section with Improved Clarity and CTA */}
        <div className="lg:w-1/2 lg:pl-0">
          <h1 className="text-4xl font-bold text-white mb-4">
            Empower Your Diabetes Journey
          </h1>
          <p className="text-lg text-white mb-6 leading-relaxed">
            Gain valuable insights about your diabetes risk with a quick and easy click.
          </p>
          <Link to="/riskCheck">
            <button className="bg-white text-indigo-500 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 hover:bg-indigo-500 hover:text-white">
              Check Your Risk Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
