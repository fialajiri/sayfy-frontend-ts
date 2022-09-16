import Image from "next/image";

import codeFactory from "../../../public/logos/codeLogo.svg";

const Footer: React.FC = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__created-by">
          <p className="footer__created-by__text">created by:</p>
          <div className="footer__created-by__logo">
            <Image
              src={codeFactory}
              className="footer__image"
              layout="fill"
              objectFit="contain"
              alt="codeFactory s.r.o."
            />
          </div>
          <a className="footer__created-by__email" href="mailto:main@codefactory.cz">
            main@codefactory.cz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
