import Link from "next/link";
import { useRouter } from "next/router";
import { FacebookLogo, User, InstagramLogo } from "phosphor-react";

const NavigationLinks: React.FC = () => {
  const router = useRouter();

  const getClass = (pathName: string): string => {
    if (router.pathname === pathName) return "nav__list__item nav__list__item--active";
    return "nav__list__item";
  };

  return (
    <ul className="nav__list">
      <li className={getClass("/")}>
        <Link href="/">Domů</Link>
      </li>
      <li className={getClass("/sayfy")}>
        <Link href="/sayfy">Sayfy</Link>
      </li>
      <li className={getClass("/aktuality")}>
        <Link href="/aktuality">Aktuality</Link>
      </li>
      <li className={getClass("/propozice")}>
        <Link href="/propozice">Propozice</Link>
      </li>
      <li className={getClass("/vysledky")}>
        <Link href="/vysledky">Výsledky</Link>
      </li>
      <li className={getClass("/fotogalerie")}>
        <Link href="/fotogalerie">Fotogalerie</Link>
      </li>
      <li className={getClass("/kontakt")}>
        <Link href="/kontakt">Kontakt</Link>
      </li>
      <li className="nav__list__item">
        <a href="https://www.facebook.com/sayfyhomemorial" target="_blank" aria-label="Facebook">
          <FacebookLogo className="nav__list__icon" weight="bold" />
        </a>
      </li>
      <li className="nav__list__item">
        <a href="https://www.instagram.com/sayfyhomemorial/" target="_blank" aria-label="Facebook">
          <InstagramLogo className="nav__list__icon" weight="bold" />
        </a>
      </li>
      <li className="nav__list__item">
        <Link href="/login">
          <a aria-label="Login">
            <User className="nav__list__icon" weight="bold" />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
