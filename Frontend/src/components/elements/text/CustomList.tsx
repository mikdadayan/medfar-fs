import React from "react";

interface CustomListProps {
  items: (string | ListItemProps)[];
}

interface ListItemProps {
  text: string;
  subItems?: string[];
}

const CustomList: React.FC<CustomListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {typeof item === "string" ? (
            item
          ) : (
            <>
              {item.text}
              {item.subItems && <CustomList items={item.subItems} />}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CustomList;
