const express = require("express");

const methodNotAllowed = (req, res) => {
    res.status(405).set("Allow", "POST").json({"Error": `${req.method} not allowed`});
};


module.exports = {
    methodNotAllowed
};