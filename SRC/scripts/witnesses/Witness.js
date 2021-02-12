
export function witnessCard (cardObject){
    return `
    <div class="witness-card">
        <p>Name: ${cardObject.name}</p>
        <p>Statement: ${cardObject.statements}</p>
    </div>`
}