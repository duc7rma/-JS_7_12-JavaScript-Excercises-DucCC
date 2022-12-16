//! Ex4
export const findElementAppear = (arr) => {
    let result = new Set()

    arr.forEach(ele => {
        !result.has(ele) && result.add(ele)
    })

    return Array.from(result)
}



