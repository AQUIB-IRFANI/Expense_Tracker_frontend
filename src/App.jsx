import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddExpense from "./components/AddExpense";
import UpdateExpense from "./components/UpdateExpense";
import ShowExpenses from "./components/ShowExpenses";
import ShowExpense from "./components/ShowExpense";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/show"
            element={
              <ProtectedRoute>
                <ShowExpenses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddExpense />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <UpdateExpense />
              </ProtectedRoute>
            }
          />
          <Route
            path="/expense/:id"
            element={
              <ProtectedRoute>
                <ShowExpense />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
