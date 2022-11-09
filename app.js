// one euro is:
let oneEuroIs = {
  "JPY": 127.9, // japan yen
  "USD": 1.2, // us dollar
  "GBP": 0.8, // british pound
}
//1 EUR (Euro) = 1.2 USD (US Dollar)//

function fromEuroToDollar(euro){
  let dollarResult = oneEuroIs.USD * euro;
  return dollarResult;
}
console.log(fromEuroToDollar(1))

function fromDollarToYen(dollar){
  let yenResult= (1/oneEuroIs.USD)*oneEuroIs.JPY * dollar;
  return yenResult;
}
console.log(fromDollarToYen(1))

function fromYenToPound (jpy){
  let poundResult=(1/oneEuroIs.JPY)*oneEuroIs.GBP * jpy;
  return poundResult;
}
console.log(fromYenToPound(1))
// exporta la función para usarla en otros archivos
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };