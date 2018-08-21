const forms = require("./forms/forms")
const displayer = require("./display/display")
const DataManager = require("./dataManager/DataManager")

const buildDOM = {}

// function builder() {
//     console.log("Hello!")
//     document.querySelector("#displayPlace").innerHTML += fieldBuilder("places")
//     document.querySelector("#displayRestaurant").innerHTML += fieldBuilder("restaurants")
//     document.querySelector("#displayCity").innerHTML += fieldBuilder("cities")
// }
function fieldBuilder1() {
    DataManager.displaysPlaces()
        .then(result => {
            result.forEach(element => {

                document.querySelector("#displayPlace").innerHTML += displayer.displayCards(element)
            });
        })
}
function fieldBuilder2() {
    DataManager.displaysRestaurants()
        .then(result => {
            result.forEach(element => {

                document.querySelector("#displayRestaurant").innerHTML += displayer.displayCards(element)
            });
        })
}
function fieldBuilder3() {
    DataManager.displaysCities()
        .then(result => {
            result.forEach(element => {
                document.querySelector("#displayCity").innerHTML += displayer.displayCards(element)
            });
        })
}


buildDOM.displayBuilder1 = fieldBuilder1()
buildDOM.displayBuilder2 = fieldBuilder2()
buildDOM.displayBuilder3 = fieldBuilder3()
buildDOM.addForm = forms.addPlace()

module.exports = buildDOM
