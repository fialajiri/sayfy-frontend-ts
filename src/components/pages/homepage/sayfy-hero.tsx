import Image from "next/image";
import BikeLogo from "../../../../public/logos/bike-logo.svg";

const SayfyHero: React.FC = () => {
  return (
    <section className="hero-section__container">
      <div className="hero-section__wrapper">
        <div className="hero-section__heading-wrapper">
          <h1 className="heading-primary hero-section__heading"> Sayfyho Memorial</h1>
          <h1 className="heading-primary here-section__heading-two">Cyklistický závod</h1>
        </div>
        {/* <div className="hero-section__image-box--bike">
          <Image src={BikeLogo} alt="Bike Image" layout="fill" objectFit="contain" />
        </div> */}
      </div>
      <div className="hero-section__image-box--sayfy">
        <Image
          className="hero-section__image"
          src="/logos/sayfy_02222.webp"
          alt="David Sayfy Seifrt"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default SayfyHero;
