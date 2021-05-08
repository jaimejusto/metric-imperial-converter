const express = require("express");
const router = express.Router();


const tempController = require("../controller/temp.Controller");


router.route("/temperature")

    .post(tempController.post)
    // Methods Not Allowed
    .get(tempController.methodNotAllowed)
    .patch(tempController.methodNotAllowed)
    .put(tempController.methodNotAllowed)


;

module.exports = router;