import { stockMarket } from "../data/stocks.js";
import readLineSync from "readline-sync"

export function OperateOnStock(operation, identifier){

   if (operation.toLowerCase() === "buy"){
    stockMarket.stocks.forEach((s)=>{
        if (s.name === identifier || s.id === identifier){
           let num = readLineSync.question("how many you whant buy")
           s.availableStocks-=num
           s.previousPrices.push(s.currentPrice)
           s.currentPrice += (s.currentPrice/100)*5
           stockMarket.stocks.forEach((s1)=>{
            if (s.category === s1.category){
                s1.previousPrices.push(s1.currentPrice)
                s1.currentPrice+=(s.currentPrice/100)
            }
           })
        stockMarket.lastUpdated = new Date()
        }
    })
   }
   else if(operation.toLowerCase() === "sell"){
    stockMarket.stocks.forEach((s)=>{
        if (s.name === identifier || s.id === identifier){
           let num = readLineSync.question("how many you whant sell")
           s.availableStocks+=num
           s.previousPrices.push(s.currentPrice)
           s.currentPrice -= (s.currentPrice/100)*5
           stockMarket.stocks.forEach((s1)=>{
            if (s.category === s1.category){
                s1.previousPrices.push(s1.currentPrice)
                s1.currentPrice -= s.currentPrice/100
            }
           })
        stockMarket.lastUpdated = new Date()
        }
    })
   }
   else{
    throw new Error("is not buy or sell")
   }
}