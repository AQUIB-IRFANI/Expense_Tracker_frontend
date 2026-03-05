import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
const AddExpense = () => {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    date: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/expense/add", { ...expense })
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
              <h1 className="text-center mb-4">Add New Expense</h1>
              <div className="card-body">
                <form onSubmit={handleSubmit} className="p-2">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Expense Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder=""
                      onChange={(e) => {
                        setExpense({ ...expense, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                      Amount:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="amount"
                      id="amount"
                      placeholder=""
                      onChange={(e) => {
                        setExpense({
                          ...expense,
                          amount: Number(e.target.value),
                        });
                      }}
                    />{" "}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      id="date"
                      placeholder=""
                      onChange={(e) => {
                        setExpense({ ...expense, date: e.target.value });
                      }}
                    />{" "}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      name="description"
                      id="description"
                      placeholder=""
                      onChange={(e) => {
                        setExpense({ ...expense, description: e.target.value });
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Add Expense
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
