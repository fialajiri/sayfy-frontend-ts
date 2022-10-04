import React from "react";
import Modal from "./modal";
import { ErrorDoc } from "../../interfaces/models";

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


