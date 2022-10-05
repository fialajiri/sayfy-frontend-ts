import React from "react";
import { ErrorDoc } from "../../models/models";
import Modal from "./modal";

export interface IErrorModalProps {
  onClear: () => void;
  error: ErrorDoc | null;
}

const ErrorModal: React.FC<IErrorModalProps> = ({ onClear, error }) => {
  const header = "Něco se pokazilo";

  let modalContent: JSX.Element = <></>;

  if (error) {
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
