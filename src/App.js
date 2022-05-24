import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Register from "./Component/Pages/Register/Register";
import Header from "./Component/Shered/Header/Header";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import Purchase from "./Component/Pages/Purchase/Purchase";
import RequireAuth from "../src/Component/Shered/RequireAuth/RequireAuth";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import MyOrder from "./Component/Pages/Dashboard/MyOrder";
import AddReview from "./Component/Pages/Dashboard/AddReview";
import MyProfile from "./Component/Pages/Dashboard/MyProfile";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder />}></Route>
          <Route path="/dashboard/add_review" element={<AddReview />}></Route>
          <Route path="/dashboard/my_profile" element={<MyProfile />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
