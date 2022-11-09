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

// function fromDollarToYen(dollar){
//   let
// }

// exporta la función para usarla en otros archivos
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromEuroToDollar };