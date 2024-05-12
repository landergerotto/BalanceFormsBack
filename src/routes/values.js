
/// rota de /values/ e seus metodos http

const express = require("express");
const ValuesController = require("../controller/ValuesController");
const router = express.Router();

router
  .get("/getValues", ValuesController.getValues)
  .post("/postValues", ValuesController.postValues)
  .delete("/deleteValues", ValuesController.clearValues)

module.exports = router;