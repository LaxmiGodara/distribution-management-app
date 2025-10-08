import React from 'react'; // Import the React library to enable JSX and React component features
import DailyLogPage from './pages/DailyLogPage'; // Import the DailyLogPage component from the pages directory

// Define the main App component as a functional component
function App() {
  // The App component returns the main structure of the application UI
  return (
    // The outer div provides padding, sets a maximum width, and centers the content horizontally
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Distribution Management App</h1> {/* Main heading for the application */}
      <hr style={{ margin: '20px 0' }} /> {/* Horizontal rule with vertical spacing for visual separation */}
      <DailyLogPage /> {/* Render the DailyLogPage component, which contains the main page content */}
    </div>
  );
}

// Export the App component as the default export so it can be used in other parts of the application
export default App;