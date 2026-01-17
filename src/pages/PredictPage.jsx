import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { UserIcon, CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const validationSchema = Yup.object({
  name: Yup.string().required("Patient's name is required"),
  age: Yup.number()
    .required('Age is required')
    .min(15, 'Age must be 15 or older')
    .typeError('Age must be a valid number'),
  gender: Yup.string().oneOf(['Male', 'Female'], 'Gender must be Male or Female').required('Gender is required'),
});

const PredictPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    navigate('/enter-cbc-values');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-6 sm:py-12 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Medical Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 rounded-3xl mb-4 shadow-2xl shadow-blue-500/30 animate-glow"
          >
            <UserIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">Patient Information</h1>
          <p className="text-sm sm:text-base text-slate-600 px-4">Enter patient details to begin CBC analysis</p>
        </motion.div>

        {/* Medical Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 p-6 sm:p-10"
        >
          {/* Medical Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 border-2 border-blue-100/50"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Before You Start</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Ensure all patient information is accurate for reliable CBC analysis</p>
              </div>
            </div>
          </motion.div>

        <Formik
          initialValues={{ name: '', age: '', gender: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5 sm:space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Patient Full Name *
                </label>
                <Field
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 sm:py-4 border-2 border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base hover:border-slate-300 shadow-sm hover:shadow-md"
                  placeholder="John Doe"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="mt-2 text-xs sm:text-sm text-rose-600 font-medium"
                />
              </motion.div>

              {/* Age Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <label htmlFor="age" className="block text-sm font-semibold text-slate-700 mb-2">
                  Age (years) *
                </label>
                <Field
                  id="age"
                  name="age"
                  type="number"
                  className="w-full px-4 py-3 sm:py-4 border-2 border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base hover:border-slate-300 shadow-sm hover:shadow-md"
                  placeholder="25"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="mt-2 text-xs sm:text-sm text-rose-600 font-medium"
                />
              </motion.div>

              {/* Gender Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-slate-700 mb-2">Gender *</label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {['Male', 'Female'].map((gender) => (
                    <label key={gender} className="cursor-pointer group">
                      <Field
                        type="radio"
                        name="gender"
                        value={gender}
                        className="peer hidden"
                      />
                      <div className="p-3 sm:p-4 text-center rounded-xl border-2 border-slate-200 bg-white peer-checked:border-blue-500 peer-checked:bg-gradient-to-br peer-checked:from-blue-50 peer-checked:to-cyan-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md group-hover:scale-[1.02]">
                        <span className="text-slate-700 peer-checked:text-blue-700 font-semibold text-sm sm:text-base">{gender}</span>
                      </div>
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="mt-2 text-xs sm:text-sm text-rose-600 font-medium"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white font-bold py-4 sm:py-5 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all group flex items-center justify-center gap-2 text-base sm:text-lg"
                disabled={isSubmitting}
              >
                <span>Continue to CBC Entry</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Form>
          )}
        </Formik>
        </motion.div>
      </div>
    </div>
  );
};

export default PredictPage;
