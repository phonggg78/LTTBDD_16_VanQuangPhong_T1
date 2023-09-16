function calcTip(bill) {
    if (bill>= 50 && bill<=300) {
        return bill * 0.15
    } else {
        return bill *0.20
    }
}

const bills = [125, 555, 44]
const tips = bills.map(calcTip)
const totalbill = bills.map((bill, index) => bill + tips[index])
console.log("Hóa đơn :",bills);
console.log("Tiền tip : ",tips);
console.log("Tổng hóa đơn : ",totalbill);