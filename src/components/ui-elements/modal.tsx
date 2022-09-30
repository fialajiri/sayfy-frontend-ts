import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./backdrop";
import Button from "./button";

export interface IModalProps {
  isShow: boolean;
  header: string;
  modalContent: JSX.Element;
  hide: () => void;
}

const Modal: React.FC<IModalProps> = ({ isShow, header, hide, modalContent }) => {
  return (
    <React.Fragment>
      {isShow && <Backdrop onClick={hide} />}
      <CSSTransition in={isShow} mountOnEnter unmountOnExit timeout={200} classNames="modal">
        <div className="modal__container">
          <header className="modal__header">
            <h2 className="heading-secondary modal__heading">{header}</h2>
          </header>
          <div className="modal__content">{modalContent}</div>
          <Button onClick={hide}>Ok</Button>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
