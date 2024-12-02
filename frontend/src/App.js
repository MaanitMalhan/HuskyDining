import './App.css';
import Home from './page/home';
import Menu from './page/Menu';
import Donation from './page/Donation';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Dashboard from './page/Dashboard';
import Account from './page/Account'; // Import Account component for account info display
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />  {/* Home Page */}
            <Route path="/menu" element={<Menu />} />  {/* Menu Page */}
            <Route path="/login" element={<Login />} /> {/* Login Page */}
            <Route path="/signup" element={<SignUp />} /> {/* Sign-Up Page */}
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/account" element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;