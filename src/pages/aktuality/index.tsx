import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import AktualitaCard from "../../components/aktuality/aktualita-card";
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
    <li>
      <Link href={`aktuality/${aktualita.aktualitaUrl}`}>
        <a aria-label="Login">
          <AktualitaCard detail={true} aktualita={aktualita} />
        </a>
      </Link>
    </li>
  ));

  return (
    <div className="aktuality__container">
      <h2>Aktuality</h2>
      {isAdmin && <Button link="aktuality/new">Nová Aktualita</Button>}

      <ul className="aktuality__list">{aktualityElement}</ul>
    </div>
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
