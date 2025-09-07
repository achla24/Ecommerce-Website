// // src/pages/Items.js
// import React, { useState, useEffect, useCallback } from 'react';
// import { getItems, addToCart } from '../services/api';
// import { useCart } from '../context/CartContext';

// function Items() {
//   const [items, setItems] = useState([]);
//   const [category, setCategory] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { refreshCartCount } = useCart();

//   const loadItems = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await getItems({ category, maxPrice });
//       setItems(res.data);
//     } catch (err) {
//       console.error("Error fetching items:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [category, maxPrice]);

//   useEffect(() => {
//     loadItems();
//   }, [loadItems]);

//   const handleAddToCart = async (id) => {
//     try {
//       await addToCart(id);
//       await refreshCartCount();
//     } catch (err) {
//       console.error(err);
//       alert("Login required to add to cart");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2 className="mb-0">Items</h2>
//         <button className="btn btn-outline-secondary" onClick={loadItems} disabled={loading}>
//           {loading ? 'Loading…' : 'Refresh'}
//         </button>
//       </div>
//       <div className="row g-2 mb-3">
//         <div className="col-sm-6 col-md-3">
//           <input
//             placeholder="Category"
//             className="form-control"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <div className="col-sm-6 col-md-3">
//           <input
//             placeholder="Max Price"
//             className="form-control"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//           />
//         </div>
//       </div>
//       {items.length === 0 && !loading && (
//         <div className="alert alert-info">No items found. Try different filters or add new items.</div>
//       )}
//       <div className="row">
//         {items.map((item) => (
//           <div key={item._id} className="col-md-4 mb-3">
//             <div className="card h-100 shadow-sm">
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="text-muted mb-1">Category: {item.category}</p>
//                 <p className="fw-semibold">₹{item.price}</p>
//                 <div className="mt-auto">
//                   <button
//                     className="btn btn-sm btn-primary w-100"
//                     onClick={() => handleAddToCart(item._id)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Items;


import React, { useState, useEffect, useCallback } from "react";
import { getItems, addToCart } from "../services/api";
import { useCart } from "../context/CartContext";

function Items() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const { refreshCartCount } = useCart();

  const loadItems = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getItems({ category, maxPrice });
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching items:", err);
    } finally {
      setLoading(false);
    }
  }, [category, maxPrice]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleAddToCart = async (id) => {
    try {
      await addToCart(id);
      await refreshCartCount();
    } catch (err) {
      console.error(err);
      alert("Login required to add to cart");
    }
  };

  return (
    <div
      className="min-vh-100 py-4"
      style={{
        background: "linear-gradient(135deg, #f8f9ff, #e9f0ff)",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2
            className="fw-bold mb-0"
            style={{
              background: "linear-gradient(90deg, #007bff, #6610f2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Browse Items
          </h2>
          <button
            className="btn rounded-pill px-4 fw-semibold"
            style={{
              background: "linear-gradient(90deg, #007bff, #6610f2)",
              color: "#fff",
              border: "none",
            }}
            onClick={loadItems}
            disabled={loading}
          >
            {loading ? "Loading…" : "Refresh"}
          </button>
        </div>

        {/* Filters */}
        <div className="row g-3 mb-4">
          <div className="col-sm-6 col-md-3">
            <input
              placeholder="Search by Category"
              className="form-control rounded-pill shadow-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <input
              placeholder="Max Price"
              className="form-control rounded-pill shadow-sm"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* No items */}
        {items.length === 0 && !loading && (
          <div className="alert alert-info text-center shadow-sm rounded-pill">
            No items found. Try different filters or add new items.
          </div>
        )}

        {/* Item Cards */}
        <div className="row">
          {items.map((item) => (
            <div key={item._id} className="col-md-4 col-lg-3 mb-4">
              <div
                className="card h-100 border-0 rounded-4 shadow-sm"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold text-dark">
                    {item.name}
                  </h5>
                  <p className="text-muted small mb-1">
                    Category: {item.category}
                  </p>
                  <p className="fw-bold text-primary fs-5">₹{item.price}</p>
                  <div className="mt-auto">
                    <button
                      className="btn w-100 rounded-pill fw-semibold"
                      style={{
                        background:
                          "linear-gradient(90deg, #007bff, #6610f2)",
                        color: "#fff",
                        border: "none",
                      }}
                      onClick={() => handleAddToCart(item._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Items;
