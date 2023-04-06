import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';

const colors = {
  primary: '#FEFEFE',
  background: '#0E0E0E',
  systemColor: {
    white: '#FFFFFF',
    black: '#000000',
  },
};

const fonts = {
  heading: `'Basic', sans-serif;`,
  body: `'Basic', sans-serif;`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
