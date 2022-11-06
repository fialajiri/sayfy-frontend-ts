import { AktualitaDoc } from "../../models/models";
import Head from "next/head";

interface AktualitaHeadProps {
  aktualita: AktualitaDoc;
}

const AktualitaHead: React.FC<AktualitaHeadProps> = ({ aktualita }) => {
  return (
    <Head>
      <title>{aktualita.title}</title>
      <meta name="description" content={aktualita.title} />
      <meta name="keywords" content="aktuality, Sayfyho Memorial" />
      <meta
        property="og:url"
        content={`${process.env.HOST_URL}/aktuality/${aktualita.aktualitaUrl}`}
      />
      <meta property="og:title" content={aktualita.title} />
      <meta property="og:description" content="aktuality, Sayfyho Memorial" />
    </Head>
  );
};

export default AktualitaHead;
