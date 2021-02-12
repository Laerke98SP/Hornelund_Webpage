import { v4 as uuidv4 } from 'uuid';


export class User{
    constructor(firstname, lastname, email, dateOfBirth, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.userId = "";
    }

    calculateAge(){
        var date = this.dateOfBirth.split('-');
        var year = date[0];
        var month = date[1];
        var day = date[2];
        
        var birthdate = new Date(year, month, day);
        var diff_ms = Date.now() - birthdate.getTime();
        var age_dt = new Date(diff_ms); 
      
        this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    createId(){
        if (this.userId === ""){
            this.userId = uuidv4();
        } else {
            return "you already have an ID"
        }
    }
}

// module.exports = User
