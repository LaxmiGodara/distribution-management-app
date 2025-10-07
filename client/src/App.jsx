import React from 'react';
import DailyLogPage from './pages/DailyLogPage';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Distribution Management App</h1>
      <hr style={{ margin: '20px 0' }} />
      <DailyLogPage />
    </div>
  );
}

export default App;