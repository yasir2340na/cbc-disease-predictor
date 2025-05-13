import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import PredictPage from './pages/PredictPage';
import UploadReportPage from './pages/UploadReportPage';
import EnterCBCValuesPage from './pages/EnterCBCValuesPage';
import PredictionResultPage from './pages/PredictionResultPage';
import VerifyInputPage from './pages/VerifyInputPage'; // ✅ Newly added
import Header from './pages/Header';

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/predict" element={<PredictPage />} />
      
      <Route path="/enter-cbc-values" element={<EnterCBCValuesPage />} />
      <Route path="/verify-input" element={<VerifyInputPage />} /> {/* ✅ New route */}
      <Route path="/prediction-result" element={<PredictionResultPage />} />
    </Routes>
    </>
  );
}

export default App;
