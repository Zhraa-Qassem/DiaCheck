import React from 'react'
import runningFig from '../../../assets/runningFig.png';
function RiskHeader() {
  return (
    
    <div className=" mx-auto flex flex-row items-center mb-7">
    <div className="flex flex-col items-center text-center bg-primary rounded-2xl p-8 w-3/3 mb-6">
      <h1 className="text-4xl font-bold text-white text-center leading-normal">
        Know Your Risk
      </h1>
      <h1 className="text-4xl font-bold text-white text-center">
        Take the Diabetes Risk Assessment
      </h1>
    </div>
    <img src={runningFig} alt="Image description" className="w-60 h-48 " />
  </div>

   
  )
}

export default RiskHeader
