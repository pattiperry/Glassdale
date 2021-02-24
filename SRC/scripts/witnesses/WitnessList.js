import {getWitness, useWitness} from "./WitnessProvider.js"
import {witnessCard} from "./Witness.js"


export const WitnessList = () => {
    getWitness().then(() => {
        let witnessContainer = document.querySelector(".witness-list")
        let witnesses = useWitness()
        let witnessHTMLString = ""

        for(let currentWitnessInLoop of witnesses) {
            witnessHTMLString += witnessCard(currentWitnessInLoop)
        }
        witnessContainer.innerHTML = witnessHTMLString

        let criminalListContainer = document.querySelector(".criminal-list");
        criminalListContainer.innerHTML = ``;
        let facilityContainer = document.querySelector(".facility-list");
        facilityContainer.innerHTML = ``;
        let noteContainer = document.querySelector(".note-list")
        noteContainer.innerHTML = ``;
    }

    )
}
