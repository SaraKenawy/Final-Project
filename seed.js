require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/product");

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Laptop",
        description: "High performance laptop",
        price: 15000,
        image: "laptop.jpg",
        category: "Electronics",
        stock: 10,
      },
      {
        name: "Headphones",
        description: "Wireless headphones",
        price: 1200,
        image: "headphones.jpg",
        category: "Accessories",
        stock: 20,
      },
      {
        name: "Coffee Mug",
        description: "Ceramic coffee mug",
        price: 150,
        image: "mug.jpg",
        category: "Home",
        stock: 50,
      },
    ]);

    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedProducts();