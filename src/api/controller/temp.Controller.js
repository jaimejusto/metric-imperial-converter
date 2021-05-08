const express = require("express");
const Temperature = require("../model/temp.Model");
const helper = require("../routeHelpers/helperMethods");


const post = (req, res) => {
    // check if client can accept JSON and sent JSON in request body
    const request_status = helper.validateRequestHeaders(req);

    // client accepting JSON and sent JSON body
    if (!request_status) {
        const temperature = new Temperature(req.body.temp, req.body.unit);
        temperature.validateUserInput();

        // error with user input
        if (Object.keys(temperature.error).length != 0) {
            res.status(400).json(temperature.error);
        }

        // user input valid
        else {
            temperature.convertTemperature();
            res.status(200).json(temperature.formatOutput());
        }
    } 
    
    else {
        res.status(request_status).send("error");
    }
}

const methodNotAllowed = (req, res) => {
    res.status(405).set("Allow", "POST").json({"Error": `${req.method} not allowed`});
}



module.exports = {
    post,
    methodNotAllowed
}