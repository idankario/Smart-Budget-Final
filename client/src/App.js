import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/loginPage';
import HomePage from './routes/homePage';
import RegisterPage from './routes/registerPage';
import MenuPage from './routes/menuPage';
import StatisticPage from './routes/statisticPage';
import { PrivateRoute } from './routes/privateRouter/routing';
import AddFamily from './routes/addFamily';
import NotFoundPage from './routes/page404';
import ExpensesPage from './routes/expensesPage';
// import StatisticPage from './routes/statistic/statisticPage';
// import ConvertCurency from './component/convertCurency';
const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>LoginPage
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route
            exact
            path="/menu"
            element={
              <PrivateRoute>
                <MenuPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/statistic"
            element={
              <PrivateRoute>
                <StatisticPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/expenses"
            element={
              <PrivateRoute>
                <ExpensesPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/family"
            element={
              <PrivateRoute>
                <AddFamily />
              </PrivateRoute>
            }
          />
          
          {/* ConvertCurency */}
          {/* <Route path="*" element={<ConvertCurency />} /> */}
          {/* <Route path="/statistic" element={<StatisticPage />} />  */}
          {/* 404 rounte */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};
export default App;
