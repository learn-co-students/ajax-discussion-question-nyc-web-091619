const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {

  console.log("CONTENT LOADED!");


  const API_URL = "https://randomuser.me/api/"

  fetch(API_URL)
  .then(response => response.json())
  .then(data => { 

    let userObj = new User(data.results[0]);  // returns array of objects with 1 object

    // console.log(data.results[0]);

    // objAttributes assigned to array of User class's attributes, returned by 
    // Object.getOwnPropertyNames invoked on userObj.  The array looks like this:
    // ["fullname", "email", "street", "city", "phone", "state", "cell", 
    // "date_of_birth", "postcode"]

    let objAttributes = Object.getOwnPropertyNames(userObj) 

    // console.log(objAttributes);

    // iterate through each of the class attributes and call the setAttribute method
    // inside the UserClass, passing it the attribute name as a string

    objAttributes.forEach(attribute => { 
      userObj.setAttribute(attribute); 
    });
  })
});

// NOTES:  Still need to add click event handler for the button and reformat code
// to trigger the fetch() when the button is pressed.