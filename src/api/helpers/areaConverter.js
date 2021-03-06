const INCH_PER_CM = 0.3937008;
const FEET_PER_CM = 0.0328084;
const YARD_PER_CM = 0.01093613;
const MILE_PER_CM = 0.000006213712;
const ACRE_PER_CM = 0.000157195859191; 
const CM_PER_INCH = 2.54;
const CM2_PER_M2 = 100**2;
const CM2_PER_KM2 = 100000**2;
const CM2_PER_ARE = 1000**2;
const ARE_PER_HECTARE = 100;
const INCH_PER_FT = 12;
const INCH_PER_YD = 36; 
const INCH_PER_MI = 63360;
const INCH_PER_ACRE = 6272646;

const performConversion = (given_distance, conversion_rate) => {
    const new_distance = given_distance * (conversion_rate**2);
    return new_distance;
};

const unitEquals = (desired_unit, unit_to_check) => {
    return (desired_unit == unit_to_check);
};

const metricToImperial = (metricDistance, metricUnit, imperialUnit) => {
    let cm = metricDistance;

    if ( unitEquals(metricUnit, "M2") ) {
        cm *= CM2_PER_M2;
    }
    else if ( unitEquals(metricUnit, "KM2") ) {
        cm *= CM2_PER_KM2;
    }
    else if ( unitEquals(metricUnit, "A") ) {
        cm *= CM2_PER_ARE;
    }
    else if ( unitEquals(metricUnit, "HA") ) {
        cm *= CM2_PER_ARE * ARE_PER_HECTARE;
    }

    if ( unitEquals(imperialUnit, "IN2") ) {
        return performConversion(cm, INCH_PER_CM);
    }
    else if ( unitEquals(imperialUnit, "FT2") ) {
        return performConversion(cm, FEET_PER_CM);
    }
    else if ( unitEquals(imperialUnit, "YD2") ) {
        return performConversion(cm, YARD_PER_CM);
    }
    else if ( unitEquals(imperialUnit, "MI2") ) {
        return performConversion(cm, MILE_PER_CM);
    }
    else if ( unitEquals(imperialUnit, "AC") ) {
        return performConversion(cm, ACRE_PER_CM);
    }
};

const imperialToMetric = (imperialDistance, imperialUnit, metricUnit) => {
    let inches = imperialDistance;

    if ( unitEquals(imperialUnit, "FT2") ) {
        inches *= INCH_PER_FT;
    }
    else if ( unitEquals(imperialUnit, "YD2") ) {
        inches *= INCH_PER_YD;
    }
    else if ( unitEquals(imperialUnit, "MI2") ) {
        inches *= INCH_PER_MI;
    }
    else if ( unitEquals(imperialUnit, "AC") ) {
        inches *= INCH_PER_ACRE;
    }

    let cm = performConversion(inches, CM_PER_INCH);
    if ( unitEquals(metricUnit, "CM2") ) {
        return cm;
    }
    else if ( unitEquals(metricUnit, "M2") ) {
        const m = cm / CM2_PER_M2;
        return m;
    }
    else if ( unitEquals(metricUnit, "KM2") ) {
        const km = cm / CM2_PER_KM2;
        return km;
    }
    else if ( unitEquals(metricUnit, "A") ) {
        const are = cm / CM2_PER_ARE;
        return are;
    }
    else if ( unitEquals(metricUnit, "HA") ) {
        const hectare = (cm / CM2_PER_ARE) / ARE_PER_HECTARE;
        return hectare;
    }
};


module.exports = {
    metricToImperial,
    imperialToMetric
};