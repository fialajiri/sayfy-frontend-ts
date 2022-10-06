import React from "react";
import { HttpError } from "../../models/error-model";
import Modal from "./modal";

export interface IErrorModalProps {
  onClear: () => void;
  error: HttpError | null;
}

const ErrorModal: React.FC<IErrorModalProps> = ({ onClear, error }) => {
  const header = "Něco se pokazilo";

  let modalContent: JSX.Element = <></>;

  if (error?.messages) {
    modalContent = (
      <div>
        {error.messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    );
  }

  return (
    <Modal hide={onClear} header={header} modalContent={modalContent} isShow={!!error}></Modal>
  );
};

export default ErrorModal;
