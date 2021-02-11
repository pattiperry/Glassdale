
//an empty array of officers;we can add to this array as we get info from the API via postman
let officers = []


//this export defines a function of useOfficers that uses a copy of the array of officers
export const useOfficers = () => {
    return officers.slice()
}


//defines a function of getOfficers and returns the info from json about officers 
export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")//fetch command and the link request the data we want
        .then(response => response.json())//converts the json string to a javascript data structure(object or array)
        .then(//this tells the data where to go
            parsedOfficers => {
                //console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}




