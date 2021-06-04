const Distance = require("../model/distance.Model");
const helper = require("../routeHelpers/helperMethods");


const post = (req, res) => {
    // check if client can accept JSON and sent JSON in request body
    const request_status = helper.validateRequestHeaders(req);

    // client accepting JSON and sent JSON body
    if (!request_status) {
        const distance = new Distance(req.body.distance, req.body.unit, req.body.desired_unit);
        distance.validateUserInput();

        // error with user input
        if (Object.keys(distance.error).length != 0) {
            res.status(400).json(distance.error);
        }

        // user input valid
        else {
            distance.convertDistance();
            res.status(200).json(distance.formatOutput());
        }
    } 
    
    else {
        res.status(request_status).end();
    }
};


module.exports = {
    post
};