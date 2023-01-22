export type AppException = UnauthorizedException | EmailOrPasswordIncorrectException | ServerError;
export class EmailOrPasswordIncorrectException { }
export class UnauthorizedException { }
export class ServerError { }