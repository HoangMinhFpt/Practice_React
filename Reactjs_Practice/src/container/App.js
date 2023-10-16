
import '../style/App.scss';
import HomePage from "../view/HomePage"
import Product from "../view/Product"
import Login from './Authencation/Login';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {

  return (
    <div className="app-container">
      <Header />
      <div className='navbar-content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
