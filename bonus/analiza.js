import { topDecreasingStocks,topIncreasingStocks,mostVolatileStock } from "./topstocks.js";
import { categoryStability } from "./averge.js";
export function analyzeMarketTrends(){
    let top3 = topIncreasingStocks()
    let namesTop3 = [top3[0].name,top3[1].name,top3[2].name]
    let topDec3 = topDecreasingStocks()
    let namestopDec3 = [topDec3[0].name,topDec3[1].name,topDec3[2].name]
    let most = mostVolatileStock()
    let mostname = most[0].name
    let categoryobj = categoryStability()
    return{
        topIncreasingStocks:namesTop3,
        topDecreasingStocks:namestopDec3,
        mostVolatileStock:mostname,
        categoryStability:categoryobj
    }
}

