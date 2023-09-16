const bill = [275, 40, 430]

function tipValues(a) {
    if (a >= 50 && a <= 300) {
        tip = a * 0.15
    } else {
        tip = a * 0.2
    }
    return tip;
}
console.log("The bill was " + bill[0] + ", the tip was " + tipValues(bill[0]) + ", and the total value " + (bill[0] + tip))
console.log("The bill was " + bill[1] + ", the tip was " + tipValues(bill[1]) + ", and the total value " + (bill[1] + tip))
console.log("The bill was " + bill[2] + ", the tip was " + tipValues(bill[2]) + ", and the total value " + (bill[2] + tip))