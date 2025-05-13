import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const transformInputs = (disease, inputs) => {
  const yesNo = val => (val === 'Yes' ? 1 : 0);
 const gender = val => (val === 'Male' ? 1 : 0);

  if (disease === 'anemia') {
    return [
      gender(inputs.gender),
      parseFloat(inputs.haemoglobin),
      parseFloat(inputs.mch),
      parseFloat(inputs.mchc),
      parseFloat(inputs.mcv)
    ];
  }

  if (disease === 'leukemia') {
    return [
      parseFloat(inputs.age),
      gender(inputs.gender),
      parseFloat(inputs.wbc_count),
      parseFloat(inputs.rbc_count),
      parseFloat(inputs.platelets_count),
      parseFloat(inputs.hemoglobin_level),
      parseFloat(inputs.bone_marrow_blasts),
      yesNo(inputs.genetic_mutation),
      yesNo(inputs.family_history),
      parseFloat(inputs.bmi)
    ];
  }

  return [];
};

const VerifyInputPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { disease, formData } = location.state || {};

  if (!disease || !formData) {
    return <div className="p-10 text-center text-red-500">❌ No data provided</div>;
  }

  const transformedInputs = transformInputs(disease, formData);

  const handleConfirm = async () => {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ disease, inputs: formData })

    });

    const result = await response.json();
    navigate('/prediction-result', {
      state: { 
        disease, 
        results: { [disease]: result.prediction },
        inputSummary: formData // 👈 this line is important
      }
    });
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">🧪 Verify Model Inputs</h2>
        <p className="text-center text-sm text-gray-500 mb-4">
          These are the numeric values that will be passed to the ML model:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto text-blue-700 font-mono">
{JSON.stringify(transformedInputs, null, 2)}
        </pre>
        <button
          onClick={handleConfirm}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl shadow hover:bg-green-700 transition-all"
        >
          ✅ Confirm & Predict
        </button>
      </div>
    </div>
  );
};

export default VerifyInputPage;