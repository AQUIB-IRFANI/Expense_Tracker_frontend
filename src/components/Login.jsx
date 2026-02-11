import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://expense-tracker-backend-ygyi.onrender.com/api/auth/login",
        {
          username: data.username,
          password: data.password,
        },
        { withCredentials: true },
      )
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container my-5 px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card h-100 shadow-lg p-4">
              <h2 className="text-center mb-4">Login</h2>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Username:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder=""
                      onChange={(e) => {
                        setData({ ...data, username: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder=""
                      onChange={(e) => {
                        setData({ ...data, password: e.target.value });
                      }}
                    />
                    <button type="submit" className="btn btn-primary my-3">
                      Login
                    </button>
                    <div className="my-3">
                      <NavLink to={"/"}>New User? Register here</NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
