const conversions = require("../helpers/tempConverter");
const errors = require("../helpers/errorHandler");


class Temperature {
    constructor(temp, unit) {
        this.temp = temp;
        this.unit = unit;
        this.error = {};
    }

    validateUserInput () {
        if (this.temp == undefined ||  typeof(this.temp) != "number") {
            errors.addError(this.error, "Temp is required and must be a number");
        }

        if (this.unit == undefined || (this.unit != "F" && this.unit != "C")) {
            errors.addError(this.error, "Unit is required and must be either F or C");
        }
    }

    convertTemperature () {
        if (this.unit == "F") {
            this.temp = conversions.fahrenheitToCelsius(this.temp);
            this.unit = "C";
        }

        else {
            this.temp = conversions.celsiusToFahreneheit(this.temp);
            this.unit = "F";
        }
    }

    formatOutput() {
        const output = {
            "temp": this.temp,
            "unit": this.unit
        };

        return output;
    }
}

module.exports = Temperature;