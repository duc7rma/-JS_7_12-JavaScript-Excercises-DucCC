//! Ex3
export const findTotalEqualTen = (arr, sum) => {
    let hashMap = {},
        results = []

    arr.forEach(element => {
        if (hashMap[element]) {
            results.push([hashMap[element], element])
        } else {
            hashMap[sum - element] = element;
            console.log(hashMap)
        }
    });
    // for (let i = 0; i < arr.length; i++) {
    //     if (hashMap[arr[i]]) {
    //         results.push([hashMap[arr[i]], arr[i]])
    //     } else {
    //         hashMap[sum - arr[i]] = arr[i];
    //         console.log(hashMap)
    //     }
    // }
    return results;
}