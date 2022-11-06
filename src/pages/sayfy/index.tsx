import { NextPage } from "next";
import { Fragment } from "react";
import SimpleHead from "../../components/meta/simple-head";
import SayfyPage from "../../components/pages/sayfy/sayfy-page";

const Sayfy: NextPage = () => {
  return (
    <Fragment>
      <SimpleHead
        title="David 'Sayfy' Seifrt"
        description="stránka věnovaná pomátce Davida 'Sayfyho' Seifrta"
        url="/sayfy"
      />
      <SayfyPage />
    </Fragment>
  );
};

export default Sayfy;
