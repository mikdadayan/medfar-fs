import _ from "lodash";

import { User } from "../../../shared/User";
import { TableColumns } from "../../../shared/Table";

type TableBodyProps = {
  users: User[];
  columns: TableColumns[];
};

export const TableBody = ({ users, columns }: TableBodyProps) => {
  return (
    <tbody>
      {users.map((user) => {
        return (
          <tr key={user.id}>
            {columns.map((column) =>
              column.content ? (
                column.content(user)
              ) : (
                <td key={user.id + column.path}>{_.get(user, column.label)}</td>
              )
            )}
          </tr>
        );
      })}
    </tbody>
  );
};
