import React from 'react';
import heart from '../../../assets/pulse-heart-svgrepo-com.svg';
import fig from '../../../assets/okayFig.png';

function ArticleHeader() {
  return (
    <div className="ml-4 w-screen text-start pl-6 flex flex-col items-center justify-center mb-6">
      <div className="w-screen mx-auto flex flex-row items-center justify-start mb-7">
        <div className="border border-primary w-8/12 h-20 rounded-2xl flex items-center mr-24">
          <div className="flex items-center text-start">
            <img src={heart} className='w-14 h-w-14 mx-6' alt="Heart Icon" />
            <h2 className="text-primary text-3xl font-bold text-start">Stay Informed: Explore Articles Related to Your Health</h2>
          </div>
        </div>
        <img src={fig} alt="Image description" className="w-60 h-48" />
      </div>
    </div>
  );
}

export default ArticleHeader;
