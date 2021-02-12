import {useFacilities, getFacilities} from "./FacilityProvider.js"
import {facilityCard} from "./Facility.js"



let facilityContainer = document.querySelector(".facility-list")

export const FacilityList = () => {
    getFacilities().then(() => {
        let facilities = useFacilities()
        let facilityHTMLString =""

        for(let currentFacilityInLoop of facilities){
        facilityHTMLString += facilityCard(currentFacilityInLoop)
        }
        facilityContainer.innerHTML = facilityHTMLString

        let criminalListContainer = document.querySelector(".criminal-list");
        criminalListContainer.innerHTML = ``;
        let officerContainer = document.querySelector(".officer-list");
        officerContainer.innerHTML = ``;
        let noteContainer = document.querySelector(".note-list")
        noteContainer.innerHTML = ``;
    })
    
}