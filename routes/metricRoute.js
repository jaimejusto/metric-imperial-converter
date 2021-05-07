const express = require("express");
const router = express.Router();

const validateRequest = () => {
    if (req.accepts != "application/json") {
        return res.status(406).type("text/html").send("Server only sends JSON");
    }

    if (!req.is("application/json")) {
        return res.status(415).type("application/json").send({"Error": "Request body must be JSON"});
    }
    else {
        return;
    }
}

router.route("/")

    .get( (req, res) => {
        res.send("hello");
    })

    // Converts metric to imperial units
    .post( (req, res) => {
        // validate that client accepts JSON and sent JSON
        validateRequest();

        



    })

;
module.exports = router;