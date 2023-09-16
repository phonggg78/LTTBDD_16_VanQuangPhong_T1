const mark1 = {
    mass: 78,
    height: 1.69
};
const john1 = {
    mass: 92,
    height: 1.95
};
const mark2 = {
    mass: 95,
    height: 1.88
};
const john2 = {
    mass: 85,
    height: 1.76
};

function bmi(a, b) {
    let bmi = a / (b * b)
    return bmi;
}
console.log("Mark' BMI:" + bmi(mark1.mass, mark1.height).toFixed(1))
console.log("John' BMI:" + bmi(john1.mass, john1.height).toFixed(1))
var markHigherBMI = bmi(mark1.mass, mark1.height) > bmi(john1.mass, john1.height)
if (markHigherBMI == true) {
    console.log("Mark's BMI is higher than John's BMI");
} else {
    console.log("John's BMI is higher than Mark's BMI");
}
var markHigherBMI2 = bmi(mark2.mass, mark2.height) > bmi(john2.mass, john2.height)
var markHigherBMI = bmi(mark1.mass, mark1.height) > bmi(john1.mass, john1.height)
if (markHigherBMI2 == true) {
    console.log("Mark's BMI is higher than John's BMI");
} else {
    console.log("John's BMI is higher than Mark's BMI");
}

if (markHigherBMI == true) {
    console.log("Mark's BMI(" + bmi(mark1.mass, mark1.height).toFixed(1) + ") is higher than John's BMI(" + bmi(john1.mass, john1.height).toFixed(1) + ")");
} else {
    console.log("John's BMI(" + bmi(john1.mass, john1.height).toFixed(1) + ") is higher than Mark's BMI(" + bmi(mark1.mass, mark1.height).toFixed(1) + ")");
}
if (markHigherBMI2 == true) {
    console.log("Mark's BMI(" + bmi(mark2.mass, mark2.height).toFixed(1) + ") is higher than John's BMI(" + bmi(john2.mass, john2.height).toFixed(1) + ")");
} else {
    console.log("John's BMI(" + bmi(john2.mass, john2.height).toFixed(1) + ") is higher than Mark's BMI(" + bmi(mark2.mass, mark2.height).toFixed(1) + ")");
}