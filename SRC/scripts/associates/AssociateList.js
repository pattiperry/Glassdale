import { useCriminals } from "../criminals/CriminalProvider.js"

// Event listener for main container
document.querySelector("main").addEventListener("click", (eventObject) => {

    // Conditional to test if the thing they clicked on was the known associates button
    if(eventObject.target.id.includes("associates--")){

        // The id of the known associates button is "associates--id", so we split the id up and just steal the number at the end
        const idOfCriminalClicked = eventObject.target.id.split("--").pop()

        // Now we have to use that number to find the correct criminal from our collection

        // Get all the criminals
        const allTheCriminals = useCriminals()

        // Find the criminal that matches the id of the one we clicked on
        const matchingCriminal = allTheCriminals.find((singleCriminalInLoop) => {
            return singleCriminalInLoop.id === +idOfCriminalClicked
        })

        console.log("this should be the matching criminal's associates", matchingCriminal.known_associates)

        document.querySelector(".known-associates-container").innerHTML = ""
        
        for(let i = 0; i < matchingCriminal.known_associates.length; i++){
            document.querySelector(".known-associates-container").innerHTML += `
            <p>Name: ${matchingCriminal.known_associates[i].name}</p>
            <p>Alibi: ${matchingCriminal.known_associates[i].alibi}</p>
            `
        }
    }
})









// const eventHub = document.querySelector("main")

// eventHub.addEventListener("click", (idObject) => {
//     if(idObject.target.id.includes("associates--")){
//         // console.log("This is the associate that was selected: ", idObject.target.id)
//         console.log(idObject.target.id.split("--")[1])
//     }let  singleAssociate = associate.filter((currentAssociateInLoop) => {
//                     return currentAssociateInLoop.id == id})

//<section class="associate">
//             //     <p>Name:${currentAssociateInLoop.known_associates[0].name}</p>
//             //     <p>Alibi:${currentAssociateInLoop.known_associates[0].alibi}</p>
//             // </section>
//     AssociateList(idObject.target.id.split("--")[1])
// })
// }