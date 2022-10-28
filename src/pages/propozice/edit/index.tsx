import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import EditPropozice from "../../../components/pages/propozice/edit-propozice";
import LoadingSpinner from "../../../components/ui-elements/loading-spinner";
import { useAuth } from "../../../context/auth-context";
import { PropoziceDoc } from "../../../models/models";

const EditPropozicePage: NextPage = () => {
  const [propozice, setPropozice] = useState<PropoziceDoc | null>(null);
  const documentId = "635c21aea369bc4f74025d04";
  const { isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const getPropozice = async () => {
      const { data: propozice }: { data: PropoziceDoc } = await axios.get(
        `${process.env.BACKEND_URL}/api/static-page/${documentId}`
      );
      setPropozice(propozice);
    };

    getPropozice();
  }, []);

  if (!isAdmin) {
    typeof window !== "undefined" && router.push("/login");
    return <LoadingSpinner asOverlay />;
  } else {
    return (
      <Fragment>
        {!propozice && <LoadingSpinner />}
        <div className="edit-propozice__container">
          <h2>Editovat Propozici</h2>
          {propozice && <EditPropozice propozice={propozice} />}
        </div>
      </Fragment>
    );
  }
};

export default EditPropozicePage;
