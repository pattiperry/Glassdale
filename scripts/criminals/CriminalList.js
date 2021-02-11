import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {criminalCard} from "./Criminal.js"


//function that will list all criminals, its called when we click on criminals in the navbar(eventListener for criminals on the navbar in main.js)
export const CriminalList = (convictionFilter, arrestingFilter) => {
    //before you can print all the criminals you have to get all the data to do it,have to call the function that has the fetch call to gather all the data
    getCriminals().then(() => {
        let criminals = useCriminals();
        let criminalListContainer = document.querySelector(".criminal-list")
        let criminalHTMLString = ""
        // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
        if(convictionFilter){
            criminals = criminals.filter((currentCriminal) => {
                return currentCriminal.conviction === convictionFilter
            })
        }else if(arrestingFilter){
            criminals = criminals.filter((currentCriminal) => {
                return currentCriminal.arrestingOfficer === arrestingFilter
            })
        }


        
  

        for(let currentCriminalInLoop of criminals) {
            criminalHTMLString += criminalCard(currentCriminalInLoop);
        }
        criminalListContainer.innerHTML = criminalHTMLString

        
        let facilityContainer = document.querySelector(".facility-list");
        facilityContainer.innerHTML = ``;
        let officerContainer = document.querySelector(".officer-list");
        officerContainer.innerHTML = ``;
        let noteContainer = document.querySelector(".note-list")
        noteContainer.innerHTML = ``;

        
    });
};


  // //tells me what container in index.html i'm going to send this data to
// let criminalContainer = document.querySelector(".criminal-list")

// //naming a function of CriminalList to export my list of criminals i'm building
// export const CriminalList = () => {
//     getCriminals().then(() => {//using the getCriminals function i've already built (using the .then makes sure that we have that outside information before anything else happens)
//         let criminals = useCriminals();//using a variable of criminals for all the criminals
//         let criminalHTMLString = ""//using a variable to create this new htmlstring of data

//         for(let currentCriminalInLoop of criminals){
//             criminalHTMLString += criminalCard(currentCriminalInLoop)//creating a loop where i can use the criminalCard function and apply it to each object in the loop and then store in it the htmlstring variable
//         }
//         criminalContainer.innerHTML = criminalHTMLString//push the new variable into the criminal container and it will all get stored in the criminal-list in index.html
//     }

//     )
// }
