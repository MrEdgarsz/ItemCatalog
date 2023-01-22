import type { ProductDto } from "../models/dtos/ProductDto";
import { Product } from "../models/Product";

export class ProductFactory {
    public static fromDto(dto: ProductDto): Product {
        const imageSrc = URL.createObjectURL(dto.image)
        return new Product(
            dto.id,
            dto.name,
            imageSrc,
            dto.category,
            dto.description,
        );
    }
}