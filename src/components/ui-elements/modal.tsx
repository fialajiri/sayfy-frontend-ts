import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Button from "./button";

import Backdrop from "./backdrop";

export interface IModalOverlayProps {
  header: string;
  modalContent: JSX.Element;
  bottomButtonText?:string
  hide: () => void;
}

const ModalOverlay: React.FC<IModalOverlayProps> = ({ header, modalContent, hide, bottomButtonText }) => {
  const content = (
    <div className="modal">
      <header className="modal__header">
        <h2 className="heading-tertiary">{header}</h2>
      </header>
      <div className="modal__content">
        {modalContent}
        <Button onClick={hide}>{bottomButtonText? bottomButtonText : 'Ok'}</Button>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook")!);
};

export interface IModalProps {
  isShow: boolean;
  header: string;
  modalContent: JSX.Element;
  bottomButtonText?:string
  hide: () => void;
}

const Modal: React.FC<IModalProps> = ({ isShow, header, modalContent, hide, bottomButtonText }) => {
  return (
    <React.Fragment>
      {isShow && <Backdrop onClick={hide} />}
      <CSSTransition in={isShow} mountOnEnter unmountOnExit timeout={200} classNames="modal">
        <ModalOverlay header={header} modalContent={modalContent} hide={hide} bottomButtonText={bottomButtonText} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
