const InfoSection: React.FC = () => {
  return (
    <section className="info-section">
      <div className="info-section__video" >
        <video className="info-section__video--content" autoPlay muted loop >
          <source src="/images/video.mp4" type="video/mp4"></source>
          <source src="/images/video.webm" type="video/webm"></source>
          Váš prohlížeč nepodporuje videa
        </video>
      </div>

      <div className="u-center-text info-section__text" >
        <h2 className="heading-primary">28. září</h2>
        <h2 className="heading-tertiary">každý rok</h2>
        <h2 className="heading-secondary">Královské Město Hrob</h2>
      </div>
    </section>
  );
};

export default InfoSection;
