const buildDOM = require("./DOMbuilder")
const DataManager = require("./dataManager/DataManager")


document.querySelector("#placeForm").innerHTML = buildDOM.addForm
buildDOM.displayBuilder1
buildDOM.displayBuilder2
buildDOM.displayBuilder3
document.querySelector("#wrapper").addEventListener("click", () => {
    let deleteButton = event.target.value
    let listener = event.target.id
    if (listener === "formSubmit") {
        let type = document.querySelector("#inputType").value
        let place = document.querySelector("#inputPlace").value
        let location = document.querySelector("#inputLocation").value
        let description = document.querySelector("#inputDescription").value
        DataManager.formCapture(type, place, location, description)
            .then(alert("Location Added"))
    }
    else if (deleteButton === "delete") {
        let type = event.target.id
        let id = event.target.className
        DataManager.deleter(type, id)
    }
})
