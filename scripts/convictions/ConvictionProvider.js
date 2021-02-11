

let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")//request the data
    .then(response => response.json())//convert the json data to javascript data structure(object or array)
    .then(//do something with the data-store it somewhere
        parsedConvictions => {
            // console.table(parsedConvictions)
            convictions = parsedConvictions
        }
    )
    }


