import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import AktualitaCard from "../../components/aktuality/aktualita-card";
import SimpleHead from "../../components/meta/simple-head";
import Button from "../../components/ui-elements/button";
import { useAuth } from "../../context/auth-context";
import { AktualitaDoc } from "../../models/models";
import { getAktuality } from "../../utils/aktualita/get-aktualita";

interface AktualityProps {
  aktuality: AktualitaDoc[];
}

const Aktuality: NextPage<AktualityProps> = ({ aktuality }) => {
  const { isAdmin } = useAuth();

  const aktualityElement = aktuality.map((aktualita) => (
    <li key={aktualita.aktualitaUrl}>
      <Link href={`aktuality/${aktualita.aktualitaUrl}`}>
        <a aria-label="Login">
          <AktualitaCard detail={true} aktualita={aktualita} />
        </a>
      </Link>
    </li>
  ));

  return (
    <Fragment>
      <SimpleHead
        title="Aktuality"
        description="aktuality a novinky k cyklistickému závodu Sayfyho Memorial"
        url="/aktuality"
      />
      <div className="aktuality__container">
        <h2>Aktuality</h2>
        {isAdmin && <Button link="aktuality/new">Nová Aktualita</Button>}

        <ul className="aktuality__list">{aktualityElement}</ul>
      </div>
    </Fragment>
  );
};

export default Aktuality;

export const getStaticProps: GetStaticProps = async () => {
  const aktuality = await getAktuality();

  return {
    props: {
      aktuality,
    },
    revalidate: 60,
  };
};
