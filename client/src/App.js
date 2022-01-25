import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/login/loginPage';
import HomePage from './routes/home/homePage';
import { PrivateRoute } from './component/routing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<LoginPage />} />
        <Route
          exact
          path="/homepage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
