// src/pages/Cart.js
import React, { useEffect, useMemo, useState } from "react";
import { getCart, removeFromCart } from "../services/api";
import { useCart } from "../context/CartContext";

function Cart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { refreshCartCount } = useCart();

  const loadCart = async () => {
    try {
      setLoading(true);
      const res = await getCart(); // returns { items: [...] }
      setItems(res.data?.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = async (itemId) => {
    try {
      await removeFromCart(itemId);
      await loadCart();
      await refreshCartCount();
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, it) => {
      const price = Number(it?.itemId?.price) || 0;
      const qty = Number(it?.quantity) || 1;
      return sum + price * qty;
    }, 0);
    return { subtotal };
  }, [items]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Your Cart</h2>
        <button className="btn btn-outline-secondary" onClick={loadCart} disabled={loading}>
          {loading ? "Loading…" : "Refresh"}
        </button>
      </div>

      {loading && <div className="alert alert-secondary">Loading cart…</div>}

      {!loading && items.length === 0 ? (
        <div className="alert alert-info">No items in cart</div>
      ) : (
        <div className="row">
          <div className="col-12 col-lg-8">
            <ul className="list-group mb-3">
              {items.map((c) => {
                const id = c.itemId?._id || c.itemId;
                const name = c.itemId?.name || "Unknown";
                const price = Number(c.itemId?.price) || 0;
                const qty = Number(c.quantity) || 1;
                return (
                  <li
                    key={id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div className="fw-semibold">{name}</div>
                      <small className="text-muted">₹{price} × {qty}</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="me-3 fw-semibold">₹{(price * qty).toFixed(2)}</div>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemove(id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Summary</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span className="fw-semibold">₹{totals.subtotal.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary w-100" disabled>
                  Checkout (Coming soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;