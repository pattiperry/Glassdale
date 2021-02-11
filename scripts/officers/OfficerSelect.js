import { getOfficers, useOfficers } from "./OfficerProvider.js"
import {CriminalList} from "../criminals/CriminalList.js"


//get a reference to the DOM element where the <select> will be rendered
const officerTarget = document.querySelector(".officer-list")

export const OfficerSelect = () => {
    //get all the officers 
    getOfficers().then(() => {
        let officerArray = useOfficers()
        render (officerArray)//passing the officers array into the function of render
    })
    

}


//.map is a loop that is looping over the array of officersCollection and taking in the parameter of currentOfficersInLoop
const render = officersCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the officersCollection to generate the option elements.
        Look back at the example provided above.
    */
    officerTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
    <option value="0">Please select an officer...</option>
    ${officersCollection.map((currentOfficerInLoop) => {
       return `<option>${currentOfficerInLoop.name}</option>`
    }).join("")//changes the array to string.
    }
    </select>   
    `
};


//all of this below is putting the information i want in my dropown menu

//giving me an element in my html that's hard coded to refernce the addEventListener to
const eventHub = document.querySelector("main")

//"change" is the type of event on my addEventListener
//changeEvent is the parameter on my callback function
eventHub.addEventListener("change", (changeEvent) => {
    //console.log("You clicked somewhere in the main container")
    //console.log("Here is the element you clicked on: ", changeEvent.target)
    
    if(changeEvent.target.id === "officerSelect"){
        //console.log("You selected something from the officer dropdown")
        console.log("This is the officer that was selected: ", changeEvent.target.value)
        
        
        CriminalList(null,changeEvent.target.value)
        
    }
})
