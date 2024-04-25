import React, { useState } from 'react';

const CheckRisk = () => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    urea: '',
    cr: '',
    hba1c: '',
    chol: '',
    tg: '',
    hdl: '',
    ldl: '',
    vldl: '',
    bmi: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="check-risk-page bg-gradient-to-r from-sky-500 to-teal-500 py-16 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Know Your Risk - Take the Diabetes Risk Assessment
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="gender" className="text-white text-lg">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="age" className="text-white text-lg">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Blood Tests */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="urea" className="text-white text-lg">Urea Nitrogen:</label>
            <input
              type="number"
              id="urea"
              name="urea"
              value={formData.urea}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Measures waste product removal by kidneys.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="cr" className="text-white text-lg">Creatinine:</label>
            <input
              type="number"
              id="cr"
              name="cr"
              value={formData.cr}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Indicates kidney function.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hba1c" className="text-white text-lg">HbA1c:</label>
            <input
              type="number"
              id="hba1c"
              name="hba1c"
              value={formData.hba1c}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Indicates average blood sugar level over 2-3 months.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="chol" className="text-white text-lg">Cholesterol:</label>
            <input
              type="number"
              id="chol"
              name="chol"
              value={formData.chol}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Measures fat in the blood.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="tg" className="text-white text-lg">Triglycerides:</label>
            <input
              type="number"
              id="tg"
              name="tg"
              value={formData.tg}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Measures fat in the blood.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="hdl" className="text-white text-lg">HDL Cholesterol:</label>
            <input
              type="number"
              id="hdl"
              name="hdl"
              value={formData.hdl}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Indicates "good" cholesterol.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="ldl" className="text-white text-lg">LDL Cholesterol:</label>
            <input
              type="number"
              id="ldl"
              name="ldl"
              value={formData.ldl}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Indicates "bad" cholesterol.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="vldl" className="text-white text-lg">VLDL Cholesterol:</label>
            <input
              type="number"
              id="vldl"
              name="vldl"
              value={formData.vldl}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Indicates very low-density lipoprotein.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="bmi" className="text-white text-lg">BMI:</label>
            <input
              type="number"
              id="bmi"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-300 text-sm">Measures body fat based on height and weight.</p>
          </div>
        </div>
        <button type="submit" className="bg-white text-teal-500 font-bold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckRisk;