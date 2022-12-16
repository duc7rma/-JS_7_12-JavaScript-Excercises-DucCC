//!Ex8
export const findCarByName = (arr, name) => {
    let carsByName = []
    // let results = {
    //     [name]: []
    // }

    arr.forEach(car => {
        car.make === name && (carsByName.push(car))
    });
    // arr.reduce((result, car) => {
    //     car.make === name && (results[car.make].push(car))
    // }, { name: [] })

    return ({
        [name]: carsByName
    })
}