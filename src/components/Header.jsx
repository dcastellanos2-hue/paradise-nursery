import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <Link to="/" className="logo">
        Paradise Nursery
      </Link>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/plants">Plantas</Link>

        <Link to="/cart" className="cart-link">
          🛒 Carrito
          <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;