import "./Footer.css";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <a>loremlore@lorem.com.br</a>
      </div>
      <div className="right">
        <a>
          <BsInstagram />
        </a>
        <a>
          <BsFacebook />
        </a>
        <a>
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
