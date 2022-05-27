const dotenv = require('dotenv');
const authUserId = require('./authUserId');

dotenv.config();

module.exports = (req, res, next) => {
    const userId = req.body.userId
    try {
        if (userId && userId !== authUserId) 
            throw 'User ID non valable';
            next();
    } catch {
        res.status(403).json({error : error | 'Requête non authentifiée !'})
    }
};
