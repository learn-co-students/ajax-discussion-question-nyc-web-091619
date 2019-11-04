const fullname = document.getElementById("fullname");
const button = document.getElementsByTagName("button")[0]



console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");


button.addEventListener("click", function(e) {
  fetch("https://randomuser.me/api/")
    .then(function(response){
      return response.json()
    })
    .then(function(response){
      let info = response.results[0]
      let name = document.getElementById("fullname")
      name.innerText= `${info.name.first} ${info.name.last} `
      let email = document.getElementById("email")
      email.innerText = `${info.email}`
      let street = document.getElementById("street")
      street.innerText= `${info.location.street.number} ${info.location.street.name}`
      let city = document.getElementById("city")
      city.innerText= `${info.location.city}`
      let state = document.getElementById("state")
      state.innerText= `${info.location.state}`
      let postcode = document.getElementById("postcode")
      postcode.innerText= `${info.location.postcode}`
      let phone = document.getElementById("phone")
      phone.innerText= `${info.phone}`
      let cell = document.getElementById("cell")
      cell.innerText= `${info.cell}`
      let dob = document.getElementById("date_of_birth")
      dob.innerText= `${info.dob.date}`
      let profpic = document.getElementById("profile_picture")
      profpic.src= `${info.picture.thumbnail}`
    

    })
});
  




});
