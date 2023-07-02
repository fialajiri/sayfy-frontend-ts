import { GetStaticProps, NextPage } from "next";
import Button from "../../components/ui-elements/button";
import { useAuth } from "../../context/auth-context";
import SimpleHead from "../../components/meta/simple-head";
import { PropoziceDoc } from "../../models/models";
import { getPropozice } from "../../utils/propozice/get-propozice";
import { Fragment } from "react";
import RegisterButton from "../../components/ui-elements/register-button";


interface PropozicePageProps {
  propozice: PropoziceDoc;
}

const PropozicePage: NextPage<PropozicePageProps> = ({ propozice }) => {
  const { text, title } = propozice;
  const { isAdmin } = useAuth();
  return (
    <Fragment>
      <SimpleHead
        title="Propozice"
        description="Propozice, cena, kategorie k cyklistichému závodu Sayfyho Memorial"
        url="/propozice"
      />
      <div className="propozice__container page-container">
        <RegisterButton />
        {isAdmin && <Button link="propozice/edit">Editovat</Button>}
        <h2>{title}</h2>
        <div className="propozice__html-content" dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </Fragment>
  );
};

export default PropozicePage;

export const getStaticProps: GetStaticProps = async () => {
  const propozice = await getPropozice();

  return {
    props: {
      propozice,
    },
    revalidate: 30,
  };
};
