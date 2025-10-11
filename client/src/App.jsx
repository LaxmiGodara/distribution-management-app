import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DailyLogPage from './pages/DailyLogPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>Distribution Management App</h1>
        <hr style={{ margin: '20px 0' }} />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DailyLogPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


