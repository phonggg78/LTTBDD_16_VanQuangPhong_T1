const forecast1 = [17,21,23]
const forecast2 = [12,5,-5,0,4]

function printForecast(forecast) {
    let result =""
    let cf=""
    for (let index = 0; index < forecast.length; index++) {
        cf = forecast[index] +"°C in " + (index + 1) +" days" 
        result += " ... " + cf;
        
    }
    console.log(result);
   
}
printForecast(forecast1)
printForecast(forecast2)
