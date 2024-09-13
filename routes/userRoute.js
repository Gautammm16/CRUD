import express from "express";
import Item from "../models/Item.js"; // Ensure that "Item" is your User model
const router = express.Router();

// Register new User
router.post("/", async (req, res) => {
    try {
        const newUser = new Item(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // Respond with 201 Created status
    } catch (e) {
        res.status(500).json({ error: e.message }); // Improved error handling
    }
});

// Get all Users
router.get("/", async (req, res) => {
    try {
        const users = await Item.find();
        res.json(users);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Get user by Id
router.get("/:id", async (req, res) => {
    try {
        const user = await Item.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not Found" }); // Use 404 for not found
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Update user by Id
router.put("/:id", async (req, res) => {
    try {
        const updateUser = await Item.findByIdAndUpdate(
            req.params.id,
            req.body, // Use req.body for updating user details
            {
                new: true,
                runValidators: true,
            }
        );
        if (!updateUser) return res.status(404).json({ message: "User not Found" });
        res.json(updateUser);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Delete user by Id
router.delete("/:id", async (req, res) => {
    try {
        const deleteUser = await Item.findByIdAndDelete(req.params.id);
        if (!deleteUser) return res.status(404).json({ message: "User not Found" });
        res.json({ message: "User Deleted Successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

export default router;
