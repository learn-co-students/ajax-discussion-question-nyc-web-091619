const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let url = "https://randomuser.me/api/"

  function appendData(data){
    let person = data["results"][0]
    
    let picTag = document.getElementById("profile_picture")
    let nameTag = document.getElementById("fullname")
    let emailTag = document.getElementById("email")
    let streetTag = document.getElementById("street")
    let cityTag = document.getElementById("city")
    let stateTag = document.getElementById("state")
    let postTag = document.getElementById("postcode")
    let phoneTag = document.getElementById("phone")
    let cellTag = document.getElementById("cell")
    let dobTag = document.getElementById("date_of_birth")
    

    picTag.src = person["picture"]["thumbnail"]
    nameTag.innerText = person["name"]["first"] + " " + person["name"]["last"]
    emailTag.innerText = person["email"]
    streetTag.innerText = person["location"]["street"]
    cityTag.innerText = person["location"]["city"]
    stateTag.innerText = person["location"]["state"]
    postTag.innerText = person["location"]["postcode"]
    phoneTag.innerText = person["phone"]
    cellTag.innerText = person["cell"]
    dobTag.innerText = person["dob"]["date"]
    
  
  }
  
  function clickHandler(e){
    fetch(url).then(resp => resp.json()).then(data => appendData(data))
  }

  let button = document.getElementsByTagName("BUTTON")[0]

  button.addEventListener("click", clickHandler)

});
