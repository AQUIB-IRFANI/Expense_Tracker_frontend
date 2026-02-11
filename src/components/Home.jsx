import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        "https://expense-tracker-backend-ygyi.onrender.com/api/auth/logout",
        {},
        { withCredentials: true },
      )
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container-fluid px-4">
        <div className="card shadow-lg p-4">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <h2 className="text-center">Welcome To Expense Tracker</h2>
          </div>

          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `text-success text-decoration-none fw-semibold me-3 ${
                  isActive ? "fw-bold" : ""
                }`
              }
            >
              Add Expense
            </NavLink>

            <NavLink
              to="/show"
              className={({ isActive }) =>
                `text-success text-decoration-none fw-semibold me-3 ${
                  isActive ? "fw-bold" : ""
                }`
              }
            >
              Expense List
            </NavLink>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-muted">
              Track and manage your expenses efficiently. Use the buttons above
              to add new expenses or view your expense history.
            </p>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
