let witness = []

export const useWitness = () => {
    return witness.slice()
}

export const getWitness = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        parsedWitness => {
            //console.table(parsedWitness)
            witness = parsedWitness
        }
    )
}