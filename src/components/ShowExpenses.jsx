import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ShowExpenses = () => {
  const [expense, setExpense] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://expense-tracker-backend-ygyi.onrender.com/expense/", {
        withCredentials: true,
      })
      .then((res) => {
        setExpense(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Expense List</h2>

        <div className="row g-4">
          {/* Loading State */}
          {loading && (
            <div className="col-12 text-center">
              <p className="text-muted">Loading expenses...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && expense.length === 0 && (
            <div className="col-12 text-center">
              <p className="text-muted">No expenses found.</p>
            </div>
          )}

          {/* Expense Cards */}
          {!loading &&
            expense.length > 0 &&
            expense.map((exp) => (
              <div className="col-12" key={exp._id}>
                <div className="card h-100 shadow-sm p-3 d-flex flex-column">
                  <h5 className="fw-bold mb-2">{exp.name}</h5>

                  <hr />

                  <p className="mb-1">
                    <strong>Amount:</strong> ₹{exp.amount}
                  </p>

                  <p className="mb-1">
                    <strong>Date:</strong>{" "}
                    {exp.date ? new Date(exp.date).toLocaleDateString() : ""}
                  </p>

                  <NavLink
                    to={`/expense/${exp._id}`}
                    className="text-success text-decoration-none fw-semibold mt-auto"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShowExpenses;
