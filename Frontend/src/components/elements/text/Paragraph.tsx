import React from "react";

type Props = {
  text: string;
};

const Paragraph: React.FC<Props> = ({ text }) => {
  return <p>{text}</p>;
};

export default Paragraph;
