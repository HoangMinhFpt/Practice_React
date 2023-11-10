import "../style/App.scss";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "../view/HomePage";
import Product from "../view/Product";
import Login from "./Authencation/Login";
import Notification from "../view/Notification";
import Profile from "../view/Profile";
import Wishlist from "../view/Wishlist";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Footer from "../components/footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

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
      <Footer />
    </div>
  );
}

export default App;
