
/// rota de /test/ e seus metodos http

const express = require("express");
const Test_ValueController = require("../controller/Test_ValueController");
const router = express.Router();

router
  .post("/create", Test_ValueController.create)
  .post("/set", Test_ValueController.postTestStatus)
  .get("/", Test_ValueController.getTestStatus)
  .delete("/", Test_ValueController.clearTimer)


module.exports = router;