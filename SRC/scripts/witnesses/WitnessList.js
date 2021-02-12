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
    }

    )
}