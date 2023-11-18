// import {
//   faFacebookF,
//   faGithub,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { data } from "../data";
import "./Footer.scss";

function Footer() {
  const footer = data.textFooter;
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col col-md-4 col-sm-12 col-footer">
              <div className="footer-content">
                <div className="text-logo">LOGO</div>
                <div className="text-description">{footer.description}</div>
                <ul className="footer-contact">
                  {footer.contact &&
                    footer.contact.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="footer-contact-item">
                            <p>{item.icon}</p>
                            <p>{item.title}: &nbsp;</p>
                            <p>{item.text}</p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="col col-md-2 col-sm-6 col-footer">
              <div className="footer-title-menu">
                <h4>{footer.content.title}</h4>
              </div>
              <div className="footer-content-menu">
                {footer.content.menu &&
                  footer.content.menu.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={{ pathname: `${item.link}` }}
                        className="text-link"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="container-inner">
            <div className="footer-copyright">copyright © 2023 by minhNH.</div>
            <div className="link-follow">
              <ul className="list-unstyle text-content">
                {footer.linkFollow &&
                  footer.linkFollow.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="icon-link">{item.icon}</div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
