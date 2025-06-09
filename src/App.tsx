import { Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "./components/Layout/SidebarLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Meals from "./pages/Meals";

const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/*"
      element={
        isAuthenticated ? (
          <SidebarLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/meals" element={<Meals />} />
            </Routes>
          </SidebarLayout>
        ) : (
            <Navigate to="/login" />
        )
      }
    />
  </Routes>
);

export default App;
