import {getOfficers, useOfficers} from "./OfficerProvider.js"
import {officerCard} from "./Officers.js"


let officerContainer = document.querySelector(".officer-list")

export const OfficerList = () => {
    getOfficers().then(() => {
        let officers = useOfficers();
        let officerHTMLString = ""

        for(let currentOfficerInLoop of officers){
            officerHTMLString += officerCard(currentOfficerInLoop)
        }
        officerContainer.innerHTML = officerHTMLString

        let criminalListContainer = document.querySelector(".criminal-list");
        criminalListContainer.innerHTML = ``;
        let facilityContainer = document.querySelector(".facility-list");
        facilityContainer.innerHTML = ``;
        let noteContainer = document.querySelector(".note-list")
        noteContainer.innerHTML = ``;
    })
}