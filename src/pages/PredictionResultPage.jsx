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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6 md:p-10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: prediction === "1" ? -180 : 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl mb-4 shadow-2xl ${
            prediction === "1" 
              ? "bg-gradient-to-br from-rose-500 via-red-500 to-red-600 shadow-red-500/30" 
              : "bg-gradient-to-br from-emerald-500 via-green-500 to-green-600 shadow-green-500/30"
          } animate-glow`}>
            <span className="text-4xl sm:text-5xl text-white">{prediction === "1" ? "⚠️" : "✓"}</span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
            Analysis Complete
          </h1>
          <p className="text-sm sm:text-base text-slate-600 px-4">AI-powered CBC disease prediction result</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 p-6 sm:p-10 transition-all ${
            prediction === "1" ? "border-rose-200/50" : "border-emerald-200/50"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-slate-100">
            <div>
              <div className="text-sm font-semibold text-slate-500 mb-1">Condition Tested</div>
              <h2 className="text-3xl font-bold text-slate-900">
                {disease.charAt(0).toUpperCase() + disease.slice(1)}
              </h2>
            </div>
            <div className={`px-8 py-4 rounded-2xl text-lg font-bold shadow-lg ${
              prediction === "1"
                ? "bg-gradient-to-r from-rose-500 to-red-600 text-white"
                : "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
            }`}>
              {prediction === "1" ? "Positive" : "Negative"}
            </div>
          </div>

          {Object.keys(inputSummary).length > 0 && (
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 mt-6 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm">📊</span>
                CBC Parameters
              </h3>
              <div className="space-y-2">
                {renderInputSummary()}
              </div>
            </div>
          )}
        </motion.div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/predict")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:shadow-xl transition-all"
          >
            Analyze Another Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionResultPage;
