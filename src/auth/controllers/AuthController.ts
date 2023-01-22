import type { AppException } from "@/common/model/AppException";
import { Unit } from "@/common/utils/Unit";
import { isLeft, right, type Either } from "fp-ts/lib/Either";
import { AuthService } from "../services/AuthService";
import { useAuthStore } from "../stores/AuthStore";

export class AuthController{
    constructor(
        private authService: AuthService = new AuthService(),
    ){}

    public async login(email:string, password:string): Promise<Either<String, Unit>>{
        const authStore = useAuthStore();
        const response = await this.authService.login(email,password);
        if(isLeft(response)){
            ret;
        }else {
            authStore.setToken(response.right);
            return right(Unit);
        }
    }
}