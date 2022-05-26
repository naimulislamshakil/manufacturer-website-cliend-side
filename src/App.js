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
import OrderDetails from "./Component/Pages/Dashboard/OrderDetails";
import AllUser from "./Component/Pages/Dashboard/AllUsers";
import ManageAllOrder from "./Component/Pages/Dashboard/ManageAllOrder";
import RequierAdmin from "./Component/Shered/RequirAdmin/RequierAdmin";
import OrderCard from "./Component/Pages/Dashboard/OrderCard";
import AddProduct from "./Component/Pages/Dashboard/AddProduct";
import auth from "./firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "./Component/Hooks/useAdmin";
import CoustomerProduct from "./Component/Pages/CoustomerProduct/CoustomerProduct";
import Footer from "./Component/Shered/Footer/Footer";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<CoustomerProduct />} />
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
          <Route path="/dashboard/:id" element={<OrderDetails />}></Route>
          <Route path="/dashboard/add_review" element={<AddReview />}></Route>
          <Route path="/dashboard/my_profile" element={<MyProfile />}></Route>
          <Route
            path="/dashboard/all_user"
            element={
              <RequierAdmin>
                <AllUser />
              </RequierAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/order/:id"
            element={
              <RequierAdmin>
                <OrderCard />
              </RequierAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manage_order"
            element={
              <RequierAdmin>
                <ManageAllOrder />
              </RequierAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/add_product"
            element={
              <RequierAdmin>
                <AddProduct />
              </RequierAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
