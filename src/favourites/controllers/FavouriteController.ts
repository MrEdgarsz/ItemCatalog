import type { Product } from "@/catalog/models/Product";
import { useProductStore } from "@/catalog/stores/ProductStore";
import type { Unit } from "@/common/utils/Unit";
import { FavouritesService } from "../services/FavouritesSerivce";
import { useFavouriteStore } from "../stores/FavouriteStore";

export class FavouriteController {
    constructor(private favourtiteService: FavouritesService = new FavouritesService()) { }


    async getAll(): Promise<Product[]> {
        const favouriteStore = useFavouriteStore();
        const response = await this.favourtiteService.getAll();
        if (response._tag == "Right") {
            favouriteStore.setFavourites(response.right);
            return response.right;
        } else {
            favouriteStore.setFavourites([]);
            return [];
        }
    }

    async setFavourites(id: number): Promise<Unit> {
        const favouriteStore = useFavouriteStore();
        const productStore = useProductStore();
        const favourite = favouriteStore.getFavouriteById(id);
        if (favourite !== undefined) {
            const response = await this.favourtiteService.unSetFavourite(id);
            if (response._tag == "Right") {
                favouriteStore.removeFavouriteById(id);
                productStore.setIsFavourite(id, false);
                return favouriteStore.favourites;
            } else {
                return favouriteStore.favourites;
            }
        } else {
            const response = await this.favourtiteService.setFavoturite(id);
            if (response._tag == "Right") {
                const product = productStore.getProductById(id);
                if (product) {
                    favouriteStore.addFavourites(product);
                    productStore.setIsFavourite(id, true);
                }
                return favouriteStore.favourites;
            } else {
                return favouriteStore.favourites;

            }
        }
    }


}

