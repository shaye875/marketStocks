import { stockMarket } from "../data/stocks.js";

export function filterStocksByPrice(givenPrice, above){
    if (!(givenPrice>=0)){
        throw new Error("is not value")
    }
    let stocks1
    for (let s of stockMarket.stocks){
        if (above === true){
        stocks1 =  stockMarket.stocks.filter((s)=>{
                if (s.currentPrice>=givenPrice){
                    return s
                }
            })
        }else if (above === false){
        stocks1 = stockMarket.stocks.filter((s)=>{
                if (s.currentPrice<=givenPrice){
                    return s
                }
            })
        }
    }
    let stocs = stocks1
    if (stocs.length===0){
        console.log("not found stocks");
    }
    return stocs
}
console.log(filterStocksByPrice("p",false));
