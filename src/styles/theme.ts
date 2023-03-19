import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#FEFEFE',
  background: '#0E0E0E',
  systemColor: {
    white: '#FFFFFF',
    black: '#000000',
  },
};

const theme = extendTheme({ colors });

export default theme;
