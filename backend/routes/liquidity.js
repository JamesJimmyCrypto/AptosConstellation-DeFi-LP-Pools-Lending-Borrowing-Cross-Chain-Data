const express = require("express");
const {
  createPool,
  addLiquidity,
} = require("../controllers/liquidityController");

const router = express.Router();

router.post("/create", createPool);
router.post("/add", addLiquidity);

module.exports = router;
