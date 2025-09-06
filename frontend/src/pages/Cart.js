// // src/pages/Cart.js
// import React, { useState, useEffect } from "react";
// import { getCart, removeFromCart } from "../services/api";

// function Cart() {
//   const [cart, setCart] = useState([]);

//   const loadCart = async () => {
//     try {
//       const res = await getCart(); // api.js handles JWT automatically
//       setCart(res.data);
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//     }
//   };

//   useEffect(() => {
//     loadCart();
//   }, []);

//   const handleRemove = async (itemId) => {
//     try {
//       await removeFromCart(itemId); // api.js expects only itemId
//       loadCart(); // refresh cart
//     } catch (err) {
//       console.error("Error removing item:", err);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         <ul className="list-group">
//           {cart.map((c) => (
//             <li
//               key={c._id}
//               className="list-group-item d-flex justify-content-between align-items-center"
//             >
//               {c.item.name} - ₹{c.item.price}
//               <button
//                 className="btn btn-sm btn-danger"
//                 onClick={() => handleRemove(c.item._id)}
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Cart;



// frontend/src/pages/Cart.js
import React, { useState, useEffect } from "react";
import { getCart, removeFromCart } from "../services/api";

function Cart() {
  const [items, setItems] = useState([]); // rename to items for clarity

  const loadCart = async () => {
    try {
      const res = await getCart(); // returns { items: [...] }
      setItems(res.data?.items || []); // use items array
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = async (itemId) => {
    try {
      await removeFromCart(itemId);
      loadCart();
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="list-group">
          {items.map((c) => (
            <li
              key={c.itemId?._id || c.itemId} // handle populated or plain ObjectId
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {c.itemId?.name || "Unknown"} - ₹{c.itemId?.price ?? "-"}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleRemove(c.itemId?._id || c.itemId)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
