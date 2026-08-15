import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

import Header from "./Header";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <Header />

      <main className="cart-page">
        <h1>Carrito de Compras</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Tu carrito está vacío</h2>

            <Link to="/plants" className="continue-button">
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <h2>Total Plants: {totalItems}</h2>

              <h2>
                Total Cost: ${totalPrice.toFixed(2)}
              </h2>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-item-info">
                      <h2>{item.name}</h2>

                      <p>
                        Unit Price: ${item.price.toFixed(2)}
                      </p>

                      <p>
                        Item Total: ${itemTotal.toFixed(2)}
                      </p>

                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            handleDecrease(item.id)
                          }
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            handleIncrease(item.id)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="remove-button"
                        onClick={() =>
                          handleRemove(item.id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-actions">
              <Link
                to="/plants"
                className="continue-button"
              >
                Continuar Comprando
              </Link>

              <button
                className="checkout-button"
                onClick={() =>
                  alert("Checkout Coming Soon!")
                }
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;