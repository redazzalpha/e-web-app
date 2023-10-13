import {reactive} from 'vue';

// base colors
export const transparent = 'rgba(0, 0, 0, 0)';
export const white = '#ffffff';
export const whiteDark = '#f5f5f5';
export const black = '#000000';
export const blackLight = '#404040';
export const blackThin = 'rgba(0, 0, 0, .8)';
export const orange = '#ffb300';
export const orangeLight = '#ffc407';
export const red = '#ff0119';
export const redDark = '#b90011';
export const grey = '#817f7d72';
export const greyLight = '#b0bec5';
export const blue = '#448AFF';
export const blueLight ='#80D8FF';
export const blueDark = '#0c87e8';
export const yellow = '#ffff00';
export const yellowDark = '#dbdb02';

// colors
export const colors =  reactive({
    textBase: black,
    backgroundBase: white,
    textAppBar: black,
    textHero: black,
    textLinkHero: blue,
    labelButtonTag: white,
    labelButtonOrder: black,
    labelSearchBar: black,
    backgroundTitleHero: transparent  ,
    appBar: transparent,
    searchBar: white,
    footer: blackThin,
    buttonTag: red,
    buttonOrder: orange,
    buttonLink: orange,
    caption: white,
    score: orange,
});