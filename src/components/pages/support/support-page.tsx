import Image from "next/image";
import Logo1 from "../../../../public/logos/support/1-transparent.png";
import Logo2 from "../../../../public/logos/support/2-transparent.png";
import Logo3 from "../../../../public/logos/support/3-transparent.png";
import Logo4 from "../../../../public/logos/support/4-transparent.png";
import Logo5 from "../../../../public/logos/support/5-transparent.png";
import Logo6 from "../../../../public/logos/support/6-transparent.png";
import Logo7 from "../../../../public/logos/support/7-transparent.png";
import Logo8 from "../../../../public/logos/support/8-transparent.png";
import Logo9 from "../../../../public/logos/support/9-transparent.png";

const logos = [
  { src: Logo1, alt: 'image_1' },
  { src: Logo2, alt: 'image_2' },
  { src: Logo3, alt: 'image_3' },
  { src: Logo4, alt: 'image_4' },
  { src: Logo5, alt: 'image_5' },
  { src: Logo6, alt: 'image_6' },
  { src: Logo7, alt: 'image_7' },
  { src: Logo8, alt: 'image_8' },
  { src: Logo9, alt: 'image_9' },
];

const SupportPage: React.FC = () => {
  return (
    <div className="support-page__container">
      <h2 className="heading-secondary support-page__heading">Podporují nás</h2>
      <div className="support-page__image-container">
        {logos.map((logo, index) => (
          <div key={index} className="support-page__image-item">
            <Image
              className="support-page__logo"
              src={logo.src}
              width={logo.src.width}
              height={logo.src.height}
              alt={logo.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportPage;

