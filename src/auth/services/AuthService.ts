
import { EmailOrPasswordIncorrectException, ServerError, UnprocessableEntityException, type AppException } from "@/common/model/AppException";
import { AxiosClient } from "@/common/utils/http_client/AxiosClient";
import type { AxiosResponse } from "axios";
import { left, right, type Either } from "fp-ts/lib/Either";
import type { AuthInterface } from "../interfaces/AuthInterface";
import type { AuthTokenDto } from "../models/dtos/AuthTokenDto";
import { LoginDto } from "../models/dtos/LoginDto";
import { RegisterDto } from "../models/dtos/RegisterDto";
import type { UnprocessableEntityDto } from "../models/dtos/UnprocessableEntityDto";



export class AuthService implements AuthInterface{

    async login(email: string, password: string): Promise<Either<AppException,AuthTokenDto>> {
        const dto = new LoginDto(email, password);
        const response = await AxiosClient.instance.post<AuthTokenDto>('auth/login',dto);
        if(response.status == 200){
            return right(response.data);
        }else if (response.status == 401 || response.status == 400){
            return left(new EmailOrPasswordIncorrectException());
        }else{
            return left(new ServerError());
        }
    }

    async register(username: string, password: string, passwordConfirmation: string): Promise<Either<AppException,AuthTokenDto>> {
        const dto = new RegisterDto(username, password, passwordConfirmation);
        const response = await AxiosClient.instance.post<AuthTokenDto | UnprocessableEntityDto>('auth/register',dto);
        if(response.status == 201){
            return right(response.data as AuthTokenDto);
        }else if (response.status == 400){
            const error = response as AxiosResponse<UnprocessableEntityDto>;
            return left(new UnprocessableEntityException(error.data.message));
        }else{
            return left(new ServerError());
        }
        
    }
    
    
}