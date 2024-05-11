const bodyParser = require('body-parser');
const player = require('./player.js');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        player
    )
}