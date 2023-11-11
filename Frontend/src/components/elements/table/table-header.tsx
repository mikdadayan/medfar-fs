import { TableColumns } from "./tableTypes";

type Props = {
  columns: TableColumns[];
};

export const TableHeader: React.FC<Props> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column: TableColumns) => (
          <th key={column.label + column.path}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};
