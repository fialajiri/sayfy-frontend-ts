import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { HttpError } from "../../../models/error-model";
import { PropoziceDoc } from "../../../models/models";
import { PropoziceData, savePropozice } from "../../../utils/propozice/save-propozice";
import { maxLength, minLenght } from "../../../utils/validatos/validators";
import Tiptap, { FileData } from "../../tiptap/tip-tap";
import Button from "../../ui-elements/button";
import ErrorModal from "../../ui-elements/error-modal";
import LoadingSpinner from "../../ui-elements/loading-spinner";

interface EditPropoziceProps {
  propozice: PropoziceDoc;
}

const EditPropozice: React.FC<EditPropoziceProps> = ({ propozice }) => {
  const { id } = propozice;
  const [title, setTitle] = useState(propozice.title);
  const [text, setText] = useState(propozice.text);
  const [filesFromEditor, setFilesFromEditor] = useState<FileData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<HttpError | null>(null);

  const submitAktualitaHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (!(minLenght(title) && maxLength(title, 150))) {
      return;
    }

    const propoziceData: PropoziceData = {
      id,
      title,
      text,
      filesFromEditor,
    };

    try {
      await savePropozice(propoziceData);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const router = useRouter();
  const { isAdmin } = useAuth();

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
        <form className="edit-propozice__form" onSubmit={submitAktualitaHandler}>
          <div className="edit-propozice__form-control">
            <label htmlFor="title">Název</label>
            <input
              className="form-input"
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="edit-propozice__form-control">
            <label>Zpráva</label>
            <Tiptap
              content={text}
              setContent={setText}
              selectedFiles={filesFromEditor}
              setSelectedFiles={setFilesFromEditor}
            />
          </div>
          <Button className="edit-propozice__form--button">Uložit</Button>
        </form>
      </Fragment>
    );
  }
};

export default EditPropozice;
