const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const {
  getCart,
  addToCart,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");

router.get("/", authMiddleware, getCart);
router.post("/", authMiddleware, addToCart);
router.put("/:id", authMiddleware, updateCart);
router.delete("/:id", authMiddleware, deleteCart);

module.exports = router;