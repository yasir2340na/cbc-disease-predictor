import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BeakerIcon, ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
  { name: 'wbc_count', label: 'WBC Count (10^9/L)' },
  { name: 'rbc_count', label: 'RBC Count (10^12/L)' },
  { name: 'platelets_count', label: 'Platelet Count (10^9/L)' },
  { name: 'hemoglobin_level', label: 'Hemoglobin (g/dL)' },
  { name: 'bone_marrow_blasts', label: 'Bone Marrow Blasts (%)' },
  { name: 'genetic_mutation', label: 'Genetic Mutation', type: 'select', options: ['Yes', 'No'] },
  { name: 'family_history', label: 'Family History', type: 'select', options: ['Yes', 'No'] },
  { name: 'height', label: 'Height (meters)' },
  { name: 'weight', label: 'Weight (kg)' }
];

const EnterCBCValuesPage = () => {
  const [disease, setDisease] = useState('');
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const height = parseFloat(formData.height);
    const weight = parseFloat(formData.weight);
    if (!isNaN(height) && !isNaN(weight) && height > 0) {
      const bmi = (weight / (height * height)).toFixed(2);
      setFormData(prev => ({ ...prev, bmi }));
    }
  }, [formData.height, formData.weight]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = { ...formData };
    delete filteredData.height;
    delete filteredData.weight;
    navigate('/verify-input', { state: { disease, formData: filteredData } });
  };

  const renderFields = (fields) => {
    return (
      <div className={`grid gap-4 mb-6 grid-cols-1 ${disease === 'anemia' ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {fields.map((field, index) => (
          <motion.div 
            key={field.name} 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.05,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-xl -z-10" />
            <label className="block text-sm font-semibold text-gray-600 mb-2 ml-1.5">
              {field.label}
            </label>
            {field.type === 'select' ? (
              <div className="relative group">
                <select
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300
                    hover:border-blue-200 hover:shadow-md"
                >
                  <option value="">Select</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            ) : (
              <input
                type={field.type || 'text'}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm 
                  focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300
                  hover:border-blue-200 hover:shadow-md"
              />
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/80 via-teal-50/80 to-indigo-50/80 p-4"
    >
      <motion.div
        className="bg-white/90 backdrop-blur-lg p-8 rounded-[2rem] shadow-2xl w-full max-w-6xl mx-4 border border-gray-100"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <motion.div
              initial={{ rotate: -30, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", delay: 0.4 }}
            >
              <BeakerIcon className="w-12 h-12 text-teal-600/90" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600/90 to-blue-600/90 bg-clip-text text-transparent">
              CBC Test Analysis
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <label className="block font-semibold mb-2 text-gray-600 ml-1.5">Select Disease</label>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <select
              value={disease}
              onChange={(e) => {
                setFormData({});
                setDisease(e.target.value);
              }}
              className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm 
                focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300
                hover:border-blue-200 hover:shadow-md"
            >
              <option value="">-- Choose Disease --</option>
              <option value="anemia">Anemia</option>
              <option value="leukemia">Leukemia</option>
            </select>
          </motion.div>
        </motion.div>

        {disease && (
          <form onSubmit={handleSubmit}>
            {renderFields(disease === 'anemia' ? anemiaFields : leukemiaFields)}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg 
                  hover:shadow-xl hover:scale-[1.005] transition-all duration-300 relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Next: Verify Inputs 
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EnterCBCValuesPage;