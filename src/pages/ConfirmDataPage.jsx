import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const anemiaFields = [
  { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] },
  { name: 'haemoglobin', label: 'Haemoglobin (g/dL)' },
  { name: 'mch', label: 'MCH (pg)' },
  { name: 'mchc', label: 'MCHC (g/dL)' },
  { name: 'mcv', label: 'MCV (fL)' }
];

const leukemiaFields = [
  { name: 'age', label: 'Age', type: 'number' },
  { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] },
  { name: 'wbc', label: 'WBC Count (10^9/L)' },
  { name: 'rbc', label: 'RBC Count (10^12/L)' },
  { name: 'platelets', label: 'Platelet Count (10^9/L)' },
  { name: 'haemoglobin', label: 'Haemoglobin (g/dL)' },
  { name: 'geneticMutation', label: 'Genetic Mutation', type: 'select', options: ['Yes', 'No'] },
  { name: 'familyHistory', label: 'Family History', type: 'select', options: ['Yes', 'No'] },
  { name: 'smoking', label: 'Smoking Status', type: 'select', options: ['Yes', 'No'] },
  { name: 'alcohol', label: 'Alcohol Consumption', type: 'select', options: ['Yes', 'No'] },
  { name: 'radiationExposure', label: 'Radiation Exposure', type: 'select', options: ['Yes', 'No'] },
  { name: 'infection', label: 'Infection History', type: 'select', options: ['Yes', 'No'] },
  { name: 'bmi', label: 'BMI', type: 'select', options: ['Underweight', 'Normal', 'Overweight'] },
  { name: 'chronicIllness', label: 'Chronic Illness', type: 'select', options: ['Yes', 'No'] },
  { name: 'immuneDisease', label: 'Immune Disorders', type: 'select', options: ['Yes', 'No'] },
  { name: 'socioeconomic', label: 'Socioeconomic Status', type: 'select', options: ['Low', 'Medium', 'High'] },
  { name: 'urbanRural', label: 'Urban or Rural Area', type: 'select', options: ['Urban', 'Rural'] }
];

const EnterCBCValuesPage = () => {
  const [disease, setDisease] = useState('');
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify-input', { state: { disease, formData } });
  };

  const renderFields = (fields, perRow) => {
    const rows = [];
    for (let i = 0; i < fields.length; i += perRow) {
      const rowFields = fields.slice(i, i + perRow);
      rows.push(
        <div key={i} className="flex gap-4 mb-4 flex-wrap">
          {rowFields.map((field) => (
            <div key={field.name} className="flex-1 min-w-[30%]">
              <label className="block font-semibold mb-1">{field.label}</label>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-indigo-200">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">🔬 Enter CBC Test Values</h1>

        <div className="mb-6">
          <label className="block font-bold mb-2">Select Disease</label>
          <select
            value={disease}
            onChange={(e) => {
              setFormData({});
              setDisease(e.target.value);
            }}
            className="w-full p-3 border rounded-md"
          >
            <option value="">-- Choose Disease --</option>
            <option value="anemia">Anemia</option>
            <option value="leukemia">Leukemia</option>
          </select>
        </div>

        {disease && (
          <form onSubmit={handleSubmit}>
            {renderFields(disease === 'anemia' ? anemiaFields : leukemiaFields, disease === 'anemia' ? 2 : 3)}
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-md text-lg hover:bg-indigo-700 transition"
            >
              Next: Verify Inputs
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnterCBCValuesPage;
