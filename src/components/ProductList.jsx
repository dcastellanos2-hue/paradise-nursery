import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/CartSlice";
import products from "../data/products";

import Header from "./Header";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(products.map((product) => product.category))];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Header />

      <main className="products-page">
        <h1>Nuestras Plantas de Interior</h1>

        <p className="products-intro">
          Descubre la planta perfecta para tu hogar.
        </p>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>

            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="product-info">
                      <h3>{product.name}</h3>

                      <p className="price">
                        ${product.price.toFixed(2)}
                      </p>

                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={isInCart(product.id)}
                      >
                        {isInCart(product.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;