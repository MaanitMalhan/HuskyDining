import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./store";
import { Account } from "./Pages/Account";
import { About } from "./Pages/About.jsx";
import { Request } from "./Pages/Request";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Menu } from "./Pages/Menu";
import { Donate } from "./Pages/Donate.jsx";
import { Home_loggedout } from "./Pages/Home.jsx";
import { HomeLoggedIn } from "./Pages/loggedin.jsx"
import { useSelector } from "react-redux";
import { PrivateRoute, PrivateRouteDashboard } from "./components/PrivateRoute";

const AppRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={userInfo ? <HomeLoggedIn /> : <Home_loggedout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/request" element={<Request />} />
        <Route path="/menu" element={<Menu />} />

        {/* Private Route */}
        <Route path="" element={<PrivateRouteDashboard />}>
          <Route path="/donate" element={<Donate />} />
          <Route path="/dashboard/:id" element={<Account />} />
        </Route>
      </Route>
    </Routes>
  );
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
