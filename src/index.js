
/******************************************************************************/
/*     Add DOMContentLoaded listener                                          */
/******************************************************************************/
document.addEventListener("DOMContentLoaded", () => {
  newButton = document.getElementsByClassName("btn btn-primary")[0]
  newButton.addEventListener('click', getUser);
});


/******************************************************************************/
/*     Get new user when button is clicked                                    */
/******************************************************************************/

function getUser() {
  const API_URL = "https://randomuser.me/api/"

  fetch(API_URL)
  .then(response => response.json())
  .then(data => { 
    let userObj = new User(data.results[0]);  
    // data.results[0] returns array of objects with 1 object
    // console.log(data.results[0]);

    // objAttributes assigned to array of User class attributes, returned by
    // Object.getOwnPropertyNames()) on userObj.  The array looks like this:
    //   ["fullname", "email", "street", "city", "phone", "state", "cell", 
    //     'date_of_birth", "postcode"]
  
    let objAttributes = Object.getOwnPropertyNames(userObj) 

    // console.log(objAttributes);

    // iterate through class attributes and apply setAttribute method
    // (in UserClass), passing it the attribute name as a string

    objAttributes.forEach(attribute => { 
      userObj.setAttribute(attribute); 
    });
  })
}