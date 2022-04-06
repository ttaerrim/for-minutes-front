import styles from "./Button.module.scss";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

type ButtonTypes = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStyle: string;
  buttonSize: string;
};

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}: ButtonTypes) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`${styles[`${checkButtonStyle}`]} ${
        styles[`${checkButtonStyle}`]
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
