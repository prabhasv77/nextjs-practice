import React from "react";
import styles from "../../styles/Button.module.css";
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className: string;
  style?: React.CSSProperties;
  dataTestId?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  style = {},
  dataTestId,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${styles[className] || ""}`}
      style={style}
      data-testid={dataTestId}
    >
      {text}
    </button>
  );
};

export default Button;
