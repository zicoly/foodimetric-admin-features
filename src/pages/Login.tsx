import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@foodimetric.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "admin@foodimetric.com" && password === "admin123") {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setInitialLoad(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (initialLoad) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 py-12 rounded-2xl shadow-md space-y-6 w-full max-w-md relative"
      >
        {isLoading && <Loader />}
        <h2 className="text-2xl lg:text-3xl font-[cursive] font-bold text-[#FFBA08] text-center">
          Admin Login
        </h2>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          disabled={isLoading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#FFBA08] text-white py-2 rounded hover:bg-[#e0a800] transition-colors duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed font-bold"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
