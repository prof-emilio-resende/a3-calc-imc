export class BaseError extends Error {
    /**
     *
     */
    constructor(message: string, name?: string, stack?: string) {
        super();
        this.message = message;
        if (name) this.name = name;
        this.stack = stack;
    }
}