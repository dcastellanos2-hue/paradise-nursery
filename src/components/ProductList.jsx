import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./ProductList.css";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          id: "1",
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          id: "2",
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          id: "3",
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba",
          description: "Calming scent, helps reduce stress.",
          cost: "$20"
        },
        {
          id: "4",
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729800077-ac6c6a992c88",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18"
        }
      ]
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <a href="/" onClick={onHomeClick}>
              <div>
                <h3>Paradise Nursery</h3>
                <p>Where Green Meets Serenity</p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h2 style={{ color: "white" }}>Plants</h2>
        </div>
        <div>
          <a href="#" className="cart">
            <h1 className="cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Flat" height="68" width="68">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#fafafa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <span className="cart_quantity_count">{totalQuantity}</span>
            </h1>
          </a>
        </div>
      </div>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1><div>{category.category}</div></h1>
            <div className="product-list">
              {category.plants.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-description">{plant.description}</div>
                  <div className="product-cost">{plant.cost}</div>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.id]}
                  >
                    {addedToCart[plant.id] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;