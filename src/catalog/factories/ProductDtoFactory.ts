import type { ProductInputDto } from "../models/dtos/ProductInputDto";


export class ProductDtoFactory {
    public static toFormData(dto: ProductInputDto): FormData {
        const formData = new FormData();
        formData.append("name", dto.name);
        formData.append("image", dto.image);
        formData.append("category", dto.category);
        formData.append("description", dto.description);
        return formData;

    }
}