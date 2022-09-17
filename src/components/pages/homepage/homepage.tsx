import SayfyHero from "./sayfy-hero";
import NewsSection from "./news-section";
import InfoSection from "./info-section";
import { AktualitaDoc } from "../../../interfaces/models";

interface HomePageProps {
  aktuality: AktualitaDoc[]
}

const HomePage: React.FC<HomePageProps> = ({aktuality}) => {
  return (
    <div >
      <SayfyHero />
      <InfoSection />
      <NewsSection aktuality={aktuality} />
    </div>
  );
};

export default HomePage;
