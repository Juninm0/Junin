const port = 5406;

const express = require("express");
const app = express();
app.listen(port, () =>  console.log("rodando na porta " + port));
