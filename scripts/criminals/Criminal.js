
export function criminalCard (cardObject) {
    return `
    <section class="criminal-card">
    <h3>${cardObject.name}</h3>
    <p class="criminal-age">Age: ${cardObject.age}</p>
    <p class="crime">${cardObject.conviction}</p>
    <p class="term-start">Term-Start: ${new Date(cardObject.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="term-end">Term-End: ${new Date(cardObject.incarceration.end).toLocaleDateString('en-US')}</p>
    <button class="associates-button" id="associates--${cardObject.id}">Known Associates</button>
</section>`
}