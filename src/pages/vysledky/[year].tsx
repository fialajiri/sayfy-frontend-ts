import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { Fragment } from "react";
import vysledkyData from "../../../public/data/vysledky.json";
import SimpleHead from "../../components/meta/simple-head";
import { VysledekDoc } from "../../models/models";

interface VysledkyDetailProps {
  vysledek: VysledekDoc;
}

export interface IParams extends ParsedUrlQuery {
  year: string;
}

const VysledkyDetail: NextPage<VysledkyDetailProps> = ({ vysledek }) => {
  return (
    <Fragment>
      <SimpleHead
        title={`Výsledky ${vysledek.rok}`}
        description={`Výsledky cyklistichého závodu Sayfyho Memorial za rok ${vysledek.rok}`}
        url={`/vysledky/${vysledek.rok}`}
      />
      <div className="vysledek__container">
        <h3>
          {vysledek.rocnik}. ročník - {vysledek.rok}
        </h3>
        <div className="vysledek__iframe-container">
          <iframe className="vysledek__iframe" src={vysledek.url}></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default VysledkyDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const { year } = context.params as IParams;

  const vysledky: VysledekDoc[] = vysledkyData;
  const vysledek = vysledky.filter((vysledek) => vysledek.rok === year)[0];

  return {
    props: {
      vysledek,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const vysledky: VysledekDoc[] = vysledkyData;
  const pathWithParams = vysledky.map((vysledek) => ({
    params: { year: vysledek.rok },
  }));

  return {
    paths: pathWithParams,
    fallback: false,
  };
};
