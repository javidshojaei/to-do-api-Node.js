const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
    const todo = await Todo.create(req.body);
    res.json(todo);
});

router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
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