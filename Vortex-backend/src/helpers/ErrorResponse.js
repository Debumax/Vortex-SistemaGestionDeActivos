class ErrorResponse extends Error {
    constructor(mensaje, codigoStatus) {
        super(mensaje);
        this.codigoStatus = codigoStatus;
    }
}
module.exports = ErrorResponse;