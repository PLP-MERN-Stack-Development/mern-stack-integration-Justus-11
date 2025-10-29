const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
    {
        userId: { type: String, index: true }, //Optional (frontend passes it)
        title: { type: String, required: true, trim: true },
        content: { type: String, default: "" }
    }, 
    
    {timestamps: true }
);

recordSchema.index({ userId: 1, createdAt: -1 });

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;