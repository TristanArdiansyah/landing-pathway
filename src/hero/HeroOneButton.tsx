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
      <div className="w-1/2 h-1/3 p-6 sm:w-2/3">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
          {props.title}
        </h1>
        <div className="mb-16 mt-4 text-2xl">{props.description}</div>
        <Link href="/">
          <Button>Coba Pathway</Button>
        </Link>
      </div>

      <div className="w-1/3 h-1/3 p-6 sm:w-1/3">
        <img src={`${router.basePath}${"/assets/images/hero_image.png"}`} alt={"hero image"} />
      </div>
    </header>
  );
};

export { HeroOneButton };
