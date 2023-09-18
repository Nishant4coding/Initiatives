import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateImage from '../Assets/validate.png';
import { IoMdClose } from 'react-icons/io';

const ValidationForm = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/startupvalidation');
  };

  const steps = [
    {
      fields: ["Founder's Full Name", "Founder's Email", "Founder's Phone"],
      title: "Founder's Information",
    },
    {
      fields: ["Startup Name", "Market Type", "Market Caps"],
      title: "Startup Details",
    },
    {
      fields: ["Competition Strategy", "Revenue Sources"],
      title: "Strategy and Revenue",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [startupInfo, setStartupInfo] = useState({
    founderFullName: "",
    founderEmail: "",
    founderPhone: "",
    startupName: "",
    marketType: "",
    marketCaps: "",
    competitionStrategy: "",
    revenueSources: "",
  });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Startup Info:", startupInfo);
    // form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStartupInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const currentStepFields = steps[currentStep].fields;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <IoMdClose
          className="absolute top-2 right-2 text-gray-600 cursor-pointer text-xl"
          onClick={handleGoBack}
        />
        <div className="text-center mb-4">
          <img src={validateImage} alt="Validation Background" className="w-32 mx-auto" />
          <h2 className="text-2xl font-bold mt-2 text-gray-800">
            Fill Out this Form to Validate Your Ideas!
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {currentStepFields.map((fieldName) => (
            <div key={fieldName}>
              <label className="block text-gray-700 text-xl">{fieldName}</label>
              <input
                type="text"
                name={fieldName}
                value={startupInfo[fieldName]}
                onChange={handleChange}
                className="w-full bg-gray-100 border-b border-gray-400 text-gray-800 focus:outline-none focus:border-yellow-500 py-2"
              />
            </div>
          ))}
          <div className="flex justify-between mt-4">
            {currentStep !== 0 && (
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full"
                onClick={handlePrevStep}
              >
                Back
              </button>
            )}
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full"
              type="button"
              onClick={
                currentStep === steps.length - 1 ? handleSubmit : handleNextStep
              }
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValidationForm;
