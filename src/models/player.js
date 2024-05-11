const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    nascimento: {
        type: String,
        required: true
    },
    prova1: {
        corretas: [Number],
        respostas: [Number],
        tempo: Number,
        quantidade: Number,
        tentativas: Number,
        acertos: Number
    },
    prova2: {
        corretas: [Number],
        respostas: [Number],
        tempo: Number,
        quantidade: Number,
        tentativas: Number,
        acertos: Number
    }
});

const Player = mongoose.model("Player", PlayerSchema);
exports.Player = Player;
exports.PlayerSchema = PlayerSchema;