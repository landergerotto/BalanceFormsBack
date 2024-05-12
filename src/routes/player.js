
/// rota de /player/ e seus metodos http

const express = require("express");
const PlayerController = require("../controller/PlayerController");
const router = express.Router();

router
  .post("/postPlayer", PlayerController.postPlayer)
  .get("/getPlayer", PlayerController.getPlayers)
  .delete("/deletePlayer", PlayerController.clearPlayers);

module.exports = router;