
import express from "express";
const router = express.Router();
import Item from "../models/Item.js"; 
// Create a new Item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get A single item by id
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update By Id
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, 
    });
    if (!updatedItem) return res.status(404).json({ message: "Item not found" });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete By Id
router.delete("/:id", async (req, res) => {
  try {
    const deleteItem = await Item.findByIdAndDelete(req.params.id);
    if (!deleteItem) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
