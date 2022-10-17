import React from "react";
import { Button } from "../../../interfaces/Interfaces";
import "./ButtonGrey.css";

const ButtonGrey: React.FC<Button> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn-grey">
      {children}
    </button>
  );
};

export default ButtonGrey;
