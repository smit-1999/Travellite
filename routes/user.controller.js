const express =  require('express');
const router = express.Router();

//Item model
const User = require('../models/user.model');

router.get('/',(req, res) => {
    User.find().then(users => res.json(users));
});

router.post('/add',(req, res) => {
    addUser(req.body)
    .then(res_object => res.json(res_object))
    .catch(err => res.json(err));    
});
async function addUser({firstname, lastname, email, mob, username , password}){
    const user = await User.findOne({ username });
    res_object = {
        'status': '',
        'message': '',
    }
    if (user) {
        res_object['status'] = 'failure'
        res_object['message'] = 'username already exists'
        console.log(res_object);
        return res_object         
    }else{
        User.create({firstname, lastname, email, mob, username , password}, 
            function(err, instance) {
        if(err) {
            res_object['status'] = 'failure'
            res_object['message'] = 'database error'
            console.log(res_data['status'] + ' ' + res_object['message']);
            console.log(err);
            return res_object;
        }
        else{
            res_object['status'] = 'success'
            res_object['message'] = 'User added to the database';
            console.log(res_object);
            return res_object;                         
        }
    });
}
}

router.post('/authentication', authentication);

function authentication(req, res, next) {
    authenticate(req.body)
        .then(user => user ? res.json(user) : res.json({ message: 'password is incorrect' }))
        .catch(err => next(err));
}

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (!user) {
        return { username: "Username not found" };
      }
    else if (user && !password.localeCompare(user.password)) {
        return {
            username,
            message : "login succesful"
        };
    }else{
        return{
            username,
            message:"password incorrect"
        }
    }
}

module.exports = router;