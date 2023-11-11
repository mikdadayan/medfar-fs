import { useMemo } from "react";

import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";
import { TablePaths } from "./tableTypes";
import { User } from "../../../shared/User";
import { formatDate } from "../../../shared/functions";

const tableColumns = [
  {
    path: TablePaths.Id,
    label: TablePaths.Id,
    content: (user: User) => <td key={user.id + Math.random()}>{user.id}</td>,
  },
  {
    path: TablePaths["First Name"],
    label: TablePaths["First Name"],
    content: (user: User) => (
      <td key={user.id + user.first_name + Math.random()}>{user.first_name}</td>
    ),
  },
  {
    path: TablePaths["Last Name"],
    label: TablePaths["Last Name"],
    content: (user: User) => (
      <td key={user.id + user.last_name + Math.random()}>{user.last_name}</td>
    ),
  },
  {
    path: TablePaths.Email,
    label: TablePaths.Email,
    content: (user: User) => (
      <td key={user.id + user.email + Math.random()}>{user.email}</td>
    ),
  },
  {
    path: TablePaths["Date Created"],
    label: TablePaths["Date Created"],
    content: (user: User) => (
      <td key={user.id + user.date_created + Math.random()}>
        {formatDate(user.date_created)}
      </td>
    ),
  },
];

type Props = {
  users: User[];
};

const Table: React.FC<Props> = ({ users }) => {
  const columns = useMemo(() => tableColumns, []);

  return (
    <div className="tb-container">
      <table className="table table-striped">
        <TableHeader columns={columns} />
        <TableBody users={users} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
