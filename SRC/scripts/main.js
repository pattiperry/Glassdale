import {CriminalList} from "./criminals/CriminalList.js"
import {OfficerList} from "./officers/OfficerList.js"
import {FacilityList} from "./facilities/FacilityList.js"
import {WitnessList} from "./witnesses/WitnessList.js"
import {ConvictionList} from "./convictions/ConvictionSelect.js"
import {OfficerSelect} from "./officers/OfficerSelect.js"
import {} from "./associates/AssociateList.js"
import {NoteForm} from "./notes/NoteForm.js"
import {NoteList} from "./notes/NoteList.js"

NoteForm()
NoteList()
ConvictionList()
OfficerSelect()


//CriminalList()
//OfficerList()
//FacilityList()


//------------------NAVBAR ---------------------------------
// document.querySelector("#criminals-nav-link").addEventListener("click", CriminalList)

document.querySelector("#criminals-nav-link").addEventListener("click",  () => {
  CriminalList()// invoke the function that prints the criminals
})//when the click happens it runs the anonymous function that has the definition of CriminalList()

document.querySelector("#officers-nav-link").addEventListener("click",  () => {
  OfficerList()// invoke the function that prints the officers
})

document.querySelector("#facilities-nav-link").addEventListener("click",  () => {
  FacilityList()// invoke the function that prints the facilities
})

document.querySelector("#witness-nav-link").addEventListener("click",  () => {
  WitnessList()// invoke the function that prints the witnesses
})

//when the NOTES in the navbar are clicked,then the list of notes will print
document.querySelector("#notes-nav-link").addEventListener("click",() => {
NoteList();
});




// const darkModeButton = document.querySelector("#dark-mode")

// darkModeButton.addEventListener("click", function(){
//     // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked

//     // Select the entire body tag
//   const bodyElement = document.querySelector("body")

//   // Add a class
//   bodyElement.classList.toggle("dark-background")//you have to add this class to your css file with the details of how you want it to effect your page
//   })