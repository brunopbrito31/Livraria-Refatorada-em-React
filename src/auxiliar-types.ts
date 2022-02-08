
export interface ProductModel{
    id?: number;
    title?: string;
    description?: string;
    barcode?: string;
    imgUrl?: string;
    price?:number;
    rating?:number;
    discount?:number;
    loading?:boolean;
}

export interface UserModel{
    login?:string;
    password?: string;
}

export interface CategoryModel{
    id?: number;
    name?: string;
    products: ProductModel[];
}
