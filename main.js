// API URL
const url = "https://www.superheroapi.com/api.php/10223583637001300/search"

// DOM getters
let modal = document.querySelector("#simpleModal");
let closeBtn = document.querySelector(".closeBtn");
let buttons = document.getElementsByClassName("superhero-btn")

let amazoBtn = document.querySelector("#amazo");
let batmanBtn = document.querySelector("#batman");
let antManBtn = document.querySelector("#ant_man");
let blackPantherBtn = document.querySelector("#black_panther");
let captainAmericaBtn = document.querySelector("#captain_america");
let atomBtn = document.querySelector("#atom");
let wonderWomanBtn = document.querySelector("#wonder_woman");
let spiderManBtn = document.querySelector("#spider_man");
let supermanBtn = document.querySelector("#superman");

let infoName = document.querySelector("#name")
let infoFullName = document.querySelector("#full-name")
let infoStats = document.querySelector("#stats")
let infoAffiliations = document.querySelector("#affiliations")

// Listen for a click on superhero buttons
amazoBtn.addEventListener('click', openModal)
batmanBtn.addEventListener('click', openModal)
antManBtn.addEventListener('click', openModal)
blackPantherBtn.addEventListener('click', openModal)
captainAmericaBtn.addEventListener('click', openModal)
atomBtn.addEventListener('click', openModal)
wonderWomanBtn.addEventListener('click', openModal)
spiderManBtn.addEventListener('click', openModal)
supermanBtn.addEventListener('click', openModal)

// Listen for a click on the close button
closeBtn.addEventListener('click', closeModal)
// Listen for outside click
window.addEventListener('click', clickOutside)

// Function to open modal
function openModal(e) {
    // console.log("e.target.id: ", e.target.id)
    fetch(`${url}/${e.target.id}`)
      .then(res => res.json())
      .then(res => {
          let info = res.results[0]
          console.log(info)
          let name = info.name
          let fullName = info.biography['full-name'] 
          let alterEgos = info.biography['alter-egos'] 
          let occupations = info.work.occupation
          let intelligence = info.powerstats.intelligence
          let strength = info.powerstats.strength
          let speed = info.powerstats.speed 
          let affiliations = info.connections["group-affiliation"]

          infoName.innerText = name;
          infoFullName.innerText = `Full Name: ${fullName}`;

          let infoOccupations = document.createElement("p")
          infoOccupations.innerHTML = `<strong>Occupations:</strong> ${occupations}` 
          infoStats.appendChild(infoOccupations)

          let infoIntelligence = document.createElement("p")
          infoIntelligence.innerHTML = `<strong>Intelligence: </strong> ${intelligence} / 100`
          infoStats.appendChild(infoIntelligence)

          let infoStrength = document.createElement("p")
          infoStrength.innerHTML = `<strong>Strength: </strong> ${strength} / 100`
          infoStats.appendChild(infoStrength)

          let infoSpeed = document.createElement("p")
          infoSpeed.innerHTML = `<strong>Speed: </strong> ${speed} / 100`
          infoStats.appendChild(infoSpeed)

          infoAffiliations.innerText = affiliations

          modal.style.display = 'block';
      })
      .catch(err => {
          console.log("Error: ", err)
      })

    
}

//Functions to close modal
function closeModal() {
    modal.style.display = 'none';
    resetInfo();
}

function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none';
        resetInfo();
    }
}

//Function to reset info when modal is closed
function resetInfo() {
    infoName.innerText = ""
    infoFullName.innerText = ""
    infoStats.innerHTML = ""

}
