const conversions = require("../helpers/weightConverter");
const errors = require("../helpers/errorHandler");

class Weight {
    constructor(weight, unit) {
        this.weight = weight;
        this.unit = unit;
        this.error = {};
    }
    

    validateUserInput () {
        const allowedUnits = ["OZ", "LB", "G", "KG"];
        if (this.weight == undefined ||  typeof(this.weight) != "number") {
            errors.addError(this.error, "Weight is required and must be a number");
        }

        if (this.unit == undefined || !allowedUnits.includes(this.unit)) {
            errors.addError(this.error, `Unit is required and must be one of the following: ${allowedUnits}`);
        }
    };

    convertWeight () {
        if (this.unit == "G" || this.unit == "KG") {
            [this.weight, this.unit] = conversions.metricToImperial(this.weight, this.unit);
        }
        else {
            [this.weight, this.unit] = conversions.imperialToMetric(this.weight, this.unit);
        }
    };

    formatOutput() {
        const output = {
            "weight": this.weight,
            "unit": this.unit
        };

        return output;
    }
};

module.exports = Weight;