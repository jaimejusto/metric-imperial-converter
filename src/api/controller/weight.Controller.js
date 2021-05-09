const express = require("express");
const Weight = require("../model/weight.Model");
const helper = require("../routeHelpers/helperMethods");


const post = (req, res) => {
    // check if client can accept JSON and sent JSON in request body
    const request_status = helper.validateRequestHeaders(req);

    // client accepting JSON and sent JSON body
    if (!request_status) {
        const weight = new Weight(req.body.weight, req.body.unit);
        weight.validateUserInput();

        // error with user input
        if (Object.keys(weight.error).length != 0) {
            res.status(400).json(weight.error);
        }

        // user input valid
        else {
            weight.convertWeight();
            res.status(200).json(weight.formatOutput());
        }
    } 
    
    else {
        res.status(request_status).end();
    }
};


module.exports = {
    post}