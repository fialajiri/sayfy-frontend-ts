import type { GetStaticProps, NextPage } from "next";
import HomePage from "../components/pages/homepage/homepage";
import SimpleHead from "../components/meta/simple-head";
import { AktualitaDoc } from "../models/models";
import { getAktuality } from "../utils/aktualita/get-aktualita";
import { Fragment } from "react";

interface HomeProps {
  aktuality: AktualitaDoc[];
}

const Home: NextPage<HomeProps> = ({ aktuality }) => {
  return (
    <Fragment>
      <SimpleHead
        title="Sayfyho Memorial"
        description="Hlavní stránka cyklistického závodu Sayfyho Memorial"
        url="/"
      />
      <HomePage aktuality={aktuality} />
    </Fragment>
  );
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
