import React from "react";

interface HeaderProps {
  level: number;
  text: string;
}

const Header: React.FC<HeaderProps> = ({ level, text }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag>{text}</Tag>;
};

export default Header;
