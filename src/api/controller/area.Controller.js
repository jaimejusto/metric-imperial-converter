const Area = require("../model/area.Model");
const helper = require("../routeHelpers/helperMethods");


const post = (req, res) => {
    // check if client can accept JSON and sent JSON in request body
    const request_status = helper.validateRequestHeaders(req);

    // client accepting JSON and sent JSON body
    if (!request_status) {
        const area = new Area(req.body.area, req.body.unit, req.body.desired_unit);
        area.validateUserInput();

        // error with user input
        if (Object.keys(area.error).length != 0) {
            res.status(400).json(area.error);
        }

        // user input valid
        else {
            area.convertDistance();
            res.status(200).json(area.formatOutput());
        }
    } 
    
    else {
        res.status(request_status).end();
    }
};


module.exports = {
    post
};