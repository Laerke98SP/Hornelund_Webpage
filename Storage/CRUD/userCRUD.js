import nedb from 'nedb';
// import { User } from '../../Frontpage/Classes/User.js'

var db = new nedb({ filename: '../Storage/Databases/userDatabase.db' });
db.loadDatabase();

export function postingUser(userInfo){
    // var user = new User(userInfo.firstname, userInfo.lastname, userInfo.email, userInfo.dateOfBirth, userInfo.password, userInfo.userId);
    db.insert(userInfo);
    
    // db.find({email: userInfo.email}, function(err, user){
    //     if (user == []){
    //         var user = new User(userInfo.firstname, userInfo.lastname, userInfo.email, userInfo.dateOfBirth, userInfo.password, userInfo.userId);
    //         db.insert(user);
    //     } else {
    //         throw new Error('User alredy exists');
    //     }
    // });

};

export function updatingUser(usersId, usersInfo){
    db.remove({userId: usersId}, {}, function(err, userStatus){});

    // var user = new User(usersInfo.firstname, usersInfo.lastname, usersInfo.email, usersInfo.dateOfBirth, usersInfo.password, usersInfo.userId);
    let user = { ...usersInfo, userId: usersId }
    db.insert(user);
}

export function deletingUser(usersId){
    db.remove({userId: usersId}, {}, function(err, userStatus){});
};
