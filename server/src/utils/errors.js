const { errorType } = require('./constants')

const getErrorCode = errorName => {
    if (errorType[errorName] == undefined) {
        errorName = 'UNAUTHORIZED';
    }
    return errorType[errorName];
}

module.exports = getErrorCode