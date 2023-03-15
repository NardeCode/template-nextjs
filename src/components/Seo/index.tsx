import Head from 'next/head';

interface SeoProps {
  description?: string;
  title?: string;
}

export function Seo({ title, description }: SeoProps) {
  const metaDescription = description || 'Welcome to my Project Next JS';
  const defaultTitle = title || 'Next JS Project';
  const imageUrl = '';
  const urlProject = '';

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <meta name="keywords" content="nextjs, react, typescript, chakra, styled-components, jest" />
      <meta name="robots" content="index, follow" />

      <title>{defaultTitle}</title>
      <meta name="title" content={defaultTitle} />
      <meta property="og:title" content={defaultTitle} />

      {/* Link da imagem/logo do Projeto */}
      <meta property="og:image" content={imageUrl} />
      {/* URL do Projeto */}
      <meta property="og:url" content={urlProject} />

      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaultTitle} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={defaultTitle} />
      <meta property="twitter:description" content={metaDescription} />
      {/* URL do Projeto */}
      <meta property="twitter:url" content={urlProject} />
      {/* Link da imagem/logo do Projeto */}
      <meta property="twitter:image" content={imageUrl} />
    </Head>
  );
}
