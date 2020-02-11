const express =  require('express');
const router = express.Router();

//Item model
const User = require('../models/user.model');

router.get('/',(req, res) => {
    User.find().then(users => res.json(users));
});

router.post('/',(req, res) => {
    const user = new  User(
        req.body
    );
    user.save().then(users => res.json(users));
});

router.post('/authentication', authentication);

function authentication(req, res, next) {
    authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'password is incorrect' }))
        .catch(err => next(err));
}

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (!user) {
        return { usernamenotfound: "Username not found" };
      }
    else if (user && !password.localeCompare(user.password)) {
        return {
            username,
            message : "login succesful"
        };
    }
}

module.exports = router;