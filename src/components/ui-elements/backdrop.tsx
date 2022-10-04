import React from "react";
import ReactDOM from "react-dom";

export interface IBackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<IBackdropProps> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
