const express = require("express");
const Record = require("../models/Record");
const router = express.Router();


// GET /api/notes?userId=abc123 -> List (optionally filter by userId) => READ
router.get("/", async (req, res) => {
    const { userId } = req.query;
    const filter = userId ? { userId } : {};
    const record = await Record.find(filter).sort({ createdAt: -1});
    res.json(record);
});

// POST  /api/record   -> Create (optionally attach userId )  => CREATE
router.post("/", async(req, res)=>{
    const { title, content, userId } = req.body;
    
    if (!title) return res.status(400).json({ message: "Give us the Title my guy..."});

    const record = await Record.create({ title, content, userId });
    res.status(201).json(record);
});

// PUT /api/record/:id   UPDATE
router.put("/:id", async(req, res)=>{
    const { id } = req.params;
    const { title, content } = req.body;

    const updated = await Record.findByIdAndUpdate(
        id,
        { $set: { title, content }},
        { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Waaah there was nothing there..."});
    res.json(updated);
});

// DELETE /api/notes/:id   DELETE
router.delete("/:id", async (req, res)=>{
    const { id } = req.params;
    const result = await Record.deleteOne({ _id: id});
    if (result.deleteOne == 0) return res.status(404).json({ message: "There is nothing here for you to delete..."});
    res.json({ ok: true });
});


module.exports = router;