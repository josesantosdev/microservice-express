const User = require('../models/userModel');
const { ObjectId } = require('mongoose').Types;


module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
};

module.exports.getOneUser = async (req, res) => {
    const userId = req.params.userId;

    if (!ObjectId.isValid(userId)){
        return res.status(400).json({ error: 'Invalid User' });
    }
    
    try {
        const user = await User.findOne({_id: userId}).exec();
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports.createUser = async (req, res) => {
    const {name, email} = req.body;

    if (!name || !email) {
        res.status(400).json({ error: 'Name and email are required' });    
    }

    try {
        const newUser = new User({name, email});
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.updateUser = async (req, res) => {
    const {name, email }  = req.body;
    const userId = req.params.userId;

    if (!name || !email) {
        res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const user = await User.findOne({ _id: userId}).exec();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.updateOne({name: name, email: email});
        res.status(201).json({ updatedUser: user});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.deleteUser = async (req, res) => {
    userId = req.params.userId;

    if (!ObjectId.isValid(userId)){
        return res.status(400).json({ error: 'Invalid User' });
    }

    try {
        const user = await User.findOne({_id: userId}).exec();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.deleteOne({_id: userId});
        res.status(201).json({ deletedUser: user});

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}