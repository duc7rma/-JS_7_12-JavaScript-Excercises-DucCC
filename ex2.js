//! Ex2
export const findTwoElements = (arr) => {
    let max1 = arr[0]
    let max2 = arr[0]
    let results = []
    let newArr = []


    arr.forEach(element => {
        if (element >= max1) {
            max1 = element
        }
    })
    results.push(max1)

    const index = arr.indexOf(max1)
    if (index > -1) {
        newArr = arr.filter(element => element !== max1).forEach(element => {
            if (element >= max2) {
                max2 = element
            }
        })
    }
    results.push(max2)

    return results
}