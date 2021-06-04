const express = require("express");
const router = express.Router();


const tempController = require("../controller/temp.Controller");
const weightController = require("../controller/weight.Controller");
const distanceController = require("../controller/distance.Controller");
const areaController = require("../controller/area.Controller");
const apiController = require("../controller/api.Controller");


router.route("/temperature")
    .post(tempController.post)
    
    // Methods Not Allowed
    .get(apiController.methodNotAllowed)
    .patch(apiController.methodNotAllowed)
    .put(apiController.methodNotAllowed)
;

router.route("/weight")
    .post(weightController.post)

    // Methods Not Allowed
    .get(apiController.methodNotAllowed)
    .patch(apiController.methodNotAllowed)
    .put(apiController.methodNotAllowed)
;

router.route("/distance")
    .post(distanceController.post)

    // Methods Not Allowed
    .get(apiController.methodNotAllowed)
    .patch(apiController.methodNotAllowed)
    .put(apiController.methodNotAllowed)
;

router.route("/area")
    .post(areaController.post)

    // Methods Not Allowed
    .get(apiController.methodNotAllowed)
    .patch(apiController.methodNotAllowed)
    .put(apiController.methodNotAllowed)
;
module.exports = router;