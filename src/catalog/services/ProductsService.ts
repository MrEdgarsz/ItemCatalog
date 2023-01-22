import { ServerError, UnauthorizedException, type AppException } from "@/common/models/AppException";
import { AxiosClient } from "@/common/utils/http_client/AxiosClient";
import { Unit } from "@/common/utils/Unit";
import { left, right, type Either } from "fp-ts/lib/Either";
import { ProductFactory } from "../factories/ProductFactory";
import type { ProductsInterface } from "../interfaces/ProductInterface";
import type { ProductDto } from "../models/dtos/ProductDto";
import type { ProductInputDto } from "../models/dtos/ProductInputDto";
import type { Product } from "../models/Product";

export class ProductsService implements ProductsInterface {
    async getAll(): Promise<Either<AppException, Product[]>> {
        const response = await AxiosClient.instance.get<Array<ProductDto>>("products");

        if (response.status === 200) {
            const allProducts: Product[] = [];
            response.data.map((value) => {
                allProducts.push(ProductFactory.fromDto(value))
            });
            return right(allProducts);
        } else {
            return left(new ServerError());
        }
    }
    async addProduct(productInputDto: ProductInputDto): Promise<Either<AppException, Product>> {
        const response = await AxiosClient.instance.post<ProductDto>("products", productInputDto);
        if (response.status === 200) {
            const product: Product = ProductFactory.fromDto(response.data);
            return right(product);

        } else if (response.status === 401) {
            return left(new UnauthorizedException());
        } else {
            return left(new ServerError());
        }

    }
    async patchProduct(id: number, productInputDto: ProductInputDto): Promise<Either<AppException, Product>> {
        const response = await AxiosClient.instance.patch("products/" + id, productInputDto,);

        if (response.status === 200) {
            const product: Product = ProductFactory.fromDto(response.data);
            return right(product);
        } else if (response.status === 401) {
            return left(new UnauthorizedException());
        } else {
            return left(new ServerError());
        }

    }
    async deleteProduct(id: number): Promise<Either<AppException, Unit>> {
        const response = await AxiosClient.instance.delete("products/" + id,)
        if (response.status === 200) {
            return right(new Unit());
        } else if (response.status === 401) {
            return left(new UnauthorizedException());
        } else {
            return left(new ServerError());
        }

    }



}