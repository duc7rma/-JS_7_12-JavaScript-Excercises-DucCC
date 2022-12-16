//! Ex1, Ex5
export const findSameElements = (arr1, arr2) => {
    const results = []
    arr1.forEach(element => {
        arr2.includes(element) && (!results.includes(element) && results.push(element))
    });
    return results
}



