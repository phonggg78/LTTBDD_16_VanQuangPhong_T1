function calcTip(bill) {
    if (bill>= 50 && bill<=300) {
        return bill * 0.15
    } else {
        return bill *0.20
    }
}
const tips=[]
const totals = []
const bills = [22,295,176,440,37,105,10,1100,86,52]
let tip;
const totalandtip = bills.map((bills, index) => { 
})
for (let index = 0; index < bills.length; index++) {
    tip = calcTip(bills[index])
    tips.push(tip)
    totals.push(tip+bills[index])
}
console.log("Bills:"+bills);
console.log("Tips:"+tips);
console.log("Totals"+totals);
