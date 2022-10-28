import { NextPage } from "next";
import { VysledekDoc } from "../../models/models";
import vysledkyData from "../../../public/data/vysledky.json";
import Button from "../../components/ui-elements/button";

interface VysledkyPageProps {
  vysledky: VysledekDoc[];
}

const VysledkyPage: NextPage<VysledkyPageProps> = ({ vysledky }) => {
  const vysledkyList = vysledky.map((vysledek) => (
    <li key={vysledek.rok}>
      <Button size="big" link={`vysledky/${vysledek.rok}`}>{vysledek.rok}</Button>
    </li>
  ));
  return (
    <div className="vysledky__container">
      <h2>Výsledky</h2>
      <ul className="vysledky__list">{vysledkyList}</ul>
    </div>
  );
};

export default VysledkyPage;

export const getStaticProps = async () => {
  const vysledky: VysledekDoc[] = vysledkyData;

  return {
    props: {
      vysledky,
    },
    revalidate: 60 * 60 * 24,
  };
};
