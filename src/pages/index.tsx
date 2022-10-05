import type { NextPage } from "next";
import HomePage from "../components/pages/homepage/homepage";
import { AktualitaDoc } from "../models/models";
import aktualityData from "../../public/data/aktuality.json";

interface HomeProps {
  aktuality: AktualitaDoc[];
}

const Home: NextPage<HomeProps> = ({ aktuality }) => {
  return <HomePage aktuality={aktuality} />;
};

export const getStaticProps = async () => {
  const aktuality: AktualitaDoc[] = aktualityData;

  return {
    props: {
      aktuality,
    },
    revalidate: 60,
  };
};

export default Home;
