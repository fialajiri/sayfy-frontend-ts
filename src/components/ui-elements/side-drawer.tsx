import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

interface SideDrawerProps {
  show: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook")!);
};

export default SideDrawer;
