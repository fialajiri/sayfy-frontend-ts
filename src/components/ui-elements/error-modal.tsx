import React from "react";
import { ErrorDoc } from "../../interfaces/models";
import Modal from "./modal";

export interface IErrorModalProps {
  onClear: () => void;
  errors: ErrorDoc[];
}

const ErrorModal: React.FC<IErrorModalProps> = ({ onClear, errors }) => {
  const header = "Něco se pokazilo";

  const modalContent = (
    <div>
      {errors.map((error, index) => (
        <p key={index}>{error.message}</p>
      ))}
    </div>
  );

  return (
    <Modal
      hide={onClear}
      header={header}
      modalContent={modalContent}
      isShow={errors.length > 0}
    ></Modal>
  );
};

export default ErrorModal;
