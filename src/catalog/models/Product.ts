export class Product {
    public constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly imageSrc: string,
        public readonly category: string,
        public readonly description: string,
    ) { }
}