const conversions = require("../helpers/weightConverter");

class Weight {
    constructor(weight, unit) {
        this.weight = weight;
        this.unit = unit;
        this.error = {};
    }
    

    validateUserInput () {
        const allowedUnits = ["OZ", "LB", "G", "KG"]
        if (this.weight == undefined ||  typeof(this.weight) != "number") {
            if (this.error.Error) {
                this.error.Error.push("Weight is required and must be a number");
            }
            else {
                this.error.Error = ["Weight is required and must be a number"];
            }
        }

        if (this.unit == undefined || !allowedUnits.includes(this.unit)) {
            if (this.error.Error) {
                this.error.Error.push("Unit is required and must be either OZ, LB, TON, MG, G, or KG");
            }
            else {
                this.error.Error = ["Unit is required and must be either OZ, LB, TON, MG, G, or KG"];
            }
        }
    };

    convertWeight () {
        if (this.unit == "G" || this.unit == "KG") {
            const results = conversions.metricToImperial(this.weight, this.unit);
            this.weight = results[0];
            this.unit = results[1];
        }
        else {
            const results = conversions.imperialToMetric(this.weight, this.unit);
            this.weight = results[0];
            this.unit = results[1];
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