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
}
export interface DrawerListItem {
  label: string;
  icon: string;
  href: string;
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
