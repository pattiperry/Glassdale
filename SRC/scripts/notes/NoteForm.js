import {saveNote} from "./NoteDataProvider.js"
import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"
import {criminalCard} from "../criminals/Criminal.js"
import {NoteList} from "./NoteList.js"

//selecting the container in the HTML where notes will be entered
const contentTarget = document.querySelector(".noteFormContainer")



//create a form to enter notes
export const NoteForm = () => {
    getCriminals().then(() => {
        let allCriminals = useCriminals()
        contentTarget.innerHTML = `
        <input type="date" placeholder="Date:" id="noteDate"/>
        <input type="text" placeholder="Note" id="noteText" />
        <select class="dropdown" id="noteForm--Criminal">
        <option value="">Please select a criminal...</option>
        ${allCriminals.map((currentCriminalInLoop) => {
            return `<option value="${currentCriminalInLoop.id}">${currentCriminalInLoop.name}</option>
            `
        }).join("")}
        </select>
        <button type="button" id="saveNote">Save Note</button>
        

        `
    })
    
}



//when we click save note, the entire notes list will print

// when the save button is clicked for notes, it will save the note to local server-json
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        //console.log("i clicked on save button")
        
        // Make a new object representation of a note
        //make sure the ids match from the ids above from the NoteForm so the object will reference the correct key values
        const newNote = {
            text: document.querySelector("#noteText").value,
            date: document.querySelector("#noteDate").value,
            criminalId: document.querySelector("#noteForm--Criminal").value
                        // Key/value pairs here
        }
        console.log(newNote)
    
    
        

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
    
})


