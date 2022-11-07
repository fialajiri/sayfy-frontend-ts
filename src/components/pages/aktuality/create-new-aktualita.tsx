import { Fragment, useState } from "react";
import { AktualitaDoc } from "../../../models/models";
import MultipleImageUpload from "../../form-elements/multiple-image-upload";
import TiptapLite from "../../tiptap/tip-tap-lite";
import Tiptap, { FileData } from "../../tiptap/tip-tap";
import Button from "../../ui-elements/button";
import { maxLength, minLenght } from "../../../utils/validatos/validators";
import ErrorModal from "../../ui-elements/error-modal";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import { useRouter } from "next/router";
import { aktualitaData, saveAktualita } from "../../../utils/aktualita/save-aktualita";
import { useAuth } from "../../../context/auth-context";
import { HttpError } from "../../../models/error-model";

interface CreateNewAktualitaProps {
  aktualita?: AktualitaDoc;
}

const CreateNewAktualita: React.FC<CreateNewAktualitaProps> = ({ aktualita }) => {
  const [title, setTitle] = useState(aktualita?.title || "");
  const [perex, setPerex] = useState(aktualita?.perex || "");
  const [text, setText] = useState(aktualita?.text || "");
  const [mainPhoto, setMainPhoto] = useState<File[]>([]);
  const [photoGallery, setPhotoGallery] = useState<File[]>([]);
  const [imageIsValid, setImageIsValid] = useState(aktualita ? true : false);
  const [filesFromEditor, setFilesFromEditor] = useState<FileData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<HttpError | null>(null);

  const router = useRouter();
  const { isAdmin } = useAuth();

  const submitAktualitaHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (!areInputsValid()) {
      setIsLoading(true);
      return;
    }

    const aktualitaData: aktualitaData = {
      id: aktualita?.id,
      title,
      perex,
      text,
      mainPhoto,
      photoGallery,
      filesFromEditor,
    };

    

    try {
      await saveAktualita(aktualitaData);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }

    router.push("/aktuality");
  };

  const areInputsValid = () => {
    return (
      minLenght(title) &&
      maxLength(title, 150) &&
      minLenght(perex) &&
      maxLength(perex, 500) &&
      imageIsValid
    );
  };

  const clearError = () => {
    setError(null);
  };

  if (!isAdmin) {
    typeof window !== "undefined" && router.push("/login");
    return <LoadingSpinner asOverlay />;
  } else {
    return (
      <Fragment>
        {isLoading && <LoadingSpinner asOverlay />}
        <ErrorModal error={error} onClear={clearError} />
        <div className="new-aktualita__container">
          <h3>{aktualita ? "Editovat aktualitu" : "Přidat aktualitu"}</h3>

          <form className="new-aktualita__form" onSubmit={submitAktualitaHandler}>
            <div className="new-aktualita__form-control">
              <label htmlFor="title">Název</label>
              <input
                className="form-input"
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="new-aktualita__form-control new-aktualita__form-control--perex">
              <label>Perex</label>
              <TiptapLite content={perex} setContent={setPerex} />
            </div>
            <div className="new-aktualita__form-control">
              <label>Zpráva</label>
              <Tiptap
                content={text}
                setContent={setText}
                selectedFiles={filesFromEditor}
                setSelectedFiles={setFilesFromEditor}
              />
            </div>
            <div className="new-aktualita__form-control">
              <label>Hlavní Obrázek</label>
              <MultipleImageUpload
                inputId="mainImage"
                maxFiles={1}
                setImages={setMainPhoto}
                isValid={imageIsValid}
                setIsValid={setImageIsValid}
                initialFilesUrl={aktualita?.mainPhoto ? [aktualita.mainPhoto] : []}
                buttonLabel="Vyberte hlavní obrázek"
              />
            </div>
            <div className="new-aktualita__form-control">
              <label>Fotogalerie</label>
              <MultipleImageUpload
                inputId="photoGallery"
                maxFiles={10}
                setImages={setPhotoGallery}
                isValid={imageIsValid}
                setIsValid={setImageIsValid}
                initialFilesUrl={aktualita?.photoGallery ? aktualita.photoGallery : []}
                buttonLabel="Fotogalerie (max. 10 obrázků)"
              />
            </div>
            <Button className="new-aktualita__form--button">Uložit</Button>
          </form>
        </div>
      </Fragment>
    );
  }
};

export default CreateNewAktualita;
