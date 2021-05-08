const celsiusToFahreneheit = (tempC) => {
    const tempF = tempC * (9 / 5) + 32;
    return tempF; 
};

const fahrenheitToCelsius = (tempF) => {
    const tempC = (tempF - 32) * (5 / 9);
    return tempC;
};


module.exports = {
    celsiusToFahreneheit,
    fahrenheitToCelsius
};