
/// rota de /values/ e seus metodos http

const express = require("express");
const ValuesController = require("../controller/ValuesController");
const router = express.Router();

router
  .get("/", ValuesController.getValues)
  .post("/", ValuesController.postValues)
  .delete("/", ValuesController.clearValues)

module.exports = router;