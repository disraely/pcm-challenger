'use strict';

var _require = require('./constants'),
    errorType = _require.errorType;

var getErrorCode = function getErrorCode(errorName) {
    if (errorType[errorName] == undefined) {
        errorName = 'UNAUTHORIZED';
    }
    return errorType[errorName];
};

module.exports = getErrorCode;
//# sourceMappingURL=errors.js.map