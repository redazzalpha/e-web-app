export type Filter =
  | "all"
  | "news"
  | "populars"
  | "starters"
  | "main courses"
  | "deserts";

export interface ProductGroup extends Product {
  quantity: number;
  totalPrice: string;
}
export interface Product {
  id: number;
  category: string;
  label: string;
  description: string;
  img: string;
  price: number;
  score: number;
  isNew: boolean;
  isPopular: boolean;
  keyWords: Array<string>;
}
export interface DrawerListItem {
  label: string;
  icon: string;
  href: string;
  children: Array<DrawerListItem>;
}
export interface State {
  products: Array<Product>;
  productCurrent: Product | {};
  productsFound: Array<Product>;
  productFilter: Filter;
  slideshows: Array<string>;
  cart: Array<ProductGroup>;
  hintSearchBar: string;
  snackbar: boolean;
  timeout: number;
  modelDialog: boolean;
  modelSlider: number;
  drawer: boolean;
  switcher: boolean;
  navigationSide: boolean;
}
