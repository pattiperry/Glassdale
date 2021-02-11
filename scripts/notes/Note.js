//defining a function that will display the note in HTML format
export function Note (singleNote, relatedCriminal) {
    return `
        <section class="criminal-card">
            <p>Date: ${singleNote.date}</p>
            <h2>Note about ${relatedCriminal.name}</h2>
            <p>${singleNote.text}</p>
        </section>
    `
}

