import { EmailOrPasswordIncorrectException, UnprocessableEntityException } from "@/common/model/AppException";
import { Unit } from "@/common/utils/Unit";
import { isLeft, left, right, type Either } from "fp-ts/lib/Either";
import { AuthService } from "../services/AuthService";
import { useAuthStore } from "../stores/AuthStore";

export class AuthController{
    constructor(
        private authService: AuthService = new AuthService(),
    ){}

    public async login(email:string, password:string): Promise<Either<string, Unit>>{
        const authStore = useAuthStore();
        const response = await this.authService.login(email,password);
        if(isLeft(response)){
            if(response.left instanceof EmailOrPasswordIncorrectException){
                return left('Nieprawidłowy email lub hasło');
            }
            return left('Wystąpił błąd serwera, spróbuj ponownie później');
        }else {
            authStore.setToken(response.right);
            return right(Unit);
        }
    }

    public async register(username:string, password:string, passwordConfirmation:string): Promise<Either<string, Unit>>{
        const authStore = useAuthStore();
        const response = await this.authService.register(username,password,passwordConfirmation);
        console.log(response);
        if(isLeft(response)){
            const error = response.left;
            if(error instanceof UnprocessableEntityException){
                if(error.errors instanceof Array){
                    return left(error.errors[0]);
                }
                else{
                    return left(error.errors);
                }
            }
            else{
                return left('Wystąpił błąd serwera, spróbuj ponownie później');
            }
        }else{
            authStore.setToken(response.right);
            return right(Unit);
        }
    }
}