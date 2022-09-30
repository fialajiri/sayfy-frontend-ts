import React from "react";
import Modal from "./modal";

export interface IErrorModalProps {
  onClear: () => void;
  errors: string[];
}

const ErrorModal: React.FC<IErrorModalProps> = ({ onClear, errors }) => {
  const header = "Něco se pokazilo";

  const modalContent = (
    <div>
      {errors.map((error) => (
        <p>{error}</p>
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
