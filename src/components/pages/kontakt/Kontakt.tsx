import { Envelope, FacebookLogo, Person, Medal, MapTrifold, Phone } from "phosphor-react";

const Kontakt: React.FC = () => {
  return (
    <div className="contact-page__container">
      <h2 className="heading-secondary contact-page__heading">Kontakt</h2>
      <div className="contact-page__actions">
        <div className="contact-page__actions__location">
          <MapTrifold className="contact-page__actions__icon" />
          <p>město Hrob</p>
        </div>
        <div className="contact-page__actions__join">
          <Medal className="contact-page__actions__icon" />
          <p>Máte chuť se zapojit? Neváhejte se ozvat!</p>
        </div>
        <div className="contact-page__actions__location">
          <Person className="contact-page__actions__icon" />
          <p>Nikola Fialová Seifrtová</p>
        </div>
        <div className="contact-page__actions__location">
          <Phone className="contact-page__actions__icon" />
          <p>+420 607 720 869</p>
        </div>
        <div className="contact-page__actions__location">
          <Envelope className="contact-page__actions__icon" />
          <a href="mailto:seifrtovanikola@gmail.com" rel="noopener noreferrer" target="_blank">
            seifrtovanikola@gmail.com
          </a>
        </div>
        <div className="contact-page__actions__location">
          <FacebookLogo className="contact-page__actions__icon" />
          <a href="https://www.facebook.com/sayfyhomemorial" rel="noopener noreferrer" target="_blank">
            Sledujte nás na Facebooku
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
