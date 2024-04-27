import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className=" flex flex-col md:flex-row bg-primary p-4 rounded-lg mx-0.5 mb-8  shadow-md"> 
      {/* Section for title and description */}
      <div className="text-section w-full md:w-1/2  my-4  ">
        <h3 className="text-black bg-white text-xl font-bold py-6 px-2 mx-5">- {title}</h3>
        <p className="text-white text-base p-6">{description}</p>
      </div>

      {/* Section for image */}
      <div className="image-section w-full md:w-1/2 my-4">
        {image && <img src={image} alt={title} className="w-full h-auto rounded-lg" />}
      </div>
    </div>
  );
};

export default FeatureCard;
