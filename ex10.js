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
