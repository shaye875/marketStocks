import { stockMarket } from "../data/stocks.js"

function averge(list) {
    let sum = 0
    for (let n of list) {
        sum += n
    }
    return sum / list.length
}

function avergeCategory(category) {
    let move = []
    stockMarket.stocks.forEach((s) => {
        if (s.category === category) {
            move.push(s.previousPrices.length)
        }
    })
    return averge(move)
}

export function categoryStability() {
    let categories = []
    stockMarket.stocks.forEach((s) => {
        if (categories.length === 0) {
            categories.push(s.category)
        } else {
            let category = true
            for (let c of categories){
                if (s.category === c){
                    category = false
                }
            }
            if (category === true){
                categories.push(s.category)
            }
        }
    })
    let obj = {}
    for (let c of categories){
        obj[c] = avergeCategory(c)
    }
    return obj
    
}