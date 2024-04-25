import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col items-center transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
