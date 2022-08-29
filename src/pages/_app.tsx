import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/globalStyle';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
