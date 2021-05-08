const conversions = require("../helpers/tempConverter");

class Temperature {
    constructor(temp, unit) {
        this.temp = temp;
        this.unit = unit;
        this.error = {};
    }

    validateUserInput () {
        if (this.temp == undefined ||  typeof(this.temp) != "number") {
            if (this.error.Error) {
                this.error.Error.push("Temperature is required and must be a number");
            }
            else {
                this.error.Error = ["Temperature is required and must be a number"];
            }
        }

        if (this.unit == undefined || (this.unit != "F" && this.unit != "C")) {
            if (this.error.Error) {
                this.error.Error.push("Unit is required and must be either F or C");
            }
            else {
                this.error.Error = ["Unit is required and must be either F or C"];
            }
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