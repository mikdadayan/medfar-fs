import React from "react";

interface Props {
  id: string;
  title: string;
  onClick: (event: React.MouseEvent) => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const Button: React.FC<Props> = ({
  id,
  title,
  type = "button",
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick} id={id} type={type}>
      {title}
    </button>
  );
};

export default Button;
