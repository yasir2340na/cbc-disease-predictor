import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ConfirmDataPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ocrText = location.state?.ocrText || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Review OCR Extraction</h1>
            <p className="text-slate-600 mt-2">
              Validate the extracted text from your CBC report before continuing to manual input.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/upload-report')}
              className="px-5 py-2.5 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-slate-300 shadow-sm transition"
            >
              Re-upload
            </button>
            <button
              onClick={() => navigate('/enter-cbc-values')}
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white shadow hover:shadow-md transition"
            >
              Continue
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 rounded-2xl p-6 border border-white/60 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Extracted Text</h2>
            <textarea
              value={ocrText}
              readOnly
              className="w-full h-80 p-4 text-sm bg-slate-50 rounded-xl border border-slate-200 resize-none"
              placeholder="OCR text will appear here"
            />
            <p className="text-xs text-slate-500 mt-2">
              If the text looks incorrect, re-upload the report with better lighting or sharper focus.
            </p>
          </div>

          <div className="bg-white/80 rounded-2xl p-6 border border-white/60 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Next Steps</h2>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>• Switch to manual entry to input exact CBC values.</li>
              <li>• Use the OCR text as reference to avoid typing errors.</li>
              <li>• Verify values carefully before prediction.</li>
            </ul>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => navigate('/enter-cbc-values')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold shadow hover:shadow-lg transition"
              >
                Go to CBC Entry
              </button>
              <button
                onClick={() => navigate('/predict')}
                className="w-full py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold hover:border-slate-300 transition"
              >
                Back to Predict Home
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmDataPage;
