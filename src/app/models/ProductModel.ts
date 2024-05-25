export class ProductModel {
  public constructor(
    public name: string,
    public price: number,
    public sold: boolean = false
  ) {}
}
