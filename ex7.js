//! Ex7
export const findCount = (arr) => {
    return arr.reduce((results, ele) => {
        results[ele] = results[ele] + 1 || 1
        return results;
    }, {})
}


