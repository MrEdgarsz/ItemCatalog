import { ProductFactory } from "@/catalog/factories/ProductFactory";
import type { ProductDto } from "@/catalog/models/dtos/ProductDto";
import type { Product } from "@/catalog/models/Product";
import { ServerError, type AppException } from "@/common/models/AppException";
import { AxiosClient } from "@/common/utils/http_client/AxiosClient";
import { Unit } from "@/common/utils/Unit";
import { left, right, type Either } from "fp-ts/lib/Either";

import type { FavouritesInterface } from "../interface/FavouritesInterface";

export class FavouritesService implements FavouritesInterface {
    async getAll(): Promise<Either<AppException, Product[]>> {
        const response = await AxiosClient.instance.get<Array<ProductDto>>("products/favourites");

        if (response.status === 200) {
            const allFavourites: Product[] = [];
            response.data.map((value) => {
                allFavourites.push(ProductFactory.fromDto(value))
            });
            return right(allFavourites);
        } else {
            return left(new ServerError());
        }
    }
    async setFavoturite(productId: number): Promise<Either<AppException, Unit>> {
        const response = await AxiosClient.instance.post("products/favourites/" + productId);
        if (response.status === 200) {
            return right(new Unit());
        } else {
            return left(new ServerError());
        }
    }
    async unSetFavourite(productId: number): Promise<Either<AppException, Unit>> {
        const response = await AxiosClient.instance.delete("/products/favourites/" + productId);
        if (response.status === 200) {
            return right(new Unit());
        } else {
            return left(new ServerError());
        }
    }

}