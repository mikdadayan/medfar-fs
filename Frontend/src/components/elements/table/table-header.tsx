import { TableColumns } from "../../../shared/Table";

type TableHeaderProps = {
  columns: TableColumns[];
};

export const TableHeader = ({ columns }: TableHeaderProps) => {
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
