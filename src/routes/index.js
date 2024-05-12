
// uma tentativa falha de tentar mandar algo pro vercel wtf

const bodyParser = require('body-parser');
const player = require('./player.js');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        player
    )
}