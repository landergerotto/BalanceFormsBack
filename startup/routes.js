
// inicializacao de rotas

const express = require("express");
const player = require("../src/routes/player");
const test = require("../src/routes/test");
const values = require("../src/routes/values");
module.exports = function (app) 
{
  app
    .use(express.json())
    .use("/player", player)
    .use("/test", test)
    .use("/values", values)
};