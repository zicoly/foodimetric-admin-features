import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SidebarLayout from "./components/Layout/SidebarLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Meals from "./pages/Meals";
import { useEffect, useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);
  }, [location]); 

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <SidebarLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/meals" element={<Meals />} />
              </Routes>
            </SidebarLayout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};

export default App;
