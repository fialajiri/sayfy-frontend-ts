import React, { useState, useEffect } from "react";
import NavigationLinks from "./navigation-links";

import SideDrawer from "../../components/ui-elements/side-drawer";
import Backdrop from "../../components/ui-elements/backdrop";
import Logo from "./logo";
import Link from "next/link";

const MainNavigation: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [renderDrawer, setRenderDrawwer] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen((prevState) => !prevState);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
    var x = document.getElementById("navi-toggle");
    // @ts-ignore
    x.checked = false;
  };

  useEffect(() => {
    setRenderDrawwer(true);
  }, []);

  return (
    <div className="navigation">
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {renderDrawer && (
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="navigation__drawer">
            <NavigationLinks />
          </nav>
        </SideDrawer>
      )}
      <div className="main__navigation">
        <input
          type="checkbox"
          className="main__navigation__checkbox"
          id="navi-toggle"
          onChange={openDrawerHandler}
        />

        <label htmlFor="navi-toggle" className="main__navigation__button">
          <span className="main__navigation__icon">&nbsp;</span>
        </label>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav className="main__navigation__links">
          <NavigationLinks />
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
