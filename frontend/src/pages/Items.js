// src/pages/Items.js
import React, { useState, useEffect, useCallback } from 'react';
import { getItems, addToCart } from '../services/api';

function Items() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const loadItems = useCallback(async () => {
    try {
      const res = await getItems({ category, maxPrice });
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching items:", err);
    }
  }, [category, maxPrice]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleAddToCart = async (id) => {
    try {
      await addToCart(id); // updated api.js expects only itemId
      alert("Item added to cart!");
    } catch (err) {
      console.error(err);
      alert("Login required to add to cart");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Items</h2>
      <div className="row mb-3">
        <div className="col">
          <input
            placeholder="Category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            placeholder="Max Price"
            className="form-control"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        {items.map((item) => (
          <div key={item._id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>Category: {item.category}</p>
                <p>Price: ₹{item.price}</p>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleAddToCart(item._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
