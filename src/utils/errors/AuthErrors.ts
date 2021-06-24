import { BaseError } from "./BaseError";

export class BadCredentialsAuthError extends BaseError {
    /**
     * Create an error that strictly says the authentication failed due to bad credentials
     */
    constructor(message: string, name?: string, stack?: string) {
        super(message, name, stack);
    }
}