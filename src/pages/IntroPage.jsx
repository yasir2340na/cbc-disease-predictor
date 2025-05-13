import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import anemiapic from '/src/pages/anemiapic.png';
import lukemiapic from '/src/pages/lukemiapic.png';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center px-4 md:px-16 gap-6">
      
      {/* Left Image - Increased Flex Basis with Same Background */}
      <div className="hidden md:flex basis-[60%] justify-end items-center bg-white">
        <motion.img
          src={anemiapic}
          alt="Anemia"
          className="h-[32rem] w-[24rem] rounded-xl shadow-lg object-cover"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Content Card Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 p-10 rounded-3xl shadow-2xl text-center max-w-xl w-full transform transition-transform hover:-translate-y-1 z-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-700">CBC Disease Predictor</h1>
        <p className="text-gray-700 mb-4 text-lg">
          Inser your CBC report data and let our AI model help you understand your health better.
        </p>
        <p className="text-sm italic text-gray-500 mb-6">🔬 Empowering diagnostics through AI precision</p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/predict')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition duration-300"
        >
          Predict Now →
        </motion.button>
      </motion.div>

      {/* Right Image - Increased Flex Basis with Same Background */}
      <div className="hidden md:flex basis-[50%] justify-start items-center bg-white">
        <motion.img
          src={lukemiapic}
          alt="Leukemia"
          className="h-[32rem] w-[24rem] rounded-xl shadow-md opacity-60 object-cover"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        />
      </div>
    </div>
  );
};

export default IntroPage;
