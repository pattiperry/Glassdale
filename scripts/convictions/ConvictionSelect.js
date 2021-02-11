import { getConvictions, useConvictions } from "./ConvictionProvider.js"
import {CriminalList} from "../criminals/CriminalList.js"


//get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".convictions-select-container")

export const ConvictionList = () => {
    //get all the convictions from application state
    getConvictions().then(() => {
        const convictionsArray = useConvictions()
        render (convictionsArray)//passing the convictions array into the function of render
    })
    

}


//.map is a loop that is looping over the array of convictionsCollection and taking in the parameter of currentConvictionInLoop
const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
   //this builds my select component
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${convictionsCollection.map((currentConvictionInLoop) => {
       return `<option>${currentConvictionInLoop.name}</option>`
    }).join("")//changes the array to string.
    }
    </select>   
    `
};



// This won't throw an error, but it will fire any time there's a change event anywhere in the body container
//choose an element that is hard coded into html
const eventHub = document.querySelector("main")

//change is the type of event, eventObject is the parameter of my callback function
eventHub.addEventListener("change", (eventObject) => {
    //console.log("You clicked somewhere in the main container")

    // To be more specific, we need to know specifically what we clicked on
    //console.log("Here is the element you clicked on: ", eventObject.target)//tells me what did i click on what did i change-i'm clicking on the dropdown

    //tells me i'm trying to get info in the dropdown to be the crimes-they come from the filters-crime container
    if(eventObject.target.id === "crimeSelect"){
        //console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)//.value will target the specific value of whatever i selected in the dropdown 
        
        //another way to do it: 
        //const crimeChosen = eventObject.target.value
        //CriminalList(crimeChosen)
        CriminalList(eventObject.target.value)
        //calling the function and passing in the information about the crime that was chosen
    }
})













