import type { AppException } from "@/common/models/AppException";
import type { Unit } from "@/common/utils/Unit";
import type { Either } from "fp-ts/lib/Either";
import type { ProductInputDto } from "../models/dtos/ProductInputDto";
import type { Product } from "../models/Product";

export interface ProductsInterface {
    getAll(): Promise<Either<AppException, Product[]>>;
    addProduct(productInputDto: ProductInputDto): Promise<Either<AppException, Product>>;
    patchProduct(id: number, productInputDto: ProductInputDto): Promise<Either<AppException, Product>>;
    deleteProduct(id: number): Promise<Either<AppException, Unit>>;

}