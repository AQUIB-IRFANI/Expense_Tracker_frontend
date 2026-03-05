import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import API from "../api";

const ShowExpense = () => {
  const [expense, setExpense] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/expense/${id}`)
      .then((res) => {
        setExpense(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to Delete this expense?")) {
      API.delete(`/expense/del/${id}`)
        .then(() => {
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (!expense) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <div className="card shadow-sm p-4">
          <h4 className="fw-bold mb-3">{expense.name}</h4>

          <p>
            <strong>Amount:</strong> {expense.amount}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {expense.date ? new Date(expense.date).toLocaleDateString() : ""}
          </p>

          <p className="text-muted">{expense.description}</p>

          <div className="mt-3 d-flex gap-3">
            <NavLink to={`/edit/${expense._id}`} className="btn btn-success">
              Update
            </NavLink>

            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowExpense;
