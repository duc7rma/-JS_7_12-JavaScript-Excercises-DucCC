//! Ex6
export const findElementNotExistedYet = (arr) => {
    let results = []

    arr.forEach(ele => {
        !results.includes(ele) && results.push(ele);
    })

    return results;
}