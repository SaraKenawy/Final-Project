const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({
    message: "Email already exists",
  });
}
const hashedPassword = await bcrypt.hash(password, 10);
const user = await User.create({
  name,
  email,
  password: hashedPassword,
});
return res.status(201).json({
  message: "User registered successfully",
  user,
});

};


const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1h",
  }
);

return res.status(200).json({
  message: "Login successful",
  token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
  },
});
};

module.exports = {
  register,
  login,
};