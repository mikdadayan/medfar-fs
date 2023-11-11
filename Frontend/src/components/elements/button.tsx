import React from "react";

type Props = {
  id?: string;
  title?: string;
  onClick: (event: React.MouseEvent) => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  style?: React.CSSProperties;
};

const Button: React.FC<Props> = ({
  id,
  title,
  type = "button",
  className,
  onClick,
  children,
}) => {
  return (
    <button className={className} onClick={onClick} id={id} type={type}>
      {title || children}
    </button>
  );
};

export default Button;
