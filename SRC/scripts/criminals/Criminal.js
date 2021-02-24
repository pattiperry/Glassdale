
export function criminalCard (criminalObject, facilities) {
    //debugger
    return `
    <section class="criminal-card">
    <h3>${criminalObject.name}</h3>
    <p class="criminal-age">Age: ${criminalObject.age}</p>
    <p class="crime">${criminalObject.conviction}</p>
    <p class="term-start">Term-Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="term-end">Term-End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
    <div>
        <h2>Facilities</h2>
            <ul>
                ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
            </ul>
        </div>
    <button class="associates-button" id="associates--${criminalObject.id}">Known Associates</button>
</section>`
}