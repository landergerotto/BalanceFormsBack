const mongoose = require("mongoose");

const ValuesSchema = new mongoose.Schema({
    test1: {
        type: [Number],
        required: true,
    },
    test2: {
        type: [Number],
        required: true,
    }
});

const Values = mongoose.model("Values", ValuesSchema);
exports.Values = Values;
exports.ValuesSchema = ValuesSchema;