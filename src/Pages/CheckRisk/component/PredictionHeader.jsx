import React from 'react';
import heart from '../../../assets/pulse-heart-svgrepo-com.svg'
import fig from '../../../assets/fitgwithPills.png'
const PredictionHeader = ({ prediction }) => {
  let headerText;
  let headerColor;

  switch (prediction) {
    case '2':
      headerText = 'Your Predicted Diabetes Risk: High';
      headerColor = 'text-red-500';
      break;
    case '1':
      headerText = 'Your Predicted Diabetes Risk: Moderate';
      headerColor = 'text-orange-500';
      break;
    case '0':
      headerText = 'Your Predicted Diabetes Risk: Low';
      headerColor = 'text-green-500';
      break;
    default:
      headerText = 'Your Diabetes Risk Prediction';
      headerColor = '';
      break;
  }

  return (
    <div className="ml-4 w-screen  text-start pl-6 flex flex-col items-center justify-center  mb-6 ">
      <div className=" w-screen mx-auto flex flex-row items-center justify-start mb-7">
        <div className="border border-primary w-8/12 h-20  rounded-2xl flex items-center mr-24">
          <div className="flex items-center text-start">
            <img src={heart} className='w-14 h-w-14 mx-6'></img>

            <h2 className="text-primary text-3xl font-bold text-start">Explore Your Predicted Diabetes Risk & read Articles </h2>

          </div>
        </div>
        <img src={fig} alt="Image description" className="w-60 h-48 " />
      </div>
      <div className='w-full flex flex-col text-start items-start justify-start px-4 '>
        <h1 className={`text-3xl font-bold items-start mb-8 text-start ${headerColor}`}>{headerText}</h1>
        <p className="text-black text-start">
        <span className='font-extrabold text-secondary'>Disclaimer:</span> This is a preliminary prediction based on the information you provided. It is not a substitute for professional medical advice. Please consult with your doctor to discuss your individual risk factors and receive personalized guidance.
      </p>
      <p className="text-black text-start mt-4">
      <span className='font-extrabold text-secondary'> Learn More:</span> Below you'll find articles tailored to your risk level to help you stay informed and take proactive steps towards your health.
      </p>
      </div>
     
    </div>
  );
};

export default PredictionHeader;
