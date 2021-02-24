import {getNotes, useNotes} from "./NoteDataProvider.js"
import {Note} from "./Note.js"
import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"

//Function that will list all the notes that exist in the local server
export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const allTheNotes = useNotes()
        const allTheCriminals = useCriminals()

        const noteContainer = document.querySelector(".note-list")

        
        const arrayOfNotesWithCriminalNames = allTheNotes.map(singleNote => {

            const relatedCriminal = allTheCriminals.find(criminal => criminal.id === +singleNote.criminalId)
            
            const htmlString = Note(singleNote, relatedCriminal)

            return htmlString

            
        })
        
        
        
        const StringOfAllNewNotes = arrayOfNotesWithCriminalNames.join("")

        noteContainer.innerHTML = StringOfAllNewNotes


        //this will erase the other content on the page when the notes are printed
        let criminalListContainer = document.querySelector(".criminal-list");
        criminalListContainer.innerHTML = ``;
        let facilityContainer = document.querySelector(".facility-list");
        facilityContainer.innerHTML = ``;
        let officerContainer = document.querySelector(".officer-list");
        officerContainer.innerHTML = ``;
        let witnessContainer = document.querySelector(".witness-list")
        witnessContainer.innerHTML = ""
        
    })
    
}

