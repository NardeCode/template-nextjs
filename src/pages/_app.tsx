import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
