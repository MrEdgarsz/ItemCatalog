export class RegisterDto{
    constructor(
        public email: string,
        public password: string,
        public passwordConfirmation: string,
    ){}
}