class ExpressError extends Error {
    constructor(message: string, statusCode: number) {
        super();
        this.message = message;
    }
}

export default ExpressError;