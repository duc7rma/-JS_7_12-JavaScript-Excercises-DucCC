//! Ex1, Ex5
const findSameElements = (arr1, arr2) => {
    const results = []
    arr1.forEach(element => {
        arr2.includes(element) && (!results.includes(element) && results.push(element))
    });
    return results
}

//! Ex2
const findTwoElements = (arr) => {
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

//! Ex3
const findTotalEqualTen = (arr, sum) => {
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

//! Ex6
const findElementNotExistedYet = (arr) => {
    let results = []

    arr.forEach(ele => {
        !results.includes(ele) && results.push(ele);
    })

    return results;
}

//! Ex7
const findCount = (arr) => {
    return arr.reduce((results, ele) => {
        results[ele] = results[ele] + 1 || 1
        return results;
    }, {})
}

//! Ex9

const findTotals = (obj) => {
    return obj.cart.reduce((total, ele) => {
        return (
            {
                ['totalOfMoney']: total['totalOfMoney'] + ele.amount * ele.price,
                ['totalOfAmount']: total['totalOfAmount'] + ele.amount
            }
        )
    }, {
        totalOfMoney: 0,
        totalOfAmount: 0
    })
}

//!Ex8
const findCarByName = (arr, name) => {
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

//! Ex10
Array.prototype.myMap = function (cb) {
    let results = [];
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this) ? results.push(this[i]) : results.push(undefined);
    }
    return results
}


Array.prototype.myFilter = function (cb) {
    let results = [];
    for (var index in this) {
        this.hasOwnProperty(index) && cb(this[index], index, this) && results.push(this[index])
    }
    return results
}

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator;
    initialValue ? (accumulator = initialValue) : (accumulator = this[0])

    if (initialValue) {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                accumulator = cb(accumulator, this[index], index, this)
            }
        }
    } else {
        for (var index = 1; index < this.length; index++) {
            if (this.hasOwnProperty(index)) {
                accumulator = cb(accumulator, this[index], index, this)
            }
        }
    }

    return accumulator
}

//! Ex4
const arr1 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4]
const findElementAppear = (arr) => {
    let result = new Set()

    arr.forEach(ele => {
        !result.has(ele) && result.add(ele)
    })

    return Array.from(result)
}

console.log(findElementAppear(arr1))








