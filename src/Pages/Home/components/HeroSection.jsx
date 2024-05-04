import React from 'react';
import heroImg from '../../../assets/diabetic_clinic.webp'; // Assuming your image path is correct
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center hero-section bg-gradient-to-r bg-primary py-16 px-4 text-center lg:text-left">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Creative Image Container (Responsive & Customizable) */}
        <div className="lg:w-1/2 lg:mr-16 self-center image-container relative overflow-hidden">
          {/* Responsive Image with Aspect Ratio for Cropping */}
          <img
            src={heroImg}
            alt="Diabetes Management"
            className="w-full h-full  object-cover object-center rounded-3xl shadow-xl"
          />

       
        </div>

        {/* Content Section with Improved Clarity and CTA */}
        <div className="lg:w-1/2 lg:pl-0 flex justify-start items-start self-start flex-col">
          <h1 className="text-7xl leading-tight  mt-4 font-extrabold text-white">
            Empower Your Diabetes Journey
          </h1>
          <p className="text-lg text-white mb-6 mt-4 leading-relaxed">
            Gain valuable insights about your diabetes risk with a quick and easy click.
          </p>
          <Link to="/riskCheck">
            <button className=" bg-white text-primary font-bold py-2 px-6 rounded-full shadow-lg border transform hover:scale-105 hover:bg-primary hover:text-white hover:border-white hover:shadow-md ">
              Check Your Risk Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
