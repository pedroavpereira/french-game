const express = require("express");
const verbsRouter = require("./routes/verbsRouter.js");
const vocabularyRouter = require("./routes/vocabularyRouter.js");

const app = express();

app.use("/verbs", verbsRouter);

app.use("/vocabulary", vocabularyRouter);

app.use("*", function (req, res) {
  res.status(404).send("Route not found");
});

module.exports = app;
