// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
//1 EUR (Euro) = 1.2 USD (US Dollar)
//1 EUR (Euro) = 127.9 JPY (japan yen))
//1 EUR (Euro) = 0.8 GBP (british pound)

const fromEuroToDollar = (EuroAmount) => {
    return (oneEuroIs.USD*EuroAmount)
}
const fromYenToPound = (YanAmount) => {
    return (oneEuroIs.JPY*YanAmount)
}
const fromDollarToYen = (DollarAmount) => {
    return (oneEuroIs.GBP*DollarAmount)
}

module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen }

console.log(fromEuroToDollar(20))
console.log(fromYenToPound(20))
console.log(fromDollarToYen(20))

