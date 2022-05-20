import React from "react";
import style from './Button.module.scss';

type ButtonText = {
  text: string;
}

const Button = ({ text }: ButtonText) => {
  return (
    <button className={style.button}>
      { text }
    </button>
  )
}

export default Button;