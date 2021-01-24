import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#00131a',
  green: '#008000',
  pink: '#cc0052',
  gray: '#ebebe0',
};

export const SIZES = {
  //Global sizes
  base: 9,
  font: 15,
  radius: 12,
  padding: 20,

  //font sizes

  h1: 30,
  h2: 25,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 23,
  body3: 18,
  body4: 12,

  //app dimension
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body4, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
