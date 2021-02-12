
export function facilityCard (cardObject) {
    return `
    <div class="facility-card">
        <p>Facility Name: ${cardObject.facilityName}</p>
        <p>Security Level: ${cardObject.securityLevel}</p>
        <p>Capacity: ${cardObject.capacity}</p>
            
    </div>`
}