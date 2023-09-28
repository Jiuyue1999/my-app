import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import PurchasePage from './components/purchase';
import { Link, useNavigate } from 'react-router-dom';
import PaymentEntry from './components/paymentEntry';
import ShipmentPage from './components/shipmentPage';
import OrderDetailsPage from './components/orderDetails';

import SampleFooter from "./components/footer";
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';


function App() {

  return (
    <div className="App">
    <Router>
    <Navbar />
      <div className="content">
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/purchase' element={<PurchasePage/>} />
      <Route path='/paymentEntry' element={<PaymentEntry/>} />
      <Route path="/shipmentPage" element={<ShipmentPage />} />
      <Route path="/orderDetails" element={<OrderDetailsPage />} />
      </Routes>
      </div>
      <SampleFooter />
    </Router>
    </div>
  );
}

export default App;