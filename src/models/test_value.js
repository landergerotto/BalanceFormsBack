const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
    test_value: {
        type: Number,
        required: true,
    }
});

const Status = mongoose.model("Status", StatusSchema);
exports.Status = Status;
exports.StatusSchema = StatusSchema;