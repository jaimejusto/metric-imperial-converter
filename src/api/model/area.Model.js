const conversions = require("../helpers/areaConverter");
const errors = require("../helpers/errorHandler");

const metricSquareUnits = [ "CM2", "M2", "KM2", "A", "HA"];
const imperialSquareUnits = ["IN2", "FT2", "YD2", "MI2", "AC",];
const allowedUnits = [].concat(metricSquareUnits, imperialSquareUnits);

class Area {
    constructor (area, unit, desired_unit) {
        this.area = area;
        this.unit = unit;
        this.desired_unit = desired_unit;
        this.error = {};
    }

    validateUserInput () {

        if (this.area == undefined ||  typeof(this.area) != "number") {
            errors.addError(this.error, "Area is required and must be a number.");
        }

        // ensure that an allowed unit was given
        if (this.unit == undefined || !allowedUnits.includes(this.unit)) {
            errors.addError(this.error, `Unit is required and must be one of the following: ${allowedUnits}.`);
        }

        else {
            // ensure desired unit was given 
            if ( this.desired_unit == undefined ) {
                errors.addError(this.error, "Desired unit is required.");
            }
            // user can only convert square metric to square imperial
            else if ( metricSquareUnits.includes(this.unit) && !imperialSquareUnits.includes(this.desired_unit) ) {
                errors.addError(this.error, `Desired unit must be one of the following: ${imperialSquareUnits}.`);
            }
            // user can only convert square imperial to square metric
            else if ( imperialSquareUnits.includes(this.unit) && !metricSquareUnits.includes(this.desired_unit) ) {
                errors.addError(this.error, `Desired unit must be one of the following: ${metricSquareUnits}.`);
            }
        }
    }
    convertDistance () {
        // convert given metric to imperial
        if ( metricSquareUnits.includes(this.unit) ) {
            this.area = conversions.metricToImperial(this.area, this.unit, this.desired_unit);
        }

        else {
            this.area = conversions.imperialToMetric(this.area, this.unit, this.desired_unit);
        }
    }

    formatOutput() {
        const output = {
            "area": this.area,
            "unit": this.desired_unit
        };

        return output;
    }
}

module.exports = Area;