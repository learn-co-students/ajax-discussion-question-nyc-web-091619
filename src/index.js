const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementsByClassName("btn btn-primary")[0]

  fetchPerson()

  function fetchPerson() {
    fetch("https://randomuser.me/api/")
    .then(resp => resp.json())
    .then(json => showPerson(json))
  }

  function showPerson(person) {
    const profile_picture = document.getElementById("profile_picture")
    profile_picture.src = `${person.results[0].picture.medium}`
    const fullname = document.getElementById("fullname")
    fullname.innerText = `${person.results[0].name.title} ${person.results[0].name.first} ${person.results[0].name.last}`
    const email = document.getElementById("email")
    email.innerText = `${person.results[0].email}`
    const street = document.getElementById("street")
    street.innerText = `${person.results[0].location.street.number} ${person.results[0].location.street.name}`
    const city = document.getElementById("city")
    city.innerText = `${person.results[0].location.city}`
    const state = document.getElementById("state")
    state.innerText = `${person.results[0].location.state}`
    const postcode = document.getElementById("postcode")
    postcode.innerText = `${person.results[0].location.postcode}`
    const phone = document.getElementById("phone")
    phone.innerText = `${person.results[0].phone}`
    const cell = document.getElementById("cell")
    cell.innerText = `${person.results[0].cell}`
    const date_of_birth = document.getElementById("date_of_birth")
    date_of_birth.innerText = `${person.results[0].dob.date.slice(0, 10)}`
  }

  button.addEventListener("click", fetchPerson)


});
