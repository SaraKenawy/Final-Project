const Cart = require("../models/cart");

// Get all cart items
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate("product");

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching cart",
      error,
    });
  }
};

// Add product to cart
const addToCart = async (req, res) => {
  try {
    const cartItem = await Cart.create(req.body);

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to add to cart",
      error,
    });
  }
};

// Update cart item
const updateCart = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update cart",
      error,
    });
  }
};

// Delete cart item
const deleteCart = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      message: "Product removed from cart",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete cart item",
      error,
    });
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCart,
  deleteCart,
};