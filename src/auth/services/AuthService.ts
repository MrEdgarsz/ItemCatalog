
import { EmailOrPasswordIncorrectException, ServerError, type AppException } from "@/common/model/AppException";
import { AxiosClient } from "@/common/utils/http_client/AxiosClient";

import { left, right, type Either } from "fp-ts/lib/Either";
import type { AuthInterface } from "../interfaces/AuthInterface";
import type { AuthTokenDto } from "../models/dtos/AuthTokenDto";
import { LoginDto } from "../models/dtos/LoginDto";

export class AuthService implements AuthInterface{

    async login(email: string, password: string): Promise<Either<AppException,AuthTokenDto>> {
        const dto = new LoginDto(email, password);
        const response = await AxiosClient.instance.post<AuthTokenDto>('auth/login',dto);
        if(response.status == 200){
            return right(response.data);
        }else if (response.status == 401){
            return left(new EmailOrPasswordIncorrectException());
        }else{
            return left(new ServerError());
        }
    }

    register(username: string, password: string, passwordConfirmation: string): Promise<any> {
        throw new Error("Method not implemented.");
        
    }
    
    
}