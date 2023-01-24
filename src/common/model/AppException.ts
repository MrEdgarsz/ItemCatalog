export type AppException = UnauthorizedException | EmailOrPasswordIncorrectException | ServerError;
export class EmailOrPasswordIncorrectException {}
export class UnauthorizedException  {}
export class ServerError {}
export class UnprocessableEntityException {
    constructor(public errors: Array<string> | string) {}
}