import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bienvenido a Paradise Nursery, el lugar ideal para descubrir hermosas plantas de interior y llevar un pedacito de naturaleza a tu hogar.

        </p>

        <Link to="/plants" className="get-started-button">
          Comenzar
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/plants" element={<ProductList />} />

      <Route path="/cart" element={<CartItem />} />

      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;