import { Home } from '@/templates';
import { Seo } from '@/components';

export default function HomePage() {
  return (
    <>
      <Seo />
      <main>
        <Home />
      </main>
    </>
  );
}
