const express = require("express");
const PlayerController = require("../controller/PlayerController");
const router = express.Router();

router
  .post("/", PlayerController.postPlayer)
  .get("/", PlayerController.getPlayers)
  .delete("/", PlayerController.clearPlayers);

module.exports = router;