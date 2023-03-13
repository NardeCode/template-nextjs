import { Home } from '@/templates';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Template Next</title>
        <meta name="description" content="Template" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
