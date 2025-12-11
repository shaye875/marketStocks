import { filterStocksByPrice, searchStock } from "./utils/print.js";
import { OperateOnStock } from "./utils/update.js";
import readLineSync from "readline-sync"

function menu() {
    let flag = true
    while (flag) {
        console.log("enter 1. to show stock by name or id");
        console.log("2.show all stocks above or ander ech price");
        console.log("3.buy or sell of stock");
        console.log("0.exit");
        let choich = Number(readLineSync.question())
        switch (choich) {
            case 1:
                let idName = readLineSync.question("enter id or name: ")
                console.table(searchStock(idName));
                break
            case 2:
                let aboveAnder = Boolean(readLineSync.question("if you want above write 'true' if you want ander write false: "))
                let price = readLineSync.question("enter price: ")
                console.table(filterStocksByPrice(price, aboveAnder));
                break
            case 3:
                let operation = readLineSync.question("buy or sell: ")
                let idName1 = readLineSync.question("enter id or name: ")
                OperateOnStock(operation, idName1)
                break
            case 0:
                flag = false
                break
        }
    }
}
menu()

