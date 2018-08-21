
const displayer = Object.create(null, {
    "displayCards": {
        value: (result) => {
            return `<div id=${result.type}>
               <h2>${result.place}</h2>
               <p>${result.location}</p>
               <p>${result.description}</p>
               <button id=${result.type} class=${result.id} value="delete">Delete</button>
               </div>`
        }

    },
    "displayFiller": {
        value: (result) => {
            for (let i = 0; i < result.length; i++) {
                const element = result[i]
                return displayer.displayCards(element)
            }
        }
    }

})


module.exports = displayer
