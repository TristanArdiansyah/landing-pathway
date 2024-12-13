import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Tunggu apa lagi? daftarkan diri kamu sekarang juga!."
      subtitle="Coba aplikasi kami."
      button={
        <Link href="/">
          <Button>Coba Pathway</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
