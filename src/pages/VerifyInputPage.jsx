import React, { useState } from 'react';
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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!disease || !formData) {
    return <div className="p-10 text-center text-red-500">❌ No data provided</div>;
  }

  const transformedInputs = transformInputs(disease, formData);

  const handleConfirm = async () => {
    setSubmitting(true);
    setError('');

    try {
      const payloadInputs = disease === 'leukemia' ? transformedInputs : formData;
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ disease, inputs: payloadInputs })
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || 'Prediction failed');
      }

      navigate('/prediction-result', {
        state: { 
          disease, 
          results: { [disease]: result.prediction },
          inputSummary: formData
        }
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-6 sm:py-10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 p-6 sm:p-8 md:p-10 w-full max-w-6xl">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 rounded-3xl mb-4 shadow-xl shadow-amber-500/30 animate-glow">
            <span className="text-3xl sm:text-4xl">✓</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">Review Model Inputs</h2>
          <p className="text-sm sm:text-base text-slate-600 px-4">
            Verify the values before sending to AI model
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-100">
            <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">1</span>
              Raw Input Summary
            </h3>
            <pre className="bg-white p-4 rounded-xl text-xs overflow-x-auto text-slate-700 font-mono border border-blue-100">
{JSON.stringify(formData, null, 2)}
            </pre>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-100">
            <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xs">2</span>
              Transformed Values
            </h3>
            <pre className="bg-white p-4 rounded-xl text-xs overflow-x-auto text-slate-700 font-mono border border-emerald-100">
{JSON.stringify(transformedInputs, null, 2)}
            </pre>
          </div>
        </div>

        {error && (
          <div className="mt-6 text-sm text-rose-600 bg-rose-50 border border-rose-100 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <button
          onClick={handleConfirm}
          disabled={submitting}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Analyzing...' : 'Confirm & Get Prediction'}
        </button>
      </div>
    </div>
  );
};

export default VerifyInputPage;