import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import PredictPage from './pages/PredictPage';
import UploadReportPage from './pages/UploadReportPage';
import EnterCBCValuesPage from './pages/EnterCBCValuesPage';
import PredictionResultPage from './pages/PredictionResultPage';
import VerifyInputPage from './pages/VerifyInputPage'; // ✅ Newly added
import Header from './pages/Header';
import ConfirmDataPage from './pages/ConfirmDataPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/predict" element={<PredictPage />} />
        <Route path="/upload-report" element={<UploadReportPage />} />
        <Route path="/confirm-data" element={<ConfirmDataPage />} />
        <Route path="/enter-cbc-values" element={<EnterCBCValuesPage />} />
        <Route path="/verify-input" element={<VerifyInputPage />} /> {/* ✅ New route */}
        <Route path="/prediction-result" element={<PredictionResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
