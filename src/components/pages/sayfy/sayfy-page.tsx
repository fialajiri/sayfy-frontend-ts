import { Fragment } from "react";
import Image from "next/image";
import CarouselImage from "../../carousel/carousel-image";
import fotky from "../../../../public/data/images.json";
import asterisk from "../../../../public/icons/asterisk.svg";
import cross from "../../../../public/icons/cross.svg";

const SayfyPage: React.FC = () => {
  return (
    <Fragment>
      <section className="sayfy-intro">
        <div className="sayfy-intro__image-box">
          <Image
            src="/images/sayfy/sayfy-profile.png"
            alt="David Seifrt"
            width={200}
            height={200}
          />
        </div>
        <div className="sayfy-intro__text-container">
          <h1 className="heading-primary sayfy-intro__heading">
            David <span className="sayfy-intro__heading-nick">„Sayfy“</span>{" "}
            Seifrt
          </h1>
          <div className="sayfy-intro__born-text-container">
            <div className="sayfy-intro__born-container">
              <div className="sayfy-intro__asterisk-icon">
                <Image src={asterisk} width={25} height={25} alt="icon asterisk"/>
              </div>

              <h3 className="sayfy-intro__born-text">8.2.1991</h3>
            </div>

            <div className="sayfy-intro__dead-container">
              <div className="sayfy-intro__cross-icon">
                <Image src={cross} width={25} height={25} alt="icon cross" />
              </div>
              <h3 className="sayfy-intro__born-text">28.9.2008</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="sayfy-main">
        <div className="sayfy-main__blok-container">
          <p className="sayfy-main-text">
            David Seifrt, přezdívaný Sayfy, se narodil 8. 2. 1991 v Teplicích.
            Již od nejútlejšího dětství bylo jasné, že z něj roste sportovec.
            Nejdříve trávil všechen mimoškolní (někdy i školní) čas na ledě v
            dresech HC Stadion Teplice, později HC Draci Bílina. Ovšem po čase
            hokej nahradila cyklistika, do které se Sayfy opravdu zamiloval.
          </p>
          <div className="sayfy-main__image-box">
            <Image
              className="sayfy-main__image"
              src="/images/sayfy/sayfy-1.jpg"
              alt="David Seifrt fotka 1 "
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="sayfy-main__blok-container sayfy-main__blok-container-odd">
          <p className="sayfy-main-text">
            První úspěchy sklízel v týmu Top Ten Teplice, později přejmenovaný
            na Factor team. Po dvou letech vystoupil o stupínek výše do týmu TJ
            Stadion Louny – Zannela, kde se věnoval především silniční
            cyklistice a cyklocrossu. Svoji snahu dovršil tím, že byl přijat do
            profesionálního týmu Dukla Praha.
          </p>
          <div className="sayfy-main__image-box">
            <Image
              className="sayfy-main__image"
              src="/images/sayfy/sayfy-9.jpg"
              alt="David Seifrt fotka 2 "
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="sayfy-main__blok-container">
          <p className="sayfy-main-text">
            Snažil se vyhrávat a když to někdy nevyšlo, prohlásil své
            nejoblíbenější heslo: „ASPOŇ JSEM TO ZKUSIL“. Byl závodníkem, který
            i přes utržené šrámy neměl strach a na svého „šemíka“ nedal
            dopustit.
          </p>

          <div className="sayfy-main__image-box">
            <Image
              className="sayfy-main__image"
              src="/images/sayfy/sayfy-5.jpg"
              alt="David Seifrt fotka 3 "
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="sayfy-main__blok-container sayfy-main__blok-container-odd">
          <p className="sayfy-main-text">
            David zemřel při tragické nehodě v neděli 28.9. 2008 v Krupce u
            Teplic. Pro uctění jeho památky každý rok pořádáme cyklistický závod
            SAYFYHO Memorial. Jak jinak by všichni měli strávit tento den než na
            kolech…
          </p>

          <div className="sayfy-main__image-box">
            <Image
              className="sayfy-main__image"
              src="/images/sayfy/sayfy-7.jpg"
              alt="David Seifrt fotka 4 "
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <CarouselImage images={fotky} class="sayfy-main__carusel-image" />
    </Fragment>
  );
};

export default SayfyPage;
