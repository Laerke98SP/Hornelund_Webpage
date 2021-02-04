
function createUser(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;

    var userAge = calculteAge(dateOfBirth);

    var userInfo = { firstname, lastname, email, dateOfBirth, password }; 

    if (userAge < 18){
        alert("You must be 18 or older to create an account");
        return  
    } else {
        creatingUser(userInfo);
        // send user on to logged in page
    }
}


function calculteAge(dob){
    var date = dob.split('-');
    var year = date[0];
    var month = date[1];
    var day = date[2];
    
    var birthdate = new Date(year, month, day);
    var diff_ms = Date.now() - birthdate.getTime();
    var age_dt = new Date(diff_ms); 
  
    var age = Math.abs(age_dt.getUTCFullYear() - 1970);

    return age;    
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
    fetch('http://localhost:3000/user', options).then(resp => {
        //Needs to return it this way, so it is packaged as a json file
        return resp.json();
    }).then(data => {
        localStorage.setItem('id', data.id)
    })
}

