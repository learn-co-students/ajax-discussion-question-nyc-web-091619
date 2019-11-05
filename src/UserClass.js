class User {

    static all = []

    constructor (user) {
        this.fullname = user.name.title + " " + user.name.first + " " + user.name.last;
        this.email = user.email
        this.street = user.location.street.number + " " + user.location.street.name
        this.city = user.location.city
        this.phone = user.phone
        this.state = user.location.state
        this.cell = user.cell
        // this.date_of_birth = user.dob.date    
        // ^---This version was no good because it looked like this => 1959-01-30T23:36:59.505Z
        // So, split it at T and take first string out of the two in the returned by split()
        let datefix = user.dob.date.split("T")[0]
        this.date_of_birth = datefix
        this.postcode = user.location.postcode
        this.profile_picture = user.picture.large
        User.all.push(this)
    }

    // setAttribute() is apparently a method and not a function.  Adding the  keyword  'function' 
    // before 'setAttribute' and it stops working.

    setAttribute(variable){
        var s = document.getElementById(variable);
        // console.log(s) // check value of s to is we're picking up the right element 
        // below, had used [] instead of . notation.  Dot notation does not read properly.  Also, had to add a special else for profile_picture
        // because .src is a subattribute of the attribute :|
        if (variable != "profile_picture") {
            s.innerHTML = this[variable];   
        }
        else {
            s.src = this[variable];
        }
    }   
}

