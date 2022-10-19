export class ApiError {
    message: string;
    status: number = 500;

    constructor(message: string) {
        this.message = message;
    }

    withStatus(status: number) {
        this.status = status;

        return this
    }
}