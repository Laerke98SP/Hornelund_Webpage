import nedb from 'nedb';
import { v4 as uuidv4 } from 'uuid';
import { postingUser, updatingUser, deletingUser } from '../../Storage/CRUD/userCRUD.js';

var db = new nedb({ filename: '../Storage/Databases/userDatabase.db' })

export const getUsers = (req, res) => {
    db.loadDatabase();
    db.find({}, function(err, users){
        res.send(users);
    })
};

export const getUser = (req, res) => {
    const usersId = req.params;
    db.loadDatabase();
    
    db.find({userId: usersId.id}, function(err, user){
        res.send(user);
    });
};

export const postUser = (req, res) => {
    const userInfo = req.body;

    var newId = uuidv4();
    var completeInfo = { ... userInfo, userId: newId };
    postingUser(completeInfo);
    console.log({
        id: newId
    })
    res.json({
        id: newId
    });
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
