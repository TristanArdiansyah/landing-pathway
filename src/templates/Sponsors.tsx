import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Meet the Founders"
    description="The one who initiated this product."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <Image
                src="/assets/images/sentry-dark.png"
                alt="Sentry"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
              target="_blank"
            >
              <Image
                src="/assets/images/better-stack-dark.png"
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
              target="_blank"
            >
              <Image
                src="/assets/images/clerk.png"
                alt="Clerk – Authentication & User Management for Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://nextlessjs.com">
              <Image
                src="/assets/images/nextlessjs.png"
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
