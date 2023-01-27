export class UnprocessableEntityDto {
    constructor(public message: Array<string> | string) {}
}