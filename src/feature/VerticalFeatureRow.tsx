import className from 'classnames';
import { useRouter } from 'next/router';
import Carousel from './Carousel';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  images: string[];
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-1/2 p-6 sm:w-1/3 h-96 flex items-center justify-center object-contain"
        style={{
          backgroundImage: `url(${router.basePath}/blob-2.svg`,
          backgroundRepeat: 'no-repeat',
          objectFit: 'contain'
        }}>
          <Carousel images={props.images} interval={5000} />

      </div>
    </div>
  );
};

export { VerticalFeatureRow };
