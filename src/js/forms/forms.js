// Set up forms to add places

const forms = Object.create(null, {
    "addPlace": {
        value: () => {
            return `<form id="inputForm">
                        <input id="inputPlace" placeholder="Place"></input>
                        <input id="inputLocation" placeholder="Location"></input>
                        <textarea id="inputDescription" style="height:200px" placeholder="Description"></textarea>
                        <select id="inputType" onchange="showOptions(this)" required>
                            <option value="places">Place</option>
                            <option value="restaurants">Restaurant</option>
                            <option value="cities">City</option>
                        </select
                        </form>
                        <button id="formSubmit" type="submit" form="inputForm">Submit</button>
                    `
        }
    }



})

module.exports = forms