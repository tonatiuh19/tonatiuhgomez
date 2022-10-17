import React from "react";
import "./Keyboard.css";
import ButtonKeyboard from "../../Atoms/ButtonKeyboard/ButtonKeyboard";
import {
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { KeyboardButtons } from "../../../interfaces/Interfaces";

const Keyboard: React.FC<KeyboardButtons> = ({
  onClickUp,
  onClickLeft,
  onClickDown,
  onClickRight,
}) => {
  return (
    <div className="keysContainer">
      <ButtonKeyboard children={<AiOutlineArrowUp />} onClick={onClickUp} />
      <br />
      <ButtonKeyboard children={<AiOutlineArrowLeft />} onClick={onClickLeft} />
      <ButtonKeyboard children={<AiOutlineArrowDown />} onClick={onClickDown} />
      <ButtonKeyboard
        children={<AiOutlineArrowRight />}
        onClick={onClickRight}
      />
    </div>
  );
};

export default Keyboard;
