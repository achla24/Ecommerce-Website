const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Add item to cart
// router.post("/add", async (req, res) => {
router.post("/add", auth, async (req, res) => {
  try {
    // const { userId, itemId, quantity } = req.body;
    const { itemId, quantity = 1 } = req.body;
    const userId = req.userId;

    // let cart = await Cart.findOne({ user: userId });
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // cart = await Cart.create({ user: userId, items: [{ item: itemId, quantity }] });
      cart = await Cart.create({ userId, items: [{ itemId, quantity }] });
    } else {
      // const existingItem = cart.items.find(i => i.item.toString() === itemId);
      const existingItem = cart.items.find((i) => i.itemId.toString() === itemId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        // cart.items.push({ item: itemId, quantity });
        cart.items.push({ itemId, quantity });
      }
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user cart
// router.get("/:userId", async (req, res) => {
router.get("/me", auth, async (req, res) => {
  try {
    // const cart = await Cart.findOne({ user: req.params.userId }).populate("items.item");
    const cart = await Cart.findOne({ userId: req.userId }).populate("items.itemId");
    res.json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove item from cart
// router.delete("/remove/:userId/:itemId", async (req, res) => {
router.delete("/remove/:itemId", auth, async (req, res) => {
  try {
    // const { userId, itemId } = req.params;
    // const cart = await Cart.findOne({ user: userId });
    const { itemId } = req.params;
    const cart = await Cart.findOne({ userId: req.userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // cart.items = cart.items.filter(i => i.item.toString() !== itemId);
    cart.items = cart.items.filter((i) => i.itemId.toString() !== itemId);
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
