import Head from "next/head";

interface SimpleHeadProps {
  title: string;
  description: string;
  url: string;
}

const SimpleHead: React.FC<SimpleHeadProps> = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={`${process.env.HOST_URL}/${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default SimpleHead;
