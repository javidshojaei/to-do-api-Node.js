const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Todo = require("../models/Todo");

router.post("/", auth, async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      description: req.body.description,
      user: req.user.id,
    });

    const populatedTodo = await todo.populate("user", "name email");

    res.status(201).json(populatedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(todo);
});

router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;