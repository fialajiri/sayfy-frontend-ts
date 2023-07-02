import SayfyHero from "./sayfy-hero";
import NewsSection from "./news-section";
import InfoSection from "./info-section";
import { AktualitaDoc } from "../../../models/models";
import { Fragment } from "react";
import RegistrButton from "../../ui-elements/register-button";


interface HomePageProps {
  aktuality: AktualitaDoc[]
}

const HomePage: React.FC<HomePageProps> = ({aktuality}) => {
  return (
    <Fragment >
      <RegistrButton />
      <SayfyHero />
      <InfoSection />
      <NewsSection aktuality={aktuality} />
    </Fragment>
  );
};

export default HomePage;
