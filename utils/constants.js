'use strict';

exports.errorName = {
    UNAUTHORIZED: 'UNHANDLED',
    MAXENTRADAS: 'MAXENTRADAS',
    MAXPFONDO: 'MAXPFONDO',
    MAXREFRESCO: 'MAXREFRESCO'
};

exports.errorType = {
    UNAUTHORIZED: {
        message: 'Un error inesperado a sucedido.',
        statusCode: 404
    },
    MAXENTRADAS: {
        message: 'Ya se registraron las entradas máximas (2) del día.',
        statusCode: 401
    },
    MAXPFONDO: {
        message: 'Ya se registraron los platos de fondos máximos (2) del día.',
        statusCode: 401
    },
    MAXREFRESCO: {
        message: 'Ya se registro el Refresco del día.',
        statusCode: 401
    }
};
//# sourceMappingURL=constants.js.map