function addError (errorObj, errorMessage) {
    if (errorObj.Error) {
        errorObj.Error.push(errorMessage)
    }
    else {
        errorObj.Error = [errorMessage];
    }
};

module.exports = {
    addError
};