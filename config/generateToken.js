const jwt = require("jsonwebtoken");
const key="ahufjhewm";
const generateToken = (id) => {
  return jwt.sign({ id }, key, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
