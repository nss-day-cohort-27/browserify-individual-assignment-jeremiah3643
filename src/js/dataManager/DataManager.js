const DataManager = Object.create(null, {
    "formCapture": {
        value: (type, place, location, description) => {
            return fetch(`http://localhost:8088/${type}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    place: place,
                    location: location,
                    description: description,
                    type: type
                })
            })
        }
    },
    "displaysPlaces": {
        value: () => {
            return fetch(`http://localhost:8088/places`)
                .then(r => r.json())
                .then((result) => {
                    let response = result
                    return response
                })
        }
    },
    "deleter": {
        value: (type, id) => {
            return fetch(`http://localhost:8088/${type}/${id}`, {
                method: "DELETE"
            })
        }
    },
    "displaysRestaurants": {
        value: () => {
            return fetch(`http://localhost:8088/restaurants`)
                .then(r => r.json())
                .then((result) => {
                    let response = result
                    return response
                })
        }
    },
    "displaysCities": {
        value: () => {
            return fetch(`http://localhost:8088/cities`)
                .then(r => r.json())
                .then((result) => {
                    let response = result
                    return response
                })
        }
    }
})
module.exports = DataManager