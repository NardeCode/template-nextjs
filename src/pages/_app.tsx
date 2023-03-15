import type { AppProps } from 'next/app';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const themeChakra = extendTheme({ theme });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={themeChakra}>
        <Component {...pageProps} />
      </ChakraProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
