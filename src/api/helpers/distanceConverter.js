const INCH_PER_CM = 0.3937008;
const FEET_PER_CM = 0.0328084;
const YARD_PER_CM = 0.01093613;
const MILE_PER_CM = 0.000006213712;
const CM_PER_INCH = 2.54;
const CM_PER_M = 100;
const CM_PER_KM = 100000;
const INCH_PER_FT = 12;
const INCH_PER_YD = 36; 
const INCH_PER_MI = 63360;

const performConversion = (given_distance, conversion_rate) => {
        const new_distance = given_distance * conversion_rate;
        return new_distance;
};

const unitEquals = (desired_unit, unit_to_check) => {
    return (desired_unit == unit_to_check);
};

const metricToImperial = (metricDistance, metricUnit, imperialUnit) => {
    let cm = metricDistance;

    if ( unitEquals(metricUnit, "M") ) {
        cm = metricDistance * CM_PER_M;
    }
    else if ( unitEquals(metricUnit, "KM") ) {
        cm = metricDistance * CM_PER_KM;
    }

    if ( unitEquals(imperialUnit, "IN") ) {
        return performConversion(cm, INCH_PER_CM);
    }
    else if ( unitEquals(imperialUnit, "FT") ) {
        return performConversion(cm, FEET_PER_CM);
    }
    else if ( unitEquals(imperialUnit, "YD") ) {
        return performConversion(cm, YARD_PER_CM);
    }
    else if ( unitEquals(imperialUnit, "MI") ) {
        return performConversion(cm, MILE_PER_CM);
    }
};

const imperialToMetric = (imperialDistance, imperialUnit, metricUnit) => {
    let inches = imperialDistance;

    if ( unitEquals(imperialUnit, "FT") ) {
        inches = imperialDistance * INCH_PER_FT;
    }
    else if ( unitEquals(imperialUnit, "YD") ) {
        inches = imperialDistance * INCH_PER_YD;
    }
    else if ( unitEquals(imperialUnit, "MI") ) {
        inches = imperialDistance * INCH_PER_MI;
    }

    let cm = performConversion(inches, CM_PER_INCH);
    if ( unitEquals(metricUnit, "CM") ) {
        return cm;
    }
    else if ( unitEquals(metricUnit, "M") ) {
        const m = cm / CM_PER_M;
        return m;
    }
    else if ( unitEquals(metricUnit, "KM") ) {
        const km = cm / CM_PER_KM;
        return km;
    }
};


module.exports = {
    metricToImperial,
    imperialToMetric
};