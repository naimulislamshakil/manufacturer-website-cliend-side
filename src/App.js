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

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/purchase/:id" element={<Purchase />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
