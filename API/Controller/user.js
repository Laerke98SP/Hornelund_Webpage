import nedb from 'nedb';
// import { v4 as uuidv4 } from 'uuid';
import { postingUser, updatingUser, deletingUser } from '../../Storage/CRUD/userCRUD.js';
import { User } from '../Classes/User.js'

let db = new nedb({ filename: '../Storage/Databases/userDatabase.db' })

export const getUsers = (req, res) => {
    db.loadDatabase();
    db.find({}, function(err, users){
        res.send(users);
    })
};

export const getUser = (req, res) => {
    const usersId = req.params;
    db.loadDatabase();
    
    db.find({userId: usersId.userId}, function(err, user){
        res.send(user);
    });
};

export const postUser = (req, res) => {
    const userInfo = req.body; 

    let createdUser = new User( userInfo.firstname, userInfo.lastname, userInfo.email, userInfo.dateOfBirth, userInfo.password);
    createdUser.calculateAge();
    createdUser.createId();

    if (createdUser.age < 18){
        res.json('User not old enough');
    } else {
        postingUser(createdUser);
        res.json({
            id: createdUser.userId
        });
    }
};




export const updateUser = (req, res) => {
    const userId = req.params;
    const userInfo = req.body;

    var completeInfo = { ... userInfo, userId: userId.id}

    updatingUser(userId.id, completeInfo);

    res.send('User had been updated');
};

export const deleteUser = (req, res) => {
    const userId = req.params;
    deletingUser(userId.id);
    res.send('User has been deleted');
};
