import "../style/App.scss";
import HomePage from "../view/HomePage";
import Product from "../view/Product";
import Login from "./Authencation/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Notification from "../view/Notification";
import Profile from "../view/Profile";
import Wishlist from "../view/Wishlist";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="navbar-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
