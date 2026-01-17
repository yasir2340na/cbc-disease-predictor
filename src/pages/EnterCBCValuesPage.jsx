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
      <div className={`grid gap-4 sm:gap-6 mb-6 grid-cols-1 ${disease === 'anemia' ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
        {fields.map((field, index) => (
          <motion.div 
            key={field.name} 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.05,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative"
          >
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {field.label}
            </label>
            {field.type === 'select' ? (
              <div className="relative group">
                <select
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all
                    hover:border-slate-300"
                >
                  <option value="">Select</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ChevronDownIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            ) : (
              <input
                type={field.type || 'text'}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl 
                  focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all
                  hover:border-slate-300"
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
      className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 py-6 sm:py-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 w-full max-w-6xl mx-auto p-6 sm:p-8 md:p-10"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/30 animate-glow"
            >
              <BeakerIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                CBC Test Values
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">Enter Complete Blood Count parameters</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <label className="block font-semibold mb-3 text-slate-700 text-sm sm:text-base">Select Condition to Test *</label>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <select
              value={disease}
              onChange={(e) => {
                setFormData({});
                setDisease(e.target.value);
              }}
              className="w-full px-4 py-3 sm:py-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-700 font-medium text-sm sm:text-base shadow-sm hover:shadow-md"
            >
              <option value="">-- Select Disease --</option>
              <option value="anemia">🩸 Anemia Analysis</option>
              <option value="leukemia">🔬 Leukemia Analysis</option>
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
              className="mt-6 sm:mt-8"
            >
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white font-bold py-4 sm:py-5 px-6 rounded-xl shadow-xl 
                  hover:shadow-2xl transition-all relative group text-base sm:text-lg"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Verify & Continue
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline transition-transform group-hover:translate-x-2" />
                </span>
              </motion.button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EnterCBCValuesPage;