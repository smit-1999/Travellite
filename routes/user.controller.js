const express =  require('express');
const router = express.Router();

//Item model
const User = require('../models/user.model');

router.get('/',(req, res) => {
    User.find().then(users => res.json(users));
});

router.post('/add',(req, res) => {
    const newUser = new  User(
        req.body
    );
    console.log(newUser)
    console.log(req.body);
    User.create(req.body, function(err, instance) {
        res_object = {
            'status': '',
            'message': '',
        }
        if(err) {
            res_object['status'] = 'failure'
            res_object['message'] = 'database error'
            console.log(res_data['status'] + ' ' + res_object['message']);
            console.log(err);
            return res.json(res_object);
        }
        else{
            res_object['status'] = 'success'
            res_object['message'] = 'User added to the database';
            console.log(res_object);
            return res.json(res_object)                            
        }
    });
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