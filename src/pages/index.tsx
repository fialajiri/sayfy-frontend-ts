import type { GetStaticProps, NextPage } from "next";
import HomePage from "../components/pages/homepage/homepage";
import { AktualitaDoc } from "../models/models";
import { getAktuality } from "../utils/aktualita/get-aktualita";

interface HomeProps {
  aktuality: AktualitaDoc[];
}

const Home: NextPage<HomeProps> = ({ aktuality }) => {
  return <HomePage aktuality={aktuality} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const aktuality = await getAktuality();

  return {
    props: {
      aktuality,
    },
    revalidate: 60,
  };
};

export default Home;


