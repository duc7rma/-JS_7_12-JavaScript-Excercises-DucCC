//! Ex9

export const findTotals = (obj) => {
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