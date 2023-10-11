
import '../style/App.scss';
import Navbar from './Nav/Navbar';
import HomePage from "../view/HomePage"
import Product from "../view/Product"
import Login from './Authencation/Login';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="app-container">
      <Navbar />
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
