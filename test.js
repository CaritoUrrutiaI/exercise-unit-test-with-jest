const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test("3,5 euro should be 4,2 dollars", function(){
  // importo la funcion desde app.js
  const { fromEuroToDollar } = require('./app.js')

  // hago mi comparacion (la prueba)
  expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("Ten dollars should be 1065,83 yens", function(){
  // importo la funcion desde app.js
  const { fromDollarToYen } = require('./app.js')

  // hago mi comparacion (la prueba)
  expect(fromDollarToYen(10)).toBe(1065.8333333333335); //1 USD son 106,583 Yen entonces 10 USD deberian ser = (10 * 106.583)
})

test("One thousand yens should be 6,25489 pounds", function(){
  // importo la funcion desde app.js
  const { fromYenToPound } = require('./app.js')

  // hago mi comparacion (la prueba)
  expect(fromYenToPound(1000)).toBe(6.254886630179828); //1 JPY son 0,00625489  entonces 1000 GBP deberian ser = (1000 * 0,00625489 )
})
