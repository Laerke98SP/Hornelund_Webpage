
function credentials(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userLogin = { email, password };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userLogin)
    };
    
    // Fetching the user endpoint with the created restrictions
    fetch('http://localhost:3000/login', options)
    .then(setTimeout(function(){return 'ready'},2000)
    ).then(resp => {
        //Needs to return it this way, so it is packaged as a json file
        return resp.json();
    }).then(status => {
        if (status == 'Failed login'){
            alert('Failed');
        } else if (status == 'user does not exist'){
            alert('user does not exist');
        } else {
            alert('yeeees');
        }
    })

}