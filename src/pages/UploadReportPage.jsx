// src/pages/UploadReportPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';

const UploadReportPage = () => {
  const [file, setFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setIsUploaded(false);
  };

  const handleFileUpload = () => {
    if (file) {
      setIsUploaded(true);
    } else {
      alert("Please select a report file.");
    }
  };

  const handleConfirmValues = () => {
    setLoading(true);

    Tesseract.recognize(file, 'eng', {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        setLoading(false);
        // Pass extracted text to confirm page
        navigate('/confirm-data', { state: { ocrText: text } });
      })
      .catch((err) => {
        setLoading(false);
        alert("OCR failed: " + err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-purple-600">Upload CBC Report</h1>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700">Upload your CBC report</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <div className="flex flex-col space-y-4">
          {!isUploaded ? (
            <button
              onClick={handleFileUpload}
              className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition duration-300"
            >
              Upload Report
            </button>
          ) : (
            <button
              onClick={handleConfirmValues}
              className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300"
            >
              {loading ? "Extracting..." : "Confirm Values"}
            </button>
          )}

          <button
            onClick={() => navigate('/predict')}
            className="bg-gray-600 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700 transition duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadReportPage;
