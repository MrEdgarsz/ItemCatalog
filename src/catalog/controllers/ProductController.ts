import { useAuthStore } from "@/auth/stores/AuthStore";
import type { ProductInputDto } from "../models/dtos/ProductInputDto";
import type { ProductFilterDto } from "../models/dtos/ProductFilterDto";
import type { Product } from "../models/Product";
import { ProductsService } from "../services/ProductsService";
import { useProductStore } from "../stores/ProductStore";

export class ProductController {
    constructor(private productsService: ProductsService = new ProductsService()) { }

    async getAll(productFilterDto?: ProductFilterDto): Promise<Product[]> {
        const productStore = useProductStore();
        const authStore = useAuthStore();
        let response;
        if (authStore.isAuthenticated) {
            response = await this.productsService.getProductFavourites(productFilterDto);
        } else {
            response = await this.productsService.getAll(productFilterDto);
        }
        if (response._tag == "Right") {
            productStore.setProducts(response.right);
            return response.right;
        } else {
            productStore.setProducts([]);
            return [];
        }
    }
    async add(productInputDto: ProductInputDto): Promise<Product[]> {
        const productStore = useProductStore();
        const response = await this.productsService.addProduct(productInputDto);
        if (response._tag == "Right") {
            productStore.addProduct(response.right);
            return productStore.products;
        } else {
            return productStore.products;
        }
    }
    async delete(id: number): Promise<Product[]> {
        const productStore = useProductStore();
        const response = await this.productsService.deleteProduct(id);
        if (response._tag == "Right") {
            const product = productStore.getProductById(id);
            if (product) {
                const index = productStore.products.indexOf(product, 0);
                if (index > -1) {
                    productStore.products.splice(index, 1);
                }
            }
            return productStore.products;
        } else {
            return productStore.products;
        }
    }
    async patch(id: number, productInputDto: ProductInputDto): Promise<Product[]> {
        const productStore = useProductStore();
        const response = await this.productsService.patchProduct(id, productInputDto);
        if (response._tag == "Right") {
            productStore.removeProductById(id);
            productStore.addProduct(response.right);
            return productStore.products;
        } else {
            return productStore.products;
        }
    }
}