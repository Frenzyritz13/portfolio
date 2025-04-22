import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import WorkerPage from './pages/WorkerPage';
import MakerPage from './pages/MakerPage';
import TravellerPage from './pages/TravellerPage';
import ReaderPage from './pages/ReaderPage';
import AdventuresPage from './pages/AdventuresPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="worker" element={<WorkerPage />} />
            <Route path="maker" element={<MakerPage />} />
            <Route path="traveller" element={<TravellerPage />} />
            <Route path="reader" element={<ReaderPage />} />
            <Route path="adventures" element={<AdventuresPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;