import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/loginPage';
import HomePage from './routes/homePage';
// import RegisterPage from './routes/register/registerPage';
// import { PrivateRoute } from './component/routing';
// import NotFoundPage from './routes/page404';
// import StatisticPage from './routes/statistic/statisticPage';
// import ConvertCurency from './component/convertCurency';
const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>LoginPage
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          {/* <Route exact path="/register" element={<RegisterPage />} />
          <Route
            exact
            path="/homepage"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          /> */}
          {/* ConvertCurency */}
          {/* <Route path="*" element={<ConvertCurency />} /> */}
          {/* <Route path="/statistic" element={<StatisticPage />} />  */}
          {/* 404 rounte */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
};
export default App;
