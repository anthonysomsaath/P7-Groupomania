const dotenv = require('dotenv');
dotenv.config();
const jwt = require("jsonwebtoken");

const authUserId = (req) => {

const token = req.headers.authorization.split(' ')[1];
const decodedToken = jwt.verify(token, process.env.JWTPRIVATEKEY);
const userId = module.exports.userId = decodedToken.userId;
return userId;
}

module.exports = authUserId;