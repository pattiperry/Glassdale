

let notes = []

export const useNotes = () => notes.slice()

//pulling data for getNotes() from the local server,converting the data, passing it back into the array notes
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

//we can save new notes to the database
//the fetch call in this function is saying"get in the database" and then store the note there
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    //.then(getNotes) // After we add a note, get them all again so our new note appears in our collection
}