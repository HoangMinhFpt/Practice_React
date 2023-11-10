import { data } from "../data";
import "./Footer.scss";

function Footer() {
  const footer = data.textFooter;
  console.log(footer.content);
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-container">
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
                          {item.icon}
                          <span>
                            {item.title}: {item.text}
                          </span>
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
                    return <div key={index}>{item}</div>;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
