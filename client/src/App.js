import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/login/loginPage';
import HomePage from './routes/home/homePage';
import RegisterPage from './routes/register/registerPage';
import { PrivateRoute } from './component/routing';
import NotFoundPage from './routes/page404';
import StatisticPage from './routes/statistic/statisticPage';
import ConvertCurency from './component/convertCurency';
const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route
            exact
            path="/homepage"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          {/* ConvertCurency */}
          <Route path="*" element={<ConvertCurency />} />
          {/* <Route path="*" element={<StatisticPage />} />  */}
          {/* 404 rounte */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
};
export default App;
