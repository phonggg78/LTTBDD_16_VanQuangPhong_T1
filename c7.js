const mark = {
    mass: 78,
    height: 1.69
};
const john = {
    mass: 92,
    height: 1.95
};
function calcBMI(name) {
   let BMI = name.mass / (name.height*name.height)
    return BMI;
}
if (calcBMI(mark)>calcBMI(john)) {
    console.log("Mark's ("+calcBMI(mark).toFixed(1)+") is higher than John's ("+calcBMI(john).toFixed(1)+")!");
} else {
    console.log("John's BMI ("+calcBMI(john).toFixed(1)+") is higher than Mark's ("+calcBMI(mark).toFixed(1)+")!")
}