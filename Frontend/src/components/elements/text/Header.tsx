import React from "react";

type Props = {
  level: number;
  text: string;
  className?: string;
};

const Header: React.FC<Props> = ({ level, text, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={className}>{text}</Tag>;
};

export default Header;
