//an empty array of criminals;we can add to this array as we get info from the API via postman
let criminals = []

//this export defines a function of useCriminals that uses a copy of the array of criminals
export const useCriminals = () => {
    return criminals.slice()
}

//defines a function of getCriminals and returns the info from json about criminals 
export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")//the fetch command and the link request the data we want
        .then(response => response.json())//runs the function that converts the json string to a javascript data structure(object or array)
        .then(//runs the function that tells the data where to go
            parsedCriminals => {//this is my converted data
                
                criminals = parsedCriminals//let the convererted data equal my array of criminals
            }
        )
}

