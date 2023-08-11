import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { AktualitaDoc } from "../../models/models";
import Modal from "../ui-elements/modal";
import Button from "../ui-elements/button";
import { HttpError } from "../../models/error-model";
import { deleteAktualita } from "../../utils/aktualita/delete-aktualita";
import LoadingSpinner from "../ui-elements/loading-spinner";
import ErrorModal from "../ui-elements/error-modal";

interface AktualitaCardProps {
  aktualita: AktualitaDoc;
  detail?: boolean;
  removeAktualita?: (id: string) => void;
}

const AktualitaCard: React.FC<AktualitaCardProps> = ({ aktualita, detail, removeAktualita }) => {
  const { isAdmin } = useAuth();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<HttpError | null>(null);

  const deleteAktualitaHandler = async () => {
    setIsLoading(true);
    try {
      await deleteAktualita(aktualita.id);
      removeAktualita && removeAktualita(aktualita.id);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);

  const modalContent = (
    <div className="aktualita-card-detail__modal-buttons">
      <Button onClick={cancelDeleteHandler}>Zrušit</Button>
      <Button onClick={deleteAktualitaHandler}>Smazat</Button>
    </div>
  );

  const clearError = () => setError(null);

  if (detail) {
    return (
      <Fragment>
        {isLoading && <LoadingSpinner asOverlay />}
        <ErrorModal error={error} onClear={clearError} />
        <Modal
          isShow={showConfirmModal}
          header="Opravdu chcete smazat aktualitu?"
          hide={cancelDeleteHandler}
          modalContent={modalContent}
        />

        <div className="aktualita-card-detail__container">
          <div className="aktualita-card-detail__text-container">
            <Link href={`aktuality/${aktualita.aktualitaUrl}`}>
              <h3 className="aktualita-card-detail__heading">{aktualita.title}</h3>
            </Link>
            <div className="aktualita-card-detail__datum">
              {new Date(aktualita.createdAt).toLocaleDateString("cs-CZ")}
            </div>

            {isAdmin && (
              <div className="aktualita-card-detail__buttons">
                <Button size="small" link={`aktuality/edit/${aktualita.id}`}>
                  Edit
                </Button>
                <Button size="small" onClick={showDeleteWarningHandler}>
                  Smazat
                </Button>
              </div>
            )}
          </div>
          <figure className="aktualita-card-detail__image">
            <Image
              src={aktualita.mainPhoto}
              alt={aktualita.title}
              width={600}
              height={400}
              objectFit="contain"
            />
          </figure>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="aktualita-card__container">
      <div className="aktualita-card__text-container">
        <Link href={`aktuality/${aktualita.aktualitaUrl}`}>
          <a>
            <h3 className="heading-tertiary aktualita-card__heading">{aktualita.title}</h3>
          </a>
        </Link>
        <div className="aktualita-card__datum">
          {new Date(aktualita.createdAt).toLocaleDateString("cs-CZ")}
        </div>
      </div>

      <figure className="aktualita-card__image">
        <Image src={aktualita.mainPhoto} alt={aktualita.title} layout="fill" objectFit="contain" />
      </figure>
    </div>
  );
};

export default AktualitaCard;
