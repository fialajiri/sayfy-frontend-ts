import axios from "axios";
import { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import CreateNewAktualita from "../../../components/pages/aktuality/create-new-aktualita";
import LoadingSpinner from "../../../components/ui-elements/loading-spinner";
import { useAuth } from "../../../context/auth-context";
import { AktualitaDoc } from "../../../models/models";

const EditAktualitaPage: NextPage = () => {
  const [aktualita, setAktualita] = useState<AktualitaDoc | undefined>(undefined);
  const router = useRouter();
  const { isAdmin } = useAuth();

  useEffect(() => {
    const getAktualita = async (id: string) => {
      const { data: aktualita }: { data: AktualitaDoc } = await axios.get(
        `${process.env.BACKEND_URL}/api/aktualita/${id}`
      );

      setAktualita(aktualita);
    };

    getAktualita(router.query.aktualitaId as string);
  }, []);

  if (!isAdmin) {
    typeof window !== "undefined" && router.push("/login");
    return <LoadingSpinner asOverlay />;
  } else {
    return (
      <Fragment>
        {!aktualita && <LoadingSpinner />}
        {aktualita && <CreateNewAktualita aktualita={aktualita} />}
      </Fragment>
    );
  }
};

export default EditAktualitaPage;
