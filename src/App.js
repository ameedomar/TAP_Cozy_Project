import './App.css';
import Chair from './Pages/chair';
import CartPage from './Pages/CartPage';
import AddressPage from './Pages/AddressPage';
import ShippingPage from './Pages/ShippingPage';
import PaymentPage from './Pages/PaymentPage';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Chair />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
