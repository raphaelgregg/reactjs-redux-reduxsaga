export interface IProduct {
  id: string;
  title: string;
  price: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}