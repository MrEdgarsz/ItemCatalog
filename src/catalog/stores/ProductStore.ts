import { defineStore } from "pinia";
import { Product } from "../models/Product";

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
        },
        setIsFavourite(id: number, isFavourite: boolean) {
            const product = this.getProductById(id);


            if (product) {
                const changedProduct = new Product(product.id, product.name, product.imageSrc, product.category, product.description, isFavourite,);

                this.removeProductById(id);
                this.addProduct(changedProduct);
                this.products.sort((a) => {
                    if (a.isFavourite) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            }

        }


    }

});