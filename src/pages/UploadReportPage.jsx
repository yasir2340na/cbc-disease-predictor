// src/pages/UploadReportPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const UploadReportPage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleContinue = () => {
    if (file) {
      // Navigate to manual entry page
      navigate('/enter-cbc-values');
    } else {
      alert("Please select a report file first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 px-4 py-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative bg-white/80 backdrop-blur-xl border-2 border-white/50 p-6 sm:p-8 md:p-10 rounded-3xl max-w-md w-full shadow-2xl shadow-purple-500/10"
      >
        <div className="text-center mb-6">
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 rounded-2xl sm:rounded-3xl mb-4 shadow-xl shadow-purple-500/30 animate-glow"
          >
            <span className="text-3xl sm:text-4xl">📎</span>
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Upload Report</h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed px-4">
            Upload your CBC report for reference before manual entry
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">Choose file (optional)</label>
          <div className="relative group">
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*,application/pdf"
              className="w-full text-sm file:mr-4 file:py-3 file:px-6
                file:rounded-xl file:border-0 file:text-sm file:font-semibold
                file:bg-gradient-to-r file:from-purple-600 file:to-pink-600 file:text-white 
                file:hover:shadow-lg file:transition-all file:cursor-pointer
                hover:file:from-purple-700 hover:file:to-pink-700
                cursor-pointer border-2 border-slate-200 rounded-xl p-2 hover:border-purple-300 transition-all"
            />
          </div>
          {file && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-xs sm:text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-2 rounded-lg"
            >
              ✓ {file.name}
            </motion.p>
          )}
        </div>

        <div className="flex flex-col space-y-3">
          <motion.button
            onClick={handleContinue}
            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(147, 51, 234, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            Continue to Manual Entry
          </motion.button>

          <motion.button
            onClick={() => navigate('/predict')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/80 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold border-2 border-slate-200 hover:border-purple-300 hover:bg-white transition-all"
          >
            Back
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default UploadReportPage;
