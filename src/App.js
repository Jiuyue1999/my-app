import './App.css';
import React from "react";
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import PurchasePage from './components/purchase';
import { Link, useNavigate } from 'react-router-dom';
import PaymentEntry from './components/paymentEntry';
import ShipmentPage from './components/shipmentPage';
import OrderDetailsPage from './components/orderDetails';
import Finish from './components/finish';
import SampleFooter from "./components/footer";
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import SmallPage from './components/smallpage';

function App() {
  const [cart, setCart] = useState([]);
  const [purchaseData, setPurchaseData] = useState(null);
  return (
    <div className="App">
    <Router>
    <Navbar />
      <div className="content">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path="/cart" element={<Cart cart={cart} />} />
      <Route path='/purchase' element={<PurchasePage
              cart={cart}
              setCart={setCart}
              setPurchaseData={setPurchaseData}
              
            />} />
      <Route path='/paymentEntry' element={<PaymentEntry/>} />
      <Route path="/shipmentPage" element={<ShipmentPage />} />
      <Route path="/orderDetails" element={<OrderDetailsPage />} />
      <Route path="/finish" element={<Finish />} />
      <Route path="/smallpage" element={<SmallPage />} />
      </Routes>
      </div>
      <SampleFooter />
    </Router>
    </div>
  );
}

export default App;