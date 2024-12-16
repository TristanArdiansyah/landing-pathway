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
        <Link href="https://www.figma.com/proto/TrDc7eIFm6RdAJCCIhgI5P/PPD---GROUP-8?node-id=216-3546&t=VgU1yK6wdfjJhxQz-0&scaling=scale-down&content-scaling=fixed&page-id=88%3A2&starting-point-node-id=216%3A3546">
          <Button>Coba Pathway</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
