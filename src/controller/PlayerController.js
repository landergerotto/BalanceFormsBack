const { Player } = require("../models/player");

class PlayerController {
    static async getPlayers(req, res) {
        try {
            const players = await Player.find();
            return res.status(200).send({ players });
        } catch (error) {
            return res.status(404).send({ error: 'Players not found!' });
        }
    }
    static async postPlayer(req, res) {
        const { nome, nascimento, prova1, prova2 } = req.body;
    
        if (!nome || !nascimento || !prova1 || !prova2)
            return res.status(400).send({ message: 'Fields cannot be empty' });
    
        const player = new Player({
            nome,
            nascimento,
            prova1: {
                corretas: prova1.corretas,
                respostas: prova1.respostas,
                tempo: prova1.tempo,
                quantidade: prova1.quantidade,
                tentativas: prova1.tentativas,
                acertos: prova1.acertos
            },
            prova2: {
                corretas: prova2.corretas,
                respostas: prova2.respostas,
                tempo: prova2.tempo,
                quantidade: prova2.quantidade,
                tentativas: prova2.tentativas,
                acertos: prova2.acertos
            }
        });
    
        try {
            await player.save();
            res.status(201).send({ message: 'Player registered successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Something failed while creating a player' });
        }
    }
    
    static async clearPlayers(req, res) {
        try {
            await Player.deleteMany({});
            return res.status(200).send({ message: 'All players deleted successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Something went wrong while clearing players' });
        }
    }
}

module.exports = PlayerController;
