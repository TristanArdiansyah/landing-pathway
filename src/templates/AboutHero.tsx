import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const AboutHero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">App</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-32">
      <HeroOneButton
        title={
          <>
            {'Temukan peluang besar untuk menjadi\n'}
            <span className="text-primary-500">Our vision</span>
          </>
        }
        description="Platform job seeking dengan AI CV Maker dan Easy Apply untuk memastikan pendaftaran kamu selalu On Point!"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { AboutHero };