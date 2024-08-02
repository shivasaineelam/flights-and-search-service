const express = require("express");
const { cityController } = require("../../controllers");
const router = express.Router();
router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.put("/city/:id", cityController.update);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAllcities);

module.exports = router;
