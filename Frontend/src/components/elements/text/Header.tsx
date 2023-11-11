import React from "react";

interface HeaderProps {
  level: number;
  text: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ level, text, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={className}>{text}</Tag>;
};

export default Header;
