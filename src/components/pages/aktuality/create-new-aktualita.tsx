import { Fragment, useState } from "react";
import { AktualitaDoc } from "../../../models/models";
import MultipleImageUpload from "../../form-elements/multiple-image-upload";
import TiptapLite from "../../tiptap/tip-tap-lite";
import Tiptap, { FileData } from "../../tiptap/tip-tap";
import Button from "../../ui-elements/button";
import { MethodEnum, useHttpClient } from "../../../hooks/http-hook";
import { maxLength, minLenght } from "../../../utils/validatos/validators";
import { processFiles, uploadFileToS3 } from "../../../utils/upload-to-s3";
import ErrorModal from "../../ui-elements/error-modal";

interface CreateNewAktualitaProps {
  aktualita?: AktualitaDoc;
}

const CreateNewAktualita: React.FC<CreateNewAktualitaProps> = ({ aktualita }) => {
  const [title, setTitle] = useState(aktualita?.title || "");
  const [perex, setPerex] = useState(aktualita?.perex || "");
  const [text, settext] = useState(aktualita?.text || "");
  const [mainPhoto, setMainPhoto] = useState<File[]>([]);
  const [photoGallery, setPhotoGallery] = useState<File[]>([]);
  const [imageIsValid, setImageIsValid] = useState(false);
  const [filesFromEditor, setFilesFromEditor] = useState<FileData[]>([]);
  const { isLoading, clearError, errors, sendRequest } = useHttpClient();

  const submitAktualitaHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!areInputsValid()) {
      return;
    }

    const editorFilesUrls: string[] = [];

    for (const file of filesFromEditor) {
      const fileUrl = await uploadFileToS3(file.file, `aktuality/${title}`);
      text.replace(file.localUrl, fileUrl);
      editorFilesUrls.push(fileUrl);
    }

    const photoGalleryUrls = await processFiles(photoGallery, `aktuality/${title}`);
    const mainPhotoUrl = await uploadFileToS3(mainPhoto[0], `aktuality/${title}`);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("perex", perex);
    formData.append("text", text);
    formData.append("mainPhoto", mainPhotoUrl);
    formData.append("photoGallery", JSON.stringify(photoGalleryUrls));
    formData.append("filesFromEditor", JSON.stringify(filesFromEditor));

    const url = aktualita
      ? `${process.env.BACKEND_URL}/aktualita/${aktualita.id}`
      : `${process.env.BACKEND_URL}/aktualita`;
    const method = aktualita ? MethodEnum.PUT : MethodEnum.POST;

    await sendRequest(url, method, formData);
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

  return (
    <Fragment>
     
      <div className="new-aktualita__container">
        <h3>{aktualita ? "Editovat aktualitu" : "Přidat aktualitu"}</h3>

        <form className="new-aktualita__form" onSubmit={submitAktualitaHandler}>
          <div className="new-aktualita__form-control">
            <label htmlFor="title">Název</label>
            <input className="form-input" id="title" type="text" value={title} />
          </div>
          <div className="new-aktualita__form-control">
            <label>Perex</label>
            <TiptapLite content={perex} setContent={setPerex} />
          </div>
          <div className="new-aktualita__form-control">
            <label>Zpráva</label>
            <Tiptap
              content={text}
              setContent={settext}
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
};

export default CreateNewAktualita;
