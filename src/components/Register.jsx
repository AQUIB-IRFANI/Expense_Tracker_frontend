import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://expense-tracker-backend-ygyi.onrender.com/api/auth/register",
        { ...data },
        { withCredentials: true },
      )
      .then(() => {
        console.log("login");

        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container my-5 px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card h-100 shadow-lg p-4">
              <h1 className="text-center mb-4">Registration</h1>
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
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder=""
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder=""
                      onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                      }}
                    />
                  </div>
                  <div>
                    <button className="btn btn-primary mb-3">Register</button>
                  </div>
                  <div>
                    <NavLink to={"/login"}>
                      Already have an account? Login here
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
