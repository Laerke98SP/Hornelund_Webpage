// import { User } from '../Classes/User.js';
// const User = require('../Classes/User.js');


function createUser(){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dateOfBirth = document.getElementById('dateOfBirth').value;

    // var userAge = calculteAge(dateOfBirth);

    // let userInfo = new User(firstname, lastname, email, dateOfBirth, password)
    // userInfo.calculateAge();
    // userInfo.createId();

    // localStorage.setItem('id', userInfo.userId)
    let userInfo = { firstname, lastname, email, dateOfBirth, password }; 

    creatingUser(userInfo);


//     if (userInfo.age < 18){
//         alert("You must be 18 or older to create an account");
//         return  
//     } else {
//         creatingUser(userInfo);
//         // send user on to logged in page
//     }
}


function creatingUser(userInfo){
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    };
    
    // Fetching the user endpoint with the created restrictions
    fetch('http://localhost:3000/user', options)
    .then(resp => {
        //Needs to return it this way, so it is packaged as a json file
        return resp.json();
    }).then(data => {
        if (data == 'User not old enough'){
            alert('You need to be 18 or older')
        } else {
            localStorage.setItem('id', data.id);
        }
    })
}

