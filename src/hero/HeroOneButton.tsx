import { Button } from '@/button/Button';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const heroOneClass = classNames(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    'justify-between',
  );

  const router = useRouter();

  return (
    <header className={heroOneClass}>
      <div className="w-1/2 h-1/2 p-6 sm:w-1/2">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
          {props.title}
        </h1>
        <div className="mb-16 mt-4 text-2xl">{props.description}</div>
        <Link href="https://www.figma.com/proto/TrDc7eIFm6RdAJCCIhgI5P/PPD---GROUP-8?node-id=216-3546&t=VgU1yK6wdfjJhxQz-0&scaling=scale-down&content-scaling=fixed&page-id=88%3A2&starting-point-node-id=216%3A3546">
          <Button>Coba Pathway</Button>
        </Link>
      </div>

      <div className="w-1/2 h-1/2 p-6 sm:w-1/2">
        <img src={`${router.basePath}${"/assets/images/hero-image.png"}`} alt={"hero image"} />
      </div>
    </header>
  );
};

export { HeroOneButton };
