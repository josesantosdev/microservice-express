const User = require('../models/userModel');


module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err).
        res.status(500).json({error: 'Internal Server Error'})
    }
}