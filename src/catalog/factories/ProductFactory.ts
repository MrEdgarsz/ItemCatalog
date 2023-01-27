import type { ProductDto } from "../models/dtos/ProductDto";
import { Product } from "../models/Product";

export class ProductFactory {
    public static fromDto(dto: ProductDto): Product {
        return new Product(
            dto.id,
            dto.name,
            dto.image_src,
            dto.category,
            dto.description,
            dto.isFavourite
        );
    }
}