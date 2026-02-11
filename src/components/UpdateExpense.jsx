import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateExpense = () => {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    date: "",
    description: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://expense-tracker-backend-ygyi.onrender.com/expense/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setExpense({
          name: res.data.name || "",
          amount: res.data.amount || "",
          date: res.data.date
            ? res.data.date.split("T")[0] // fix for date input format
            : "",
          description: res.data.description || "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://expense-tracker-backend-ygyi.onrender.com/expense/edit/${id}`,
        expense,
        {
          withCredentials: true,
        },
      )
      .then(() => {
        navigate("/show");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container my-5 px-3">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-4">Update Expense</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Expense Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={expense.name}
                  onChange={(e) =>
                    setExpense({ ...expense, name: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  value={expense.amount}
                  onChange={(e) =>
                    setExpense({ ...expense, amount: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={expense.date}
                  onChange={(e) =>
                    setExpense({ ...expense, date: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  value={expense.description}
                  onChange={(e) =>
                    setExpense({ ...expense, description: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Update Expense
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateExpense;
