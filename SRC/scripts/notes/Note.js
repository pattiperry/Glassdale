//defining a function that will display the note in HTML format
import {deleteNote} from "./NoteDataProvider.js"
import {NoteList} from "./NoteList.js"

export function Note (singleNote, relatedCriminal) {
    return `
        <section class="criminal-card">
            <p>Date: ${singleNote.date}</p>
            <p>Criminal in question: ${relatedCriminal.name}</p>
            <p>Note: ${singleNote.text}</p>
            <button id="deleteNote--${singleNote.id}">Delete</button>
        </section>
    `
}


const eventHub = document.querySelector(".note-list")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteNote")) {
    
    const idToDelete = eventObject.target.id.split("--")[1]
    //console.log(eventObject.target.id)
    
    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
    deleteNote(idToDelete)
    .then(NoteList)

  }
});
