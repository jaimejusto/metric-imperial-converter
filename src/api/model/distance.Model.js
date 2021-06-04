const conversions = require("../helpers/distanceConverter");
const errors = require("../helpers/errorHandler");

const metricUnits = ["cm", "m", "km"];
const imperialUnits = ["in", "ft", "yd", "mi"];
const allowedUnits = [].concat(metricUnits, imperialUnits);

class Distance {
    constructor(distance, unit, desired_unit) {
        this.distance = distance;
        this.unit = unit;
        this.desired_unit = desired_unit;
        this.error = {};
    }

    validateUserInput () {
        if (this.distance == undefined ||  typeof(this.distance) != "number") {
            errors.addError(this.error, "Distance is required and must be a number.");
        }

        // ensure that an allowed unit was given
        else if (this.unit == undefined || !allowedUnits.includes(this.unit)) {
            errors.addError(this.error, `Unit is required and must be one of the following: ${allowedUnits}.`);
        }

        else {
            // ensure desired unit was given 
            if ( this.desired_unit == undefined ) {
                errors.addError(this.error, "Desired unit is required.");
            }

            // user can only convert metric to imperial
            else if ( metricUnits.includes(this.unit) && !imperialUnits.includes(this.desired_unit) ) {
                errors.addError(this.error, `Desired unit must be one of the following: ${imperialUnits}.`);
            }
            
            // user can only convert imperial to metric
            else if ( imperialUnits.includes(this.unit) && !metricUnits.includes(this.desired_unit) ) {
                errors.addError(this.error, `Desired unit must be one of the following: ${metricUnits}.`);
            }
        }
    }

    convertDistance () {
        // convert given metric to imperial
        if ( metricUnits.includes(this.unit) ) {
            this.distance = conversions.metricToImperial(this.distance, this.unit, this.desired_unit);
        }

        else {
            this.distance = conversions.imperialToMetric(this.distance, this.unit, this.desired_unit);
        }
    }

    formatOutput() {
        const output = {
            "distance": this.distance,
            "unit": this.desired_unit
        };

        return output;
    }
}

module.exports = Distance;