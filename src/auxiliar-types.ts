
export interface ProductModel{
    id?: number;
    title?: string;
    description?: string;
    barcode?: string;
    imgUrl?: string;
    price?:number;
    rating?:number;
    discount?:number;
}

export interface UserModel{
    login?:string;
    password?: string;
}

