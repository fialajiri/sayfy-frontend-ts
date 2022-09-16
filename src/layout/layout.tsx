import { Fragment } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <div className="page-container">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
