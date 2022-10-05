import SayfyHero from "./sayfy-hero";
import NewsSection from "./news-section";
import InfoSection from "./info-section";
import { AktualitaDoc } from "../../../models/models";
import { Fragment } from "react";

interface HomePageProps {
  aktuality: AktualitaDoc[]
}

const HomePage: React.FC<HomePageProps> = ({aktuality}) => {
  return (
    <Fragment >
      <SayfyHero />
      <InfoSection />
      <NewsSection aktuality={aktuality} />
    </Fragment>
  );
};

export default HomePage;
