const express = require("express");
const verbsController = require("../controllers/verbsController");

const router = express.Router();

router.get("/", verbsController.getVerbs);

router.get("/:id", verbsController.getVerb);
router.post("/", verbsController.postVerb);

router.put("/:id", verbsController.putVerb);
router.patch("/:id", verbsController.patchVerb);
router.delete("/:id", verbsController.deleteVerb);

module.exports = router;
