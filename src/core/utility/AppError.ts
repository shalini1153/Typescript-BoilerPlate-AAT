export default class AppError extends Error {
    isOperational: boolean;
    message: string;

    constructor(_message: string = "", _isOperational: boolean = true) {
        super();
        Error.call(this);
        Error.captureStackTrace(this);
        this.message = _message;
        this.isOperational = _isOperational;
        //this.name = this.constructor.name; // Optional
    }
}
