import nedb from 'nedb';
import { User } from '../Classes/User.js'

var db = new nedb({ filename: '../Storage/Databases/userDatabase.db' });
db.loadDatabase();

export function postingUser(userInfo){
    var user = new User(userInfo.firstname, userInfo.lastname, userInfo.email, userInfo.dateOfBirth, userInfo.password, userInfo.userId);
    db.insert(user);
};

export function updatingUser(usersId, usersInfo){
    db.remove({userId: usersId}, {}, function(err, userStatus){});

    var user = new User(usersInfo.firstname, usersInfo.lastname, usersInfo.email, usersInfo.dateOfBirth, usersInfo.password, usersInfo.userId);
    db.insert(user);
}

export function deletingUser(usersId){
    db.remove({userId: usersId}, {}, function(err, userStatus){});
};
