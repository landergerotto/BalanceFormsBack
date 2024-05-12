
/// rota de /test/ e seus metodos http

const express = require("express");
const Test_ValueController = require("../controller/Test_ValueController");
const router = express.Router();

router
  .post("/postCreate", Test_ValueController.create)
  .post("/postSet", Test_ValueController.postTestStatus)
  .get("/getTest", Test_ValueController.getTestStatus)
  .delete("/deleteTest", Test_ValueController.clearTimer)


module.exports = router;