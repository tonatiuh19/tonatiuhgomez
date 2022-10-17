import React from "react";
import { Button } from "../../../interfaces/Interfaces";
import "./ButtonKeyboard.css";

const ButtonKeyboard: React.FC<Button> = ({ children, onClick }) => {
  return (
    <button className="arr" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonKeyboard;
