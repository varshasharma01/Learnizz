import SocialFollow from "./SocialFollow";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-content">
        <SocialFollow />
      </div>
      <div className="row">
        <p className="col-sm">
          Learnizz | All rights reserved | Terms of Service | Privacy
        </p>
      </div>
    </div>
  );
};

export default Footer;
