import React from "react";
import ButtonGrey from "../../Atoms/ButtonGrey/ButtonGrey";
import "./Footer.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="btnItem">
        <ButtonGrey
          children={<FaLinkedinIn />}
          onClick={() =>
            window.open("https://www.linkedin.com/in/tonatiuhgomez/", "_blank")
          }
        />
      </div>
      <div className="btnItem">
        <ButtonGrey
          children={<FaGithub />}
          onClick={() => window.open("https://github.com/tonatiuh19", "_blank")}
        />
      </div>
      <div className="btnItem">
        <ButtonGrey
          children={<FaFacebookSquare />}
          onClick={() =>
            window.open("https://www.facebook.com/tonatiuhgbr/", "_blank")
          }
        />
      </div>
      <div className="btnItem">
        <ButtonGrey
          children={<FaInstagram />}
          onClick={() =>
            window.open("https://www.instagram.com/tonatiuhgbr/", "_blank")
          }
        />
      </div>
      <div className="btnItem">
        <ButtonGrey
          children={<FaTwitterSquare />}
          onClick={() =>
            window.open("https://twitter.com/goomezbriones", "_blank")
          }
        />
      </div>
    </footer>
  );
};

export default Footer;
