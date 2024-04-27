import React, { useState } from 'react';
import InputField from './component/InputField';

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

  const tests = [
    { type: 'number', id: 'urea', name: 'urea', value: formData.urea, onChange: handleChange, description: 'Measures waste product removal by kidneys.' },
    { type: 'number', id: 'cr', name: 'cr', value: formData.cr, onChange: handleChange, description: 'Indicates kidney function.' },
    { type: 'number', id: 'hba1c', name: 'hba1c', value: formData.hba1c, onChange: handleChange, description: 'Indicates average blood sugar level over 2-3 months.' },
    { type: 'number', id: 'chol', name: 'chol', value: formData.chol, onChange: handleChange, description: 'Measures fat in the blood.' },
    { type: 'number', id: 'tg', name: 'tg', value: formData.tg, onChange: handleChange, description: 'Measures fat in the blood.' },
    { type: 'number', id: 'hdl', name: 'hdl', value: formData.hdl, onChange: handleChange, description: 'Indicates "good" cholesterol.' },
    { type: 'number', id: 'ldl', name: 'ldl', value: formData.ldl, onChange: handleChange, description: 'Indicates "bad" cholesterol.' },
    { type: 'number', id: 'vldl', name: 'vldl', value: formData.vldl, onChange: handleChange, description: 'Indicates very low-density lipoprotein.' },
    { type: 'number', id: 'bmi', name: 'bmi', value: formData.bmi, onChange: handleChange, description: 'Measures body fat based on height and weight.' },
  ];

  return (
    <div className="py-16 px-4 lg:px-0 text-center lg:text-left">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-primary rounded-2xl p-8 w-2/3 mb-6">
          <h1 className="text-4xl font-bold text-white text-center leading-normal">
            Know Your Risk
          </h1>
          <h1 className="text-4xl font-bold text-white text-center">
            Take the Diabetes Risk Assessment
          </h1>
        </div>
        <div className="bg-primary rounded-2xl p-8 w-11/12">
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
              {tests.map((test, index) => (
                <InputField key={index} {...test} />
              ))}
            </div>
            <button type="submit" className="w-full bg-white text-primary font-bold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckRisk;
