import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link className='hover:text-primary-900' href="https://www.figma.com/proto/TrDc7eIFm6RdAJCCIhgI5P/PPD---GROUP-8?node-id=216-3546&t=VgU1yK6wdfjJhxQz-0&scaling=scale-down&content-scaling=fixed&page-id=88%3A2&starting-point-node-id=216%3A3546">
            Coba Aplikasinya ↗ 
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-32">
      <HeroOneButton
        title={
          <>
            {'Temukan peluang besar jadi\n'}
            <span className="text-primary-900">remote intern dengan Pathway!</span>
          </>
        }
        description="Platform job seeking dengan AI CV Maker dan Easy Apply untuk memastikan pendaftaran kamu selalu On Point!"
        button={
          <Link href="https://www.figma.com/proto/TrDc7eIFm6RdAJCCIhgI5P/PPD---GROUP-8?node-id=216-3546&t=VgU1yK6wdfjJhxQz-0&scaling=scale-down&content-scaling=fixed&page-id=88%3A2&starting-point-node-id=216%3A3546">
            <Button xl>pathway</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
