import "./App.css";
import Home from "./page/home";
import Menu from "./page/Menu";
import Reviews from "./page/reviews";
import Request from "./page/request";
import Donation from "./page/Donation";
import Menusupport from "./components/Menusupport";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login"; // Import Login component
import SignUp from "./page/SignUp"; // Import SignUp component
import Dashboard from "./page/Dashboard"; // Import Dashboard component
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute for protecting routes
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

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
