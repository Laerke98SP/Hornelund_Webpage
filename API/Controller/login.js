import nedb from 'nedb';

let db = new nedb({ filename: '../Storage/Databases/userDatabase.db' })

export const checkUser = (req, res) => {
    const userLogin = req.body;
    db.loadDatabase();
    
    db.find({email: userLogin.email}, function(err, user){    
        if (user == ""){
            res.json('user does not exist');
        } else if (userLogin.password == user[0].password){
            res.json(user[0].userId);
        } else {
            res.json('Failed login');
        }
    });
};