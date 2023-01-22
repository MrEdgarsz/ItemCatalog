import type { ProductInputDto } from "../models/dtos/ProductInputDto";


export class ProductDtoFactory {
    public static toFormData(dto: ProductInputDto): FormData {
        const formData = new FormData();
        const dtoJson = JSON.stringify(dto);
        formData.append("product", dtoJson);
        return formData;

    }
}