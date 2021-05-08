const validateRequestHeaders = (request) => {
    // check if client can accept JSON
    if (!request.accepts("application/json")) {
        return 406;
    }

    // check if request body is JSON
    if (!request.is("application/json")) {
        return 415;
    }
    else {

        return false;
    }
}



module.exports = {
    validateRequestHeaders
}