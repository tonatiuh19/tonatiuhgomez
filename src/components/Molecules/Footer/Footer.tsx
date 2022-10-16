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
          onClick={() => console.log("You clicked on the pink circle!")}
        />
      </div>
      <div className="btnItem">
        <ButtonGrey
          children={<FaGithub />}
          onClick={() => console.log("You clicked on the pink circle!")}
        />
      </div>
      <div className="btnItem">
        <ButtonGrey
          children={<FaFacebookSquare />}
          onClick={() => console.log("You clicked on the pink circle!")}
        />
      </div>
      <div className="btnItem">
        <ButtonGrey
          children={<FaInstagram />}
          onClick={() => console.log("You clicked on the pink circle!")}
        />
      </div>
      <div className="btnItem">
        <ButtonGrey
          children={<FaTwitterSquare />}
          onClick={() => console.log("You clicked on the pink circle!")}
        />
      </div>
    </footer>
  );
};

export default Footer;
