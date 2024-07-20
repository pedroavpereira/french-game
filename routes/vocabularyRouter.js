const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Vocab GET");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Vocab get params id ${id}`);
});

router.post("/", (req, res) => {
  res.status(200).send("Vocab Post");
});

router.put("/", (req, res) => {
  res.status(200).send("Vocab put");
});

router.patch("/", (req, res) => {
  res.status(200).send("Vocab patch");
});

router.delete("/", (req, res) => {
  res.status(200).send("Vocab delete");
});

module.exports = router;
