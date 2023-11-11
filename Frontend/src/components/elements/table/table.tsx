import React, { useMemo } from "react";
import { User } from "../../../shared/User";
import { TableBody } from "./table-body";
import { TableHeader } from "./table-header";

import { TablePaths } from "../../../shared/Table";

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
        {user.date_created}
      </td>
    ),
  },
];

type TableProps = {
  users: User[];
};

export default function Table({ users }: TableProps) {
  const columns = useMemo(() => tableColumns, []);

  return (
    <div className="tb-container">
      <table className="table table-striped">
        <TableHeader columns={columns} />
        <TableBody users={users} columns={columns} />
      </table>
    </div>
  );
}
