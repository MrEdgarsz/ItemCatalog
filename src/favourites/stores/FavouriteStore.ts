import type { Product } from "@/catalog/models/Product";
import { defineStore } from "pinia";


export const useFavouriteStore = defineStore('favourites', {
    state: () => ({
        favourites: [] as Product[],
    }),
    getters: {
        favouritesCount(): number {
            return this.favourites.length;
        },

    },
    actions: {
        setFavourites(products: Product[]) {
            this.favourites = products;
        },
        addFavourites(product: Product) {
            this.favourites.push(product);
        },
        getFavouriteById(id: number): Product | undefined {
            return this.favourites.find(x => x.id == id);
        },
        removeFavouriteById(id: number) {
            const product = this.getFavouriteById(id);
            if (product) {
                const index = this.favourites.indexOf(product, 0);
                if (index > -1) {
                    this.favourites.splice(index, 1);
                }

            }
        }

    }

});