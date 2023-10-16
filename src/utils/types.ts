export type Filter =
  | "all"
  | "news"
  | "populars"
  | "starters"
  | "main courses"
  | "deserts";

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
export interface SysColor {
  textBase: string;
  backgroundBase: string;
  textAppBar: string;
  textHero: string;
  textLinkHero: string;
  labelButtonTag: string;
  labelButtonOrder: string;
  labelSearchBar: string;
  backgroundTitleHero: string;
  appBar: string;
  searchBar: string;
  drawer: string;
  footer: string;
  buttonTag: string;
  buttonOrder: string;
  buttonLink: string;
  caption: string;
  score: string;
}
export interface State {
  products: Array<Product>;
  productsFound: Array<Product>;
  productFilter: Filter;
  slideshows: Array<string>;
  colors: SysColor;
  cart: Array<Product>;
}
