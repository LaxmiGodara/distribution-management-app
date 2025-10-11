import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || !user.token) {
    // If no user or token, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If user is logged in, show the page they requested
  return children;
}

export default ProtectedRoute;
