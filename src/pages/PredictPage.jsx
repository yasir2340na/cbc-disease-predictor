// PredictPage.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
// Ensure these images have transparent backgrounds (PNG) and are placed in src/assets/
import femaledoctor from '/src/pages/femaledoctor.jpg';
import maledoctor from '/src/pages/maledoctor.jpg';

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
  const formRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Measure form container to size images
  useEffect(() => {
    const updateDimensions = () => {
      if (formRef.current) {
        const { clientWidth, clientHeight } = formRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
    navigate('/enter-cbc-values');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Left doctor animation, sized to form container, with blend mode for transparent bg */}
      <motion.img
        src={femaledoctor}
        alt="Female Doctor holding report"
        className="hidden md:block absolute left-0 object-contain mix-blend-multiply"
        style={{ width: dimensions.width, height: dimensions.height }}
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Form container (measured via ref) */}
      <div
        ref={formRef}
        className="z-10 bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 transition-all duration-300 hover:shadow-3xl"
      >
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            User Information
          </h1>
          <div className="mt-3 h-1 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full w-20 mx-auto animate-pulse" />
        </header>

        <Formik
          initialValues={{ name: '', age: '', gender: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  User Name
                </label>
                <Field
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border-0 rounded-xl bg-gray-50/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition-all duration-300 placeholder-gray-400/70"
                  placeholder="Enter full name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="mt-1 text-sm text-rose-600 flex items-center gap-1 animate-fade-in"
                />
              </div>

              {/* Age Field */}
              <div className="relative">
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                  Age
                </label>
                <Field
                  id="age"
                  name="age"
                  type="number"
                  className="w-full px-4 py-3 border-0 rounded-xl bg-gray-50/80 focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition-all duration-300"
                  placeholder="Enter patient age"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="mt-1 text-sm text-rose-600 flex items-center gap-1 animate-fade-in"
                />
              </div>

              {/* Gender Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                <div className="flex gap-4">
                  {['Male', 'Female'].map((gender) => (
                    <label key={gender} className="flex-1 cursor-pointer">
                      <Field
                        type="radio"
                        name="gender"
                        value={gender}
                        className="peer hidden"
                      />
                      <div className="w-full p-3 text-center rounded-xl bg-gray-50/80 peer-checked:bg-teal-500/10 peer-checked:ring-2 peer-checked:ring-teal-500 transition-all duration-300 hover:bg-teal-50/50">
                        <span className="text-gray-700 peer-checked:text-teal-700 font-medium">{gender}</span>
                      </div>
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="mt-1 text-sm text-rose-600 flex items-center gap-1 animate-fade-in"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-0.5 group flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                <span>Submit & Predict</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right doctor animation, sized to form container, with blend mode for transparent bg */}
      <motion.img
        src={maledoctor}
        alt="Male Doctor holding report"
        className="hidden md:block absolute right-0 object-contain mix-blend-multiply"
        style={{ width: dimensions.width, height: dimensions.height }}
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

export default PredictPage;
