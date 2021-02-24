//this module represents the intersection table between criminals and facilities 

let criminalFacilities = []

export const useCriminalFacilities = () => criminalFacilities.slice()


export const getCriminalFacilities = () => {
    return fetch("https://criminals.glassdale.us/criminalFacilities")
        .then(response => response.json())
        .then(apiData => {
            criminalFacilities = apiData
        })
}