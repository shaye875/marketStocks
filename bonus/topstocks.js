import { stockMarket } from "../data/stocks.js";

export function topIncreasingStocks() {
    let top = stockMarket.stocks.filter((s) => {
        if (s.previousPrices.length >= 1) {
            return s
        }
    })
    let top3 = []
    top.forEach((s) => {
        if (top3.length < 3) {
            top3.push(s)
        } else {
            for (let s1 of top3) {
                if (s.previousPrices[s.previousPrices.length - 1] - s1.previousPrices[0] > s1.previousPrices[s1.previousPrices.length - 1] - s1.previousPrices[0]) {
                    top3.splice(top3.indexOf(s1), 1, s)
                }
            }
        }
    })
    return top3
}

export function topDecreasingStocks() {
    let top = stockMarket.stocks.filter((s) => {
        if (s.previousPrices.length >= 1) {
            return s
        }
    })
    let topDec3 = []
    top.forEach((s) => {
        if (topDec3.length < 3) {
            topDec3.push(s)
        } else {
            for (let s1 of topDec3) {
                if (s.previousPrices[s.previousPrices.length - 1] - s1.previousPrices[0] < s1.previousPrices[s1.previousPrices.length - 1] - s1.previousPrices[0]) {
                    topDec3.splice(topDec3.indexOf(s1), 1, s)
                }
            }
        }
    })
    return topDec3
}

