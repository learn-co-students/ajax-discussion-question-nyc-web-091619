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
        // this.date_of_birth = user.dob.date    // => 1959-01-30T23:36:59.505Z
        let datefix = user.dob.date.split("T")[0]
        this.date_of_birth = datefix
        this.postcode = user.location.postcode
        User.all.push(this)
    }

    // this is apparently a method and not a function.  I cannot add keyword  'function' 
    // before 'setAttribute' or it stops working

    setAttribute(variable){

        var s = document.getElementById(variable);

        // console.log(s)

        // have to use [] instead of . notation or else "variable" is not read properly 

        s.innerHTML = this[variable];   
    }   
}

