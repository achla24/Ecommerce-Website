// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getCart } from "../services/api";

const CartContext = createContext({
  cartCount: 0,
  refreshCartCount: async () => {},
});

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const refreshCartCount = async () => {
    try {
      const res = await getCart();
      const items = res.data?.items || [];
      // Sum quantities (fallback to 1 if missing)
      const count = items.reduce((sum, it) => sum + (Number(it.quantity) || 1), 0);
      setCartCount(count);
    } catch (e) {
      // On error (e.g., not logged in), show 0
      setCartCount(0);
    }
  };

  useEffect(() => {
    // Try to load on mount, ignore failures (e.g., not logged in yet)
    refreshCartCount();
  }, []);

  const value = useMemo(() => ({ cartCount, refreshCartCount }), [cartCount]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);