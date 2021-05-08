const GRAMS_PER_OZ = 28.349523125;
const OZ_PER_LB = 16;
const GRAMS_PER_KG = 1000;


const metricToImperial = (metricWeight, metricUnit) => {
    let grams;

    if (metricUnit == "KG") {
        const kilograms = metricWeight;
        grams = kilograms * GRAMS_PER_KG; 
    }

    else {
        grams = metricWeight;
    }

    const weightOZ = grams / GRAMS_PER_OZ;

    if (weightOZ >= OZ_PER_LB) {
        const weightLBS = weightOZ / OZ_PER_LB;
        return [weightLBS, "LB"];
    }
    return [weightOZ, "OZ"];
};


const imperialToMetric = (imperialWeight, imperialUnit) => {
    let oz;

    if (imperialUnit == "LB") {
        const lbs = imperialWeight;
        oz = lbs * OZ_PER_LB;
    }   

    else {
        oz = imperialWeight;
    }

    const weightG = oz * GRAMS_PER_OZ;

    if (weightG >= 1000) {
        const weightKG = weightG / 1000;
        return [weightKG, "KG"];
    }
    return [weightG, "G"];
};

module.exports = {
    metricToImperial,
    imperialToMetric
};