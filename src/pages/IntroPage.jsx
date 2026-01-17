import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BeakerIcon, ClipboardDocumentCheckIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 rounded-3xl mb-6 shadow-2xl shadow-blue-500/30 animate-glow"
          >
            <BeakerIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              CBC Disease
            </span>
            <br className="hidden sm:block" />
            <span className="text-slate-900">Predictor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 px-4 leading-relaxed"
          >
            AI-powered Complete Blood Count analysis for accurate
            <span className="font-semibold text-blue-600"> Anemia</span> and
            <span className="font-semibold text-cyan-600"> Leukemia</span> prediction
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/predict')}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
            >
              Start Analysis →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 font-bold text-base sm:text-lg border-2 border-slate-300 hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-lg"
            >
              Sign In
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
          {[
            {
              icon: BeakerIcon,
              title: 'AI-Powered Analysis',
              desc: 'Advanced machine learning models trained on extensive medical data',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: ClipboardDocumentCheckIcon,
              title: 'Accurate Predictions',
              desc: 'High precision detection for Anemia and Leukemia conditions',
              color: 'from-cyan-500 to-teal-500'
            },
            {
              icon: ChartBarIcon,
              title: 'Detailed Reports',
              desc: 'Comprehensive analysis with clear visualizations and insights',
              color: 'from-teal-500 to-emerald-500'
            },
            {
              icon: ShieldCheckIcon,
              title: 'Secure & Private',
              desc: 'Your medical data is processed securely with full privacy',
              color: 'from-emerald-500 to-green-500'
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8 + (i * 0.1), type: 'spring' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg border-2 border-white/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 shadow-md`}
              >
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border-2 border-white/50 mx-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-center mb-8 sm:mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: '1', title: 'Enter Patient Info', desc: 'Provide basic patient details and demographics', color: 'from-blue-500 to-cyan-500' },
              { step: '2', title: 'Input CBC Values', desc: 'Enter Complete Blood Count test results', color: 'from-cyan-500 to-teal-500' },
              { step: '3', title: 'Get Prediction', desc: 'Receive AI-powered analysis and recommendations', color: 'from-teal-500 to-emerald-500' },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + (idx * 0.15) }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.color} rounded-2xl sm:rounded-3xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all`}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroPage;
