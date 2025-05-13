import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PredictionResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const results = location.state?.results;
  const disease = location.state?.disease;

  if (!results || !disease) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">
          ⚠️ No prediction data found. Please go back and try again.
        </div>
      </div>
    );
  }

  const prediction = results[disease];
  const inputSummary = location.state?.inputSummary || {};

  const renderInputSummary = () => {
    return Object.entries(inputSummary).map(([key, value]) => (
      <div key={key} className="flex justify-between py-1 border-b border-gray-200">
        <span className="font-medium text-gray-700">
          {key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}:
        </span>
        <span className="text-gray-800">{value}</span>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-700">
        🧬 Prediction Result
      </h1>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className={`max-w-2xl mx-auto p-8 rounded-2xl shadow-lg transition-all duration-300 ${
          prediction === "1" ? "bg-red-100" : "bg-green-100"
        }`}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Disease: {disease.charAt(0).toUpperCase() + disease.slice(1)}
        </h2>

        <p
          className={`text-center text-xl font-bold mb-6 ${
            prediction === "1" ? "text-red-600" : "text-green-600"
          }`}
        >
          Prediction: {prediction === "1" ? "Positive" : "Negative"}
        </p>

        {Object.keys(inputSummary).length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-inner">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Entered Values</h3>
            {renderInputSummary()}
          </div>
        )}
      </motion.div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/predict")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Predict Another Patient
        </button>
      </div>
    </div>
  );
};

export default PredictionResultPage;
