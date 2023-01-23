import type { AppException } from "@/common/model/AppException";
import type { Unit } from "@/common/utils/Unit";
import type { Either } from "fp-ts/lib/Either";
import type { AuthTokenDto } from "../models/dtos/AuthTokenDto";

export interface AuthInterface {
    login(email: string, password: string) : Promise<Either<AppException,AuthTokenDto>>;
    register(email: string, password: string, passwordConfirmation: string) :  Promise<Either<AppException,Unit>>;
}