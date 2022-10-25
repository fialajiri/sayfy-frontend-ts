import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import AktualitaDetail from "../../components/aktuality/aktualita-detail";
import { AktualitaDoc, IParams } from "../../models/models";
import { getAktualita, getAktuality } from "../../utils/aktualita/get-aktualita";

interface AktualitaDetailPageProps {
  aktualita: AktualitaDoc;
}

const AktualitaDetailPage: NextPage<AktualitaDetailPageProps> = ({ aktualita }) => {
  return <AktualitaDetail aktualita={aktualita} />;
};

export default AktualitaDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { title } = context.params as IParams;

  const aktualita = await getAktualita(title);

  return {
    props: {
      aktualita,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const aktuality = await getAktuality();
  const pathWithParams = aktuality.map((aktualita) => ({
    params: { title: aktualita.aktualitaUrl },
  }));

  return {
    paths: pathWithParams,
    fallback: false,
  };
};
