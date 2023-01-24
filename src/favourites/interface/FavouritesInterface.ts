import type { Product } from "@/catalog/models/Product";
import type { AppException } from "@/common/models/AppException";
import type { Unit } from "@/common/utils/Unit";
import type { Either } from "fp-ts/lib/Either";

export interface FavouritesInterface {
    getAll(): Promise<Either<AppException, Product[]>>;
    setFavoturite(productId: number): Promise<Either<AppException, Unit>>;
    unSetFavourite(productId: number): Promise<Either<AppException, Unit>>;
}