import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Kenapa Pathway?"
    description="Pathway akan memastikan kamu memiliki peluang terbaik untuk mendapatkan kesempatan menjadi remote intern dengan fitur fitur seperti"
  >
    <VerticalFeatureRow
      title="AI CV Maker"
      description="Dengan AI CV Maker, kamu akan dibantu untuk membuat CV yang menarik dan sesuai dengan kebutuhan perusahan. "
      images={["/assets/images/cv-maker.png","/assets/images/cv-maker-1.png"]}
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Easy Apply"
      description="Dengan satu klik easy apply, kamu dapat mendaftarkan diri dengan mudah. Semua informasi pribadi kamu sudah kami urus dan kamu bisa mendaftar ke banyak posisi dengan mudah"
      images={
        [
          "/assets/images/easy-apply.png",
          "/assets/images/easy-apply-1.png",
          "/assets/images/easy-apply-3.png",
          "/assets/images/easy-apply-4.png",
          "/assets/images/easy-apply-2.png",
        ]}
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
