const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

// Get all items with filters
router.get("/", async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;

    let filter = {};
    if (category) filter.category = category;
    if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
    if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };

    const items = await Item.find(filter);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create item
router.post("/", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update item
router.put("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete item
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
