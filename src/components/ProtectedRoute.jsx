import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("https://expense-tracker-backend-ygyi.onrender.com/api/auth/check-auth", {
        withCredentials: true,
        timeout: 5000, // optional
      })
      .then((res) => {
        if (res.status === 200 && res.data.userId) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Auth check failed:", err);
        setAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!authenticated) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
