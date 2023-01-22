import { defineStore } from "pinia";
import type { Product } from "../models/Product";

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as Product[],
    }),
    getters: {
        productCount(): number {
            return this.products.length;
        },

    },
    actions: {
        setProducts(products: Product[]) {
            this.products = products;
        },
        addProduct(product: Product) {
            this.products.push(product);
        },
        getProductById(id: number): Product | undefined {
            return this.products.find(x => x.id == id);
        },
        removeProductById(id: number) {
            const product = this.getProductById(id);
            if (product) {
                const index = this.products.indexOf(product, 0);
                if (index > -1) {
                    this.products.splice(index, 1);
                }

            }
        }

    }

});